const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;
const typingSpan = document.getElementById("typing");

// Dark Mode Load Preference
if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("dark-mode", isDark);
});

// Typing Animation for tagline
const text = "Future Network & Cloud Engineer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingSpan.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);
