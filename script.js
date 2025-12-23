
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const nav = document.querySelector("nav");

// Toggle menu
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("active");
});

// Close menu when clicking outside nav
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// Close menu when clicking a link
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Close menu on scroll
window.addEventListener("scroll", () => {
  navMenu.classList.remove("active");
});

