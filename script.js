let chatVisible = false;

function toggleChat() {
    const chatContainer = document.querySelector('.chat-container');
    chatVisible = !chatVisible;
    chatContainer.style.display = chatVisible ? 'block' : 'none';
}

function sendMessage() {
    const inputField = document.getElementById('input-field');
    const messageText = inputField.value.trim();

    if (messageText) {
        displayMessage(messageText, 'user');
        inputField.value = '';
        simulateBotResponse();
    }
}

function displayMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
}

function simulateBotResponse() {
    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.style.display = 'flex';
    
    setTimeout(() => {
        typingIndicator.style.display = 'none';
        const botMessage = "I'm here to help!"; // Replace with actual bot response logic
        displayMessage(botMessage, 'bot');
    }, 2000); // Simulates a delay for bot response
}

// Send message on Enter key press
document.getElementById('input-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});