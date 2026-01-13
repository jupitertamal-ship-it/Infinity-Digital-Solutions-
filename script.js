let userName = "";

// Start the chat after entering name
function startChat() {
  userName = document.getElementById("userName").value.trim();
  if (!userName) return;

  document.getElementById("nameScreen").classList.add("hidden");
  document.getElementById("chatScreen").classList.remove("hidden");

  document.getElementById("botMessage").innerText =
    `Hello ${userName}! I am Infinity Robot 🤖. How can I help you?`;
}

// Send message
function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "userMsg");
  input.value = "";

  setTimeout(() => {
    const reply = botReply(text);
    addMessage(reply, "botMsg");
    document.getElementById("botMessage").innerText = reply;
  }, 600);
}

// Add message to chatBox
function addMessage(text, cls) {
  const div = document.createElement("div");
  div.className = cls;
  div.innerText = text;
  document.getElementById("chatBox").appendChild(div);
}

// Bot reply logic
function botReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! How can I assist you today?";
  }
  if (msg.includes("কি") || msg.includes("kemon")) {
    return "আমি ভালো আছি 😊 আপনি কী জানতে চান?";
  }
  if (msg.includes("service") || msg.includes("কাজ")) {
    return "Infinity Digital Solutions আপনার ডিজিটাল সলিউশন পার্টনার 🚀";
  }
  return "Interesting! Please tell me more 😊";
}
