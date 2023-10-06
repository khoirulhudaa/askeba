const slider = document.querySelector('.slider');
let currentIndex = 0;
const numSlides = 4; // Jumlah gambar

function nextSlide() {
    currentIndex++;
    if (currentIndex >= numSlides) {
        currentIndex = 0;
    }
    moveSlider();
}

function moveSlider() {
    const slideWidth = slider.clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// setInterval(nextSlide, 5000); // Mengganti slide otomatis setiap 3 detik

moveSlider(); // Memastikan slider dimulai dari gambar pertama
