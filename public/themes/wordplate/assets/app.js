const hamburger = document.querySelector(".hamburger-menu");
const mobileNavigation = document.querySelector(".mobile-nav");
const pagesContainerMobile = document.querySelectorAll(
  ".pages-container-mobile"
);
let menuOpen = false;
hamburger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileNavigation.classList.add("opened");
    hamburger.classList.add("opened");
  } else {
    mobileNavigation.classList.remove("opened");
    hamburger.classList.remove("opened");
  }
});

pagesContainerMobile.forEach((page) =>
  page.addEventListener("click", () => {
    page.classList.toggle("open");
  })
);
