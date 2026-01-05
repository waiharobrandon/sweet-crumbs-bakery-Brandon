let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

// Greeting & Date
const greeting = document.getElementById("greeting");
const dateEl = document.getElementById("date");

if (greeting && dateEl) {
    const hour = new Date().getHours();
    let message = "Welcome — we're open 24/7 🎉";

    if (hour < 12) message = "Good Morning ☀️";
    else if (hour < 18) message = "Good Afternoon 🌤️";

    greeting.innerText = message;
    dateEl.innerText = new Date().toDateString();
}

// Hero slider
(function initHeroSlider() {
    const slider = document.getElementById('hero-slider');
    if (!slider) return;
    const slides = slider.querySelectorAll('.slides img');
    let current = 0;
    slides.forEach((s,i)=> s.classList.toggle('active', i===0));
    function showSlide(index) {
        slides.forEach((s,i)=> s.classList.toggle('active', i===index));
    }
    let timer = setInterval(()=> { current = (current+1)%slides.length; showSlide(current); }, 4000);
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    const resetTimer = () => { clearInterval(timer); timer = setInterval(()=> { current = (current+1)%slides.length; showSlide(current); }, 4000); };
    prev && prev.addEventListener('click', ()=>{ current = (current-1+slides.length)%slides.length; showSlide(current); resetTimer(); });
    next && next.addEventListener('click', ()=>{ current = (current+1)%slides.length; showSlide(current); resetTimer(); });
    slider.addEventListener('mouseenter', ()=> clearInterval(timer));
    slider.addEventListener('mouseleave', resetTimer);
})();

// Theme Toggle
const toggle = document.getElementById("theme-toggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Form Validation
function validateForm() {
    const email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email address");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
