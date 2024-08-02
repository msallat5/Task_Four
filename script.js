const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const result = document.getElementById('result');

// Check for browser support
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
    result.textContent = "Sorry, your browser doesn't support Speech Recognition.";
} else {
    const recognition = new SpeechRecognition();

    recognition.onstart = () => {
        result.textContent = "Listening...";
    };

    recognition.onspeechend = () => {
        recognition.stop();
    };

    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        result.textContent = text;

        // Send the text to the server
        fetch('http://localhost:5000/saveText', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                console.log('Text saved with ID:', data.id);
            } else {
                console.error('Error:', data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    startButton.addEventListener('click', () => {
        recognition.start();
    });

    stopButton.addEventListener('click', () => {
        recognition.stop();
    });
}
