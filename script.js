const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const nav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".nav-menu a");
const reveals = document.querySelectorAll(".reveal");

if (menuToggle && navMenu && nav) {
  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("scroll", () => {
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
}

navLinks.forEach((link) => {
  if (link.getAttribute("data-page") === window.location.pathname.split("/").pop().replace(".html", "") || (window.location.pathname.endsWith("/") && link.getAttribute("data-page") === "index")) {
    link.classList.add("is-current");
  }

  link.addEventListener("click", () => {
    if (navMenu && menuToggle) {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  reveals.forEach((element) => revealObserver.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}
