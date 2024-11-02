document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('webcam');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const objectList = document.getElementById('detected-objects');
    const startButton = document.getElementById('start-button');
    const stopButton = document.getElementById('stop-button');
    const statusElement = document.getElementById('status');
    const thresholdSlider = document.getElementById('threshold-slider');
    const thresholdValue = document.getElementById('threshold-value');
    const fpsElement = document.getElementById('fps');
    const latencyElement = document.getElementById('latency');

    let model;
    let isDetecting = false;
    let currentStream;
    let detectionThreshold = 0.66;
    let lastFrameTime = 0;
    let frameCount = 0;
    let detectionHistory = {};

    async function loadModel() {
        try {
            statusElement.textContent = 'Loading model...';
            model = await cocoSsd.load();
            statusElement.textContent = 'Model loaded. Click "Start Detection" to begin.';
            startButton.disabled = false;
        } catch (error) {
            console.error('Failed to load model:', error);
            statusElement.textContent = 'Error: Failed to load model.';
        }
    }

    async function setupCamera() {
        if (currentStream) {
            currentStream.getTracks().forEach(track => track.stop());
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment',
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            });

            video.srcObject = stream;
            currentStream = stream;

            return new Promise(resolve => {
                video.onloadedmetadata = () => {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    resolve();
                };
            });
        } catch (error) {
            console.error('Error accessing camera:', error);
            statusElement.textContent = 'Error: Could not access camera.';
        }
    }

    async function detectObjects() {
        if (!isDetecting) return;

        const startTime = performance.now();

        try {
            const predictions = await model.detect(video);
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Update object list
            objectList.innerHTML = '';
            predictions.forEach(prediction => {
                if (prediction.score > detectionThreshold) {
                    drawPrediction(prediction);
                    updateObjectList(prediction);
                    updateDetectionHistory(prediction);
                }
            });

            // Update performance metrics
            updatePerformanceMetrics(startTime);
            
            requestAnimationFrame(detectObjects);
        } catch (error) {
            console.error('Detection error:', error);
            statusElement.textContent = 'Detection error occurred.';
        }
    }

    function drawPrediction(prediction) {
        const [x, y, width, height] = prediction.bbox;
        
        // Draw box
        ctx.strokeStyle = '#00FFFF';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);

        // Draw label
        ctx.fillStyle = '#00FFFF';
        ctx.font = '16px Arial';
        ctx.fillText(
            `${prediction.class} ${Math.round(prediction.score * 100)}%`,
            x,
            y > 20 ? y - 5 : y + height + 20
        );
    }

    function updateObjectList(prediction) {
        const li = document.createElement('li');
        li.textContent = `${prediction.class} (${Math.round(prediction.score * 100)}%)`;
        objectList.appendChild(li);
    }

    function updateDetectionHistory(prediction) {
        if (!detectionHistory[prediction.class]) {
            detectionHistory[prediction.class] = [];
        }
        detectionHistory[prediction.class].push({
            time: new Date(),
            confidence: prediction.score
        });
    }

    function updatePerformanceMetrics(startTime) {
        const endTime = performance.now();
        const elapsed = endTime - lastFrameTime;
        frameCount++;

        if (elapsed > 1000) {
            const fps = Math.round((frameCount * 1000) / elapsed);
            fpsElement.textContent = `FPS: ${fps}`;
            frameCount = 0;
            lastFrameTime = endTime;
        }

        const latency = Math.round(endTime - startTime);
        latencyElement.textContent = `Latency: ${latency}ms`;
    }

    // Event Listeners
    startButton.addEventListener('click', async () => {
        if (!model) {
            statusElement.textContent = 'Please wait for the model to load.';
            return;
        }

        await setupCamera();
        isDetecting = true;
        startButton.style.display = 'none';
        stopButton.style.display = 'inline-block';
        detectObjects();
    });

    stopButton.addEventListener('click', () => {
        isDetecting = false;
        if (currentStream) {
            currentStream.getTracks().forEach(track => track.stop());
        }
        stopButton.style.display = 'none';
        startButton.style.display = 'inline-block';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    thresholdSlider.addEventListener('input', () => {
        detectionThreshold = thresholdSlider.value / 100;
        thresholdValue.textContent = `Threshold: ${thresholdSlider.value}%`;
    });

    // Initialize
    loadModel();
}); 