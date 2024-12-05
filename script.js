// script.js
const textElement = document.getElementById('text');
const cursor = document.getElementById('cursor');
const clickContainer = document.getElementById('click-container');
const redirectButton = document.getElementById('redirect-button');
const text = "Hey nosy dude, looks like you scanned the QR code I (secretly) taped on the bus on your phone... Anyway, let's not drag things out any further... for you.";
let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent += text[index];
        index++;

        if (text[index - 1] === "." || text[index - 1] === "?") {
            // Cümle sonlarında bekleme yap
            setTimeout(typeText, 1000);
        } else {
            // Normal yazma
            setTimeout(typeText, 75);
        }
    } else {
        // Yazma tamamlandığında
        cursor.classList.remove('blink'); // Cursor'un yanıp sönmesini durdur
        cursor.style.display = "none"; // Cursor'u gizle
        clickContainer.style.display = "block"; // "Click me" butonunu göster
    }
}

redirectButton.addEventListener('click', () => {
    window.location.href = "https://www.linkslist.app/WEoONoO";
});

typeText();
