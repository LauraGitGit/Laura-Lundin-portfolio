const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = hamburgerBtn.classList.toggle("is-open");
  mobileMenu.classList.toggle("is-open");
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("is-open");
    mobileMenu.classList.remove("is-open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  });
});
