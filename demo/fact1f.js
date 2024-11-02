document.addEventListener('DOMContentLoaded', () => {
    const factElement = document.getElementById('fact');
    const factLengthElement = document.getElementById('fact-length');
    const loadingElement = document.getElementById('loading');
    let originalFact = '';

    async function fetchRandomFact() {
        try {
            showLoading(true);
            const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            originalFact = data.text || "Sorry, couldn't fetch a fact.";
            factElement.textContent = originalFact;
            factLengthElement.textContent = `Fact length: ${originalFact.length} characters`;
        } catch (error) {
            factElement.textContent = "Failed to load fact. Please try again.";
            console.error("Error fetching fact:", error);
        } finally {
            showLoading(false);
        }
    }

    async function translateFact() {
        try {
            showLoading(true);
            const factText = originalFact || factElement.textContent;
            const langPair = document.getElementById('language').value;
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(factText)}&langpair=${langPair}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const translatedText = data.responseData.translatedText;
            factElement.textContent = translatedText;
        } catch (error) {
            console.error("Error translating fact:", error);
            alert('Failed to translate fact. Please try again.');
        } finally {
            showLoading(false);
        }
    }

    function copyFact() {
        const factText = factElement.textContent;
        navigator.clipboard.writeText(factText).then(() => {
            alert('Fact copied to clipboard! 📋');
        }).catch(err => {
            console.error('Could not copy fact: ', err);
            alert('Failed to copy fact. Please try again.');
        });
    }

    function shareFact() {
        const factText = factElement.textContent;
        if (navigator.share) {
            navigator.share({
                title: 'Random Fact',
                text: factText,
                url: window.location.href
            }).catch(err => {
                console.error('Error sharing fact: ', err);
                alert('Failed to share fact. Please try again.');
            });
        } else {
            alert('Sharing is not supported on this device/browser. 😕');
        }
    }

    function rateFact() {
        const rating = prompt("Rate this fact from 1 to 5 stars ⭐:");
        if (rating && !isNaN(rating) && rating >= 1 && rating <= 5) {
            alert(`Thank you for rating this fact ${rating} stars! ${'⭐'.repeat(rating)}`);
        } else {
            alert('Invalid rating. Please rate between 1 and 5 stars. ❌');
        }
    }

    function saveFact() {
        const factText = factElement.textContent;
        const savedFacts = JSON.parse(localStorage.getItem('savedFacts') || '[]');
        savedFacts.push(factText);
        localStorage.setItem('savedFacts', JSON.stringify(savedFacts));
        alert('Fact saved! 📚');
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    function downloadFact() {
        const factText = factElement.textContent;
        const blob = new Blob([factText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'random_fact.txt';
        link.click();
    }

    function viewSavedFacts() {
        const savedFacts = JSON.parse(localStorage.getItem('savedFacts') || '[]');
        if (savedFacts.length > 0) {
            alert(`📚 Saved Facts:\n\n${savedFacts.join('\n\n')}`);
        } else {
            alert('No saved facts yet. 📭');
        }
    }

    function speakFact() {
        const factText = factElement.textContent;
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(factText);
            speechSynthesis.speak(utterance);
        } else {
            alert('Text-to-speech is not supported on this device/browser. 🔇');
        }
    }

    function changeFontSize() {
        const currentSize = parseInt(window.getComputedStyle(factElement).fontSize);
        const newSize = prompt("Enter new font size (px):", currentSize);
        if (newSize && !isNaN(newSize)) {
            factElement.style.fontSize = `${newSize}px`;
        }
    }

    function showLoading(isLoading) {
        loadingElement.style.display = isLoading ? 'block' : 'none';
        factElement.style.display = isLoading ? 'none' : 'block';
    }

    // Initialize
    window.fetchRandomFact = fetchRandomFact;
    window.translateFact = translateFact;
    window.copyFact = copyFact;
    window.shareFact = shareFact;
    window.rateFact = rateFact;
    window.saveFact = saveFact;
    window.toggleDarkMode = toggleDarkMode;
    window.downloadFact = downloadFact;
    window.viewSavedFacts = viewSavedFacts;
    window.speakFact = speakFact;
    window.changeFontSize = changeFontSize;

    // Fetch a random fact when the page loads
    fetchRandomFact();
}); 