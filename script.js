// Telegram WebApp API লোড করা
let tg = window.Telegram ? window.Telegram.WebApp : null;
if(tg) tg.expand();

// Placeholder balance (পরে বট আপডেট করবে)
const balanceEl = document.getElementById("balance");
if(balanceEl) balanceEl.innerText = "0 ৳";

// Button Functions
function earn() {
    if(tg && tg.sendData) tg.sendData(JSON.stringify({action: "earn"}));
    else alert("Will send: earn");
}

function refer() {
    if(tg && tg.sendData) tg.sendData(JSON.stringify({action: "refer"}));
    else alert("Share referral link");
}

function withdraw() {
    if(tg && tg.sendData) tg.sendData(JSON.stringify({action: "withdraw"}));
    else alert("Withdraw requested");
}