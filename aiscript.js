// DOM Elements
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const buttonIcon = document.getElementById("buttonIcon");
const headerColor = document.getElementById("headerColor");
const botTextColor = document.getElementById("botTextColor");
const botBubbleColor = document.getElementById("botBubbleColor");
const userTextColor = document.getElementById("userTextColor");
const userBubbleColor = document.getElementById("userBubbleColor");
const borderRadius = document.getElementById("borderRadius");
const fontStyleButtons = document.querySelectorAll(".font-style");

// Send Message
sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        // Add user message
        const userMsgElement = document.createElement("div");
        userMsgElement.classList.add("user-message");
        userMsgElement.textContent = userMessage;
        chatBox.appendChild(userMsgElement);

        // Add bot reply
        const botMsgElement = document.createElement("div");
        botMsgElement.classList.add("bot-message");
        botMsgElement.textContent = "I'm here to help!";
        chatBox.appendChild(botMsgElement);

        // Clear input
        userInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

// Update Button Icon Dynamically
buttonIcon.addEventListener("change", (e) => {
    sendBtn.textContent = e.target.value;
});

// Customizations
headerColor.addEventListener("input", (e) => {
    document.querySelector(".chat-header").style.backgroundColor = e.target.value;
});

botTextColor.addEventListener("input", (e) => {
    document.querySelectorAll(".bot-message").forEach((el) => {
        el.style.color = e.target.value;
    });
});

botBubbleColor.addEventListener("input", (e) => {
    document.querySelectorAll(".bot-message").forEach((el) => {
        el.style.backgroundColor = e.target.value;
    });
});

userTextColor.addEventListener("input", (e) => {
    document.querySelectorAll(".user-message").forEach((el) => {
        el.style.color = e.target.value;
    });
});

userBubbleColor.addEventListener("input", (e) => {
    document.querySelectorAll(".user-message").forEach((el) => {
        el.style.backgroundColor = e.target.value;
    });
});

borderRadius.addEventListener("input", (e) => {
    document.querySelectorAll(".bot-message, .user-message").forEach((el) => {
        el.style.borderRadius = e.target.value + "px";
    });
});

fontStyleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        document.body.style.fontFamily = button.dataset.font;
    });
});
