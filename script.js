// script.js
const textElement = document.getElementById('text');
const cursor = document.getElementById('cursor');
const redirectButton = document.getElementById('redirect-button');
const text = "Hey nosy dude, looks like you scanned the QR code I (secretly) taped on the bus on your phone... Anyway, let's not drag things out any further... for you.";
let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent += text[index];
        index++;

        if (text[index - 1] === "." || text[index - 1] === "?") {
            setTimeout(typeText, 1000); // Cümle sonlarında bekleme
        } else {
            setTimeout(typeText, 75); // Normal yazma
        }
    } else {
        // Yazma tamamlandığında
        cursor.style.display = "none"; // İmleci gizle
        redirectButton.style.display = "block"; // Butonu göster
    }
}

redirectButton.addEventListener('click', () => {
    window.location.href = "https://www.linkslist.app/WEoONoO";
});

typeText();
