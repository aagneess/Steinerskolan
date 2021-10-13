const hamburger = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const wave = document.querySelector(".header-wave");
const mobileNavigation = document.querySelector(".mobile-nav");
const pagesContainerMobile = document.querySelectorAll(
  ".pages-container-mobile"
);
let menuOpen = false;

const toggleMenu = () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileNavigation.classList.add("opened");
    hamburger.classList.add("opened");
    closeMenu.classList.add("opened");
    wave.classList.add("opened");
  } else {
    mobileNavigation.classList.remove("opened");
    hamburger.classList.remove("opened");
    closeMenu.classList.remove("opened");
    wave.classList.remove("opened");
  }
};

hamburger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});

pagesContainerMobile.forEach((page) =>
  page.addEventListener("click", () => {
    page.classList.toggle("open");
  })
);
