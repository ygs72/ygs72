// Array teks yang akan ditampilkan secara bertahap
const texts = [
    "Hai🙈.",
    "Aku tuh suka kamu🙈.",
    "Kamu tau gak, sulit untukku mengucapkan hal ini😔.",
    "Karena,Aku tau tipemu bukan Aku tetapi😔",
    "Agar aku lega tolong Beri aku penjelasan😊",
    "jangan asing ya setelah ini,Karena You are my favorite, my encouragement and😊",
    " you are the reason I want to achieve my goals😇",
    "see you again another time, forgive me if I hope too much,😊",
    "but I don't regret it, maybe my luck is not good😊."
];
let textIndex = 0; // Index teks saat ini
let charIndex = 0; // Index karakter dalam teks saat ini
const typingSpeed = 50; // Kecepatan mengetik dalam milidetik
const deleteSpeed = 30; // Kecepatan menghapus dalam milidetik
const pauseBetweenLines = 1000; // Jeda antar baris dalam milidetik

// Fungsi untuk menambahkan teks satu per satu
function typeWriter() {
    if (textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
            // Tambahkan karakter ke dalam elemen dengan efek pengetikan
            document.getElementById("content").textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Jeda sebelum menghapus teks
            setTimeout(deleteText, pauseBetweenLines);
        }
    }
}

// Fungsi untuk menghapus teks satu per satu
function deleteText() {
    if (charIndex >= 0) {
        let currentText = texts[textIndex];
        document.getElementById("content").textContent = currentText.substring(0, charIndex);
        charIndex--;
        setTimeout(deleteText, deleteSpeed);
    } else {
        // Pindah ke teks berikutnya
        textIndex++;
        if (textIndex < texts.length) {
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Setelah selesai, tampilkan pesan sambutan dan konfirmasi
            showConfirmation();
        }
    }
}

// Function untuk menampilkan pesan sambutan dan memulai efek pengetikan
function askUserName() {
    const userName = prompt("Siapa nama kamu?");

    if (userName) {
        alert(`Halo, ${userName}, Selamat datang di sini! Aku ingin mengucapkan sesuatu.`);
        // Mulai efek pengetikan setelah memberikan nama
        setTimeout(typeWriter, typingSpeed);
    } else {
        alert("Aku ingin mengucapkan sesuatu. Jika penasaran lanjut IG aja hehe");
        // Mulai efek pengetikan tanpa nama
        setTimeout(typeWriter, typingSpeed);
    }
}

// Function untuk menampilkan konfirmasi setelah semua teks selesai ditampilkan dan dihapus
function showConfirmation() {
    const confirmed = confirm("Jika Kamu mau serius lanjut instagram,Jika tidak serius chat whatsapp aja😊😊😊😊");

    if (confirmed) {
        window.location.href = "https://www.instagram.com/";
    } else {
        alert("Kenapa pilih batal,Jelasin aja aku gak Nyesal kok yang penting aku sudah ungakapin apa isi hatiku😊.");
    }
}

// Mulai proses ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded');

    // Mulai pemutaran audio saat pengguna mengklik di mana saja di halaman
    document.body.addEventListener('click', function() {
        audio.play().catch(error => console.error('Error playing audio:', error));
    });

    askUserName();
});

// JavaScript untuk mengontrol audio
const audio = document.getElementById('background-music');

// Memainkan atau menghentikan audio saat diklik
audio.addEventListener('click', function () {
    if (audio.paused) {
        audio.play().catch(error => console.error('Error playing audio:', error));
    } else {
        audio.pause();
    }
});

// Debugging untuk kesalahan audio
audio.addEventListener('error', function(event) {
    console.error('Error loading audio:', event);
});
