// =========================
// NAMA PENERIMA DARI URL
// =========================

const urlParams = new URLSearchParams(window.location.search);
const guest = urlParams.get("to");

if (guest) {
    document.getElementById("guestName").innerText =
        decodeURIComponent(guest);
}

// =========================
// BUKA UNDANGAN
// =========================

const openBtn = document.getElementById("openInvitation");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    content.style.display = "block";

    content.scrollIntoView({
        behavior: "smooth"
    });

    music.play().catch(() => {
        console.log("Autoplay diblokir browser");
    });

    openBtn.innerText = "Undangan Dibuka";
    openBtn.disabled = true;

});

// =========================
// MUSIC BUTTON
// =========================

const musicButton = document.getElementById("musicButton");

let isPlaying = false;

musicButton.addEventListener("click", () => {

    if (isPlaying) {

        music.pause();
        musicButton.innerHTML = "🔇";

    } else {

        music.play();
        musicButton.innerHTML = "🎵";

    }

    isPlaying = !isPlaying;

});

// =========================
// COUNTDOWN
// =========================

const targetDate = new Date(
    "June 26, 2026 07:30:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            /
            1000
        );

    document.getElementById("days").innerText =
        days < 0 ? 0 : days;

    document.getElementById("hours").innerText =
        hours < 0 ? 0 : hours;

    document.getElementById("minutes").innerText =
        minutes < 0 ? 0 : minutes;

    document.getElementById("seconds").innerText =
        seconds < 0 ? 0 : seconds;

}

setInterval(updateCountdown, 1000);

updateCountdown();

// =========================
// RSVP WHATSAPP
// =========================

const form = document.getElementById("rsvpForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const ortu =
        document.getElementById("ortu").value;

    const siswa =
        document.getElementById("siswa").value;

    const hadir =
        document.getElementById("kehadiran").value;

    const pesan =
        document.getElementById("pesan").value;

    const text =

`Assalamu'alaikum Wr. Wb.

Nama Orang Tua : ${ortu}

Nama Siswa : ${siswa}

Kehadiran : ${hadir}

Pesan & Doa :
${pesan}

Terima kasih.`;

    const nomor =
        "6288298690837";

    const url =
        `https://wa.me/${nomor}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

});

// =========================
// ANIMASI SCROLL
// =========================

const sections =
    document.querySelectorAll(".section");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform =
        "translateY(40px)";
    section.style.transition =
        "all 0.8s ease";

    observer.observe(section);

});

// =========================
// LIGHTBOX GALERI
// =========================

const images =
    document.querySelectorAll(".gallery img");

const lightbox =
    document.createElement("div");

lightbox.id = "lightbox";

lightbox.style.cssText = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.9);
display:none;
justify-content:center;
align-items:center;
z-index:9999;
padding:20px;
`;

document.body.appendChild(lightbox);

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        const image =
            document.createElement("img");

        image.src = img.src;

        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "15px";

        while (lightbox.firstChild) {
            lightbox.removeChild(
                lightbox.firstChild
            );
        }

        lightbox.appendChild(image);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// =========================
// CONSOLE CREDIT
// =========================

console.log(
    "Undangan Digital SDIT AlMarjan - Kelas 4B"
);

console.log(
    "Created for GitHub Pages"
);