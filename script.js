// script.js
const textContainer = document.getElementById('text-container');
const redirectButton = document.getElementById('redirect-button');
const text = [
    "Hey nosy dude,",
    "looks like you scanned the QR code",
    "I (secretly) taped on the bus on your phone...",
    "Anyway, let's not drag things out any further...",
    "for you."
];
let lineIndex = 0;

function typeText() {
    if (lineIndex < text.length) {
        const line = document.createElement('div'); // Yeni bir satır oluştur
        line.textContent = text[lineIndex]; // Yazıyı ekle
        line.classList.add('text-fade'); // Solarak belirme animasyonu ekle
        textContainer.appendChild(line); // Metni ekrana ekle

        lineIndex++;
        setTimeout(typeText, 1000); // Bir sonraki satırı bekleyerek yaz
    } else {
        // Yazma tamamlandığında
        setTimeout(() => {
            redirectButton.style.display = "block"; // "Click me" butonunu göster
        }, 1000);
    }
}

redirectButton.addEventListener('click', () => {
    window.location.href = "https://www.linkslist.app/WEoONoO";
});

typeText();
