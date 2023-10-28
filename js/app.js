const navLinks = document.querySelector("#navLinks");
const mobileMenu = document.querySelector("#mobileMenu");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.remove("bottom-full");
  if (mobileMenu.classList.contains("open-menu")) {
    mobileMenu.classList.add("close-menu");
    mobileMenu.classList.remove("open-menu");

    navLinks.classList.remove("show");
    navLinks.classList.add("hide");
  } else {
    mobileMenu.classList.add("open-menu");
    mobileMenu.classList.remove("close-menu");

    navLinks.classList.add("show");
    navLinks.classList.remove("hide");
  }
});
