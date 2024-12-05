// script.js
const textElement = document.getElementById('text');
const cursor = document.getElementById('cursor');
const redirectButton = document.getElementById('redirect-button');
const text = "Hey nosy dude, looks like you scanned the QR code I (secretly) taped on the bus on your phone... Anyway, let's not drag things out any further... for you.";
let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent = text.substring(0, index + 1); // Yazıyı güncelle
        index++;

        if (text[index - 1] === "." || text[index - 1] === "?") {
            // Cümle sonlarında bekleme
            setTimeout(typeText, 1000);
        } else {
            // Normal yazma
            setTimeout(typeText, 75);
        }
    } else {
        // Yazma tamamlandığında
        cursor.style.display = "none"; // Cursor'u gizle
        redirectButton.style.display = "block"; // "Click me" butonunu göster
    }
}

redirectButton.addEventListener('click', () => {
    window.location.href = "https://www.linkslist.app/WEoONoO";
});

typeText();
