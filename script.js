let tg = window.Telegram.WebApp;

// Telegram theme অনুযায়ী অটো ডার্ক/লাইট
tg.expand();

// Fake balance for display only
let balance = 0;
document.getElementById("balance").innerText = balance + " ৳";

// When user clicks button, send data to bot
function sendAction(action) {

    let data = {
        event: action,
        user: tg.initDataUnsafe.user
    };

    tg.sendData(JSON.stringify(data)); // Send JSON to bot

    tg.close();  // Auto close after sending
}
