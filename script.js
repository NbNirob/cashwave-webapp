let tg = window.Telegram.WebApp;

tg.expand();

// অন্য জায়গা থেকে balance লোড করা না থাকলে 0 দেখাবে
let bal = 0;
document.getElementById("balance").innerText = bal + " ৳";

// এই ফাংশন বাটনে ক্লিক করলে Bot-এ ডেটা পাঠাবে
function sendAction(actionName) {

    let data = {
        "event": actionName,
        "time": Date.now()
    };

    // Telegram Bot এ ডেটা পাঠায়
    tg.sendData(JSON.stringify(data));

    // পাঠানোর পর WebApp বন্ধ
    tg.close();
}
