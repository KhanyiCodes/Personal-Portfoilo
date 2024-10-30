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
    "hello", "Hello", "hi", "Hi", "current", "certifications", "characteristics",
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
    } else {
        switch (response) {
            case "hello":
            case "Hello":
            case "hi":
            case "Hi":
                response = "What would you like to know about Rebaone?";
                break;
            case "name":
                response = "My name is Rebaone Vilakazi.";
                break;
            case "education":
                response = "I have a Diploma of Information Technology in Software Development from Rosebank College"; 
                break;
            case "project":
                response = "I have worked on various projects including web development,  software design, development testing and more.";
                break;
            case "skills":
                response = "I have skills in Java, C#, PL/SQL, MS Azure, HTML, CSS, JavaScript, Kotlin, Firebase, Server, My SQL, Azure, PHPMyAdmin, ASP.NET, WPF, .NET, Visual Studio, Visual Studio Code, Notepad++, NetBeans, and Android Studio";
                break;
            case "about":
                response = "My education has equipped me with a strong foundation in programming languages, software development principles, and modern development practices.";
                break;
            case "certifications":
                response = "CompTIA A+, Introduction to Cyber Security, Introduction to Software Development, Approaches of Software Development, and Software Development for enterprise systems"
                break;
            case "characteristics":
                response = "Passion for Learning, Time Management, Team Collaboration, Ability to adapt and learn quickly, Ethical Consideration, Teamwork and Problem-Solving Skills";
                break;
            case "location":
                response = "I'm based in Johannesburg, South Africa.";
                break;
            case "contact":
                response = "You can contact me via email at rebaonevilakazi@gmail.com";
                break;
            case "timeline":
                response = "Started my journey in 2015 at The Glen High School, completed my Diploma in June 2024 at Rosebank Collage, and currently working as a Java Developer Intern at FNB x CAPACITI.";
                break;
            case "current":
                response = "I'm currently a Java Developer Intern at FNB x CAPACITI.";
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




