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
        typingIndicator.style.display = 'hello';
        const botMessage = "I'm here to help!"; // Replace with actual bot response logic
        displayMessage(botMessage, 'bot');
    }, 1000); // Simulates a delay for bot response
}


//More funtions
const keywords = [
    "name", "education", "project", "skills", "about", "location", "contact", "timeline"
];

function findKeyword(userInput) {
    for (let keyword of keywords) {
        if (userInput.toLowerCase().includes(keyword)) {
            return keyword;
        }
    }
    return null;
}

function addMessage(message, className) {
    const chatMessages = document.getElementById("chat-messages");
    const messageElement = document.createElement("div");
    messageElement.className = className;
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
}

function sendMessage() {
    const userInput = document.getElementById("input-field").value.trim();
    if (userInput === "") return;

    addMessage(`You: ${userInput}`, "user-message");
    let response = findKeyword(userInput);

    if (!response) {
        response = "I'm sorry, I didn't understand that. Can you ask something else?";
    } else {
        switch (response) {
            case "name":
                response = "My name is Rebaone.";
                break;
            case "education":
                response = "I have a degree in Computer Science.";
                break;
            case "project":
                response = "I have worked on various projects including web development and AI.";
                break;
            case "skills":
                response = "I have skills in HTML, CSS, JavaScript, and more!";
                break;
            case "about":
                response = "I'm here to assist you with information about my portfolio.";
                break;
            case "location":
                response = "I'm based in [Your Location].";
                break;
            case "contact":
                response = "You can contact me via email at example@example.com.";
                break;
            case "timeline":
                response = "My project timeline spans several years of work.";
                break;
            default:
                response = "I'm here to assist you!";
                break;
        }
    }

    addMessage(`Chatbot: ${response}`, "bot-message");
    document.getElementById("input-field").value = ""; // Clear the input field
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function toggleChat() {
    const chatContainer = document.querySelector(".chat-container");
    chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
}




