// script.js
const textContainer = document.getElementById('text-container');
const redirectButton = document.getElementById('redirect-button');
const text = "Hey nosy dude, looks like you scanned the QR code I (secretly) taped on the bus on your phone... Anyway, let's not drag things out any further... for you.";
const words = text.split(" "); // Cümleyi kelimelere ayır
let wordIndex = 0;

function typeText() {
    if (wordIndex < words.length) {
        const word = document.createElement('span'); // Yeni bir kelime oluştur
        word.textContent = words[wordIndex] + " "; // Kelimeyi ekle (sonuna boşluk da ekle)
        word.classList.add('text-fade'); // Solarak belirme animasyonu ekle
        textContainer.appendChild(word); // Kelimeyi ekrana ekle

        wordIndex++;
        setTimeout(typeText, 350); // Bir sonraki kelimeyi eklemeden önce bekle
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
