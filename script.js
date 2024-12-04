// script.js
const textElement = document.getElementById('text');
const cursor = document.getElementById('cursor');
const text = "Hey nosy dude, looks like you scanned the qr code I (secretly) taped on the bus, on your phone... Anyway, let's not drag things out any further... for you.";
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
        // Yazma tamamlandığında yönlendirme yap
        cursor.classList.remove('blink'); // Cursor'un yanıp sönmesini durdur
        setTimeout(() => {
            window.location.href = "https://www.linkslist.app/WEoONoO";
        }, 2000);
    }
}

typeText();

