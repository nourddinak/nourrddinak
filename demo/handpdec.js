document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('output');
    const ctx = canvas.getContext('2d');
    const toggleButton = document.getElementById('toggleDetection');
    const flipButton = document.getElementById('flipCamera');
    const statsDiv = document.getElementById('stats');
    const fingerInfoDiv = document.getElementById('finger-info');
    const sensitivitySlider = document.getElementById('sensitivity');

    let model;
    let isDetecting = false;
    let currentStream;
    let facingMode = "user";
    let sensitivity = 50;

    const fingerNames = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'];
    const notesLeft = ['C3', 'D3', 'E3', 'F3', 'G3'];
    const notesRight = ['C4', 'D4', 'E4', 'F4', 'G4'];
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    let lastFingerPositions = [new Array(5).fill(null), new Array(5).fill(null)];
    let fingerVelocities = [new Array(5).fill(0), new Array(5).fill(0)];
    let isFingerMoving = [new Array(5).fill(false), new Array(5).fill(false)];

    function createPianoKeys() {
        const leftContainer = document.getElementById('piano-keys-left');
        const rightContainer = document.getElementById('piano-keys-right');
        
        [leftContainer, rightContainer].forEach((container, index) => {
            const notes = index === 0 ? notesLeft : notesRight;
            container.innerHTML = '';
            notes.forEach((_, i) => {
                const key = document.createElement('div');
                key.className = 'piano-key';
                key.id = `${container.id}-key-${i}`;
                container.appendChild(key);
            });
        });
    }

    async function setupCamera() {
        if (currentStream) {
            currentStream.getTracks().forEach(track => track.stop());
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: facingMode,
                    width: { ideal: 640 },
                    height: { ideal: 480 }
                }
            });

            currentStream = stream;
            video.srcObject = stream;
            return new Promise(resolve => {
                video.onloadedmetadata = () => {
                    video.play();
                    resolve(video);
                };
            });
        } catch (error) {
            console.error("Error accessing camera:", error);
            alert("Unable to access camera. Please ensure you've granted the necessary permissions.");
        }
    }

    async function loadModel() {
        try {
            model = await handpose.load();
            toggleButton.disabled = false;
        } catch (error) {
            console.error("Error loading model:", error);
            alert("Failed to load hand detection model. Please try again.");
        }
    }

    async function startDetection() {
        if (!model) return;
        
        try {
            const predictions = await model.estimateHands(video);
            if (predictions.length > 0) {
                predictions.forEach((hand, index) => {
                    drawHand(hand.landmarks, index);
                    detectPianoPress(hand.annotations, index);
                });
            }
            
            if (isDetecting) {
                requestAnimationFrame(startDetection);
            }
        } catch (error) {
            console.error("Error during hand detection:", error);
        }
    }

    function drawHand(landmarks, handIndex) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw hand skeleton
        for (let i = 0; i < landmarks.length; i++) {
            const point = landmarks[i];
            ctx.beginPath();
            ctx.arc(point[0], point[1], 5, 0, 2 * Math.PI);
            ctx.fillStyle = handIndex === 0 ? '#00ff00' : '#ff0000';
            ctx.fill();
        }
    }

    function detectPianoPress(annotations, handIndex) {
        const fingerTips = [
            annotations.thumb[3],
            annotations.indexFinger[3],
            annotations.middleFinger[3],
            annotations.ringFinger[3],
            annotations.pinky[3]
        ];

        const sensitivityValue = sensitivitySlider.value / 100;
        const threshold = 20 * sensitivityValue;

        fingerTips.forEach((tip, fingerIndex) => {
            if (lastFingerPositions[handIndex][fingerIndex]) {
                const dy = tip[1] - lastFingerPositions[handIndex][fingerIndex][1];
                
                if (dy > threshold && !isFingerMoving[handIndex][fingerIndex]) {
                    isFingerMoving[handIndex][fingerIndex] = true;
                    playNote(fingerIndex, handIndex);
                } else if (dy < -threshold && isFingerMoving[handIndex][fingerIndex]) {
                    isFingerMoving[handIndex][fingerIndex] = false;
                    stopNote(fingerIndex, handIndex);
                }
            }
            lastFingerPositions[handIndex][fingerIndex] = tip;
        });
    }

    function playNote(fingerIndex, handIndex) {
        const notes = handIndex === 0 ? notesLeft : notesRight;
        synth.triggerAttack(notes[fingerIndex]);
        const keyId = `piano-keys-${handIndex === 0 ? 'left' : 'right'}-key-${fingerIndex}`;
        document.getElementById(keyId).classList.add('active');
    }

    function stopNote(fingerIndex, handIndex) {
        const notes = handIndex === 0 ? notesLeft : notesRight;
        synth.triggerRelease(notes[fingerIndex]);
        const keyId = `piano-keys-${handIndex === 0 ? 'left' : 'right'}-key-${fingerIndex}`;
        document.getElementById(keyId).classList.remove('active');
    }

    // Event Listeners
    toggleButton.addEventListener('click', async () => {
        if (!isDetecting) {
            await setupCamera();
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            isDetecting = true;
            toggleButton.textContent = 'Stop Detection';
            startDetection();
        } else {
            isDetecting = false;
            toggleButton.textContent = 'Start Detection';
            if (currentStream) {
                currentStream.getTracks().forEach(track => track.stop());
            }
        }
    });

    flipButton.addEventListener('click', () => {
        facingMode = facingMode === "user" ? "environment" : "user";
        if (isDetecting) {
            setupCamera();
        }
    });

    sensitivitySlider.addEventListener('input', (e) => {
        sensitivity = e.target.value;
    });

    // Initialize
    createPianoKeys();
    loadModel();
}); 