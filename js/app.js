const navLinks = document.querySelector("#navLinks");
const mobileMenu = document.querySelector("#mobileMenu");

mobileMenu.addEventListener("click", () => {
  if (mobileMenu.classList.contains("open-menu")) {
    mobileMenu.classList.add("close-menu");
    mobileMenu.classList.remove("open-menu");
    navLinks.classList.add("hidden");
    navLinks.classList.remove("flex");
  } else {
    mobileMenu.classList.add("open-menu");
    mobileMenu.classList.remove("close-menu");
    navLinks.classList.remove("hidden");
    navLinks.classList.add("flex");
  }
});
