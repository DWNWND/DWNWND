let prevScrollPos = window.scrollY;
const width = window.innerWidth;

const mainMenu = document.querySelector(".mainmenu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const checkbox = document.querySelector("#dropdown");
const contactNav = document.querySelector("#contactBtn");
const projectsNav = document.querySelector("#projectsBtn");

function hamburgerMenuOnScroll() {
  const currentScrollPos = window.scrollY;
  if (currentScrollPos > 350 && !checkbox.checked) {
    mainMenu.style.display = "none";
    hamburgerMenu.style.display = "block";
    mainMenu.classList.add("pb-4", "pt-4");
  }
  if (currentScrollPos > 350 && checkbox.checked) {
    mainMenu.style.display = "flex";
    hamburgerMenu.style.display = "block";
    mainMenu.classList.add("pb-4", "pt-4");
  }
  if (currentScrollPos < 350) {
    mainMenu.style.display = "flex";
    hamburgerMenu.style.display = "none";
    checkbox.checked = false;
    mainMenu.classList.remove("pb-4", "pt-4");
  }
  prevScrollPos = currentScrollPos;
}

function scrollListener() {
  window.addEventListener("scroll", function () {
    hamburgerMenuOnScroll();
  });
}

if (width <= 576) {
  hamburgerMenuOnScroll();
  scrollListener();
}
if (width >= 576) {
  console.log("ok")
  contactNav.classList.add("main-nav-links");
  projectsNav.classList.add("main-nav-links");
}


window.addEventListener("resize", () => {
  const widthOp = window.innerWidth;
  if (widthOp <= 576) {
    hamburgerMenuOnScroll();
    scrollListener();
  }
  if (widthOp >= 576) {
    contactNav.classList.add(".main-nav-links");
    projectsNav.classList.add(".main-nav-links");
  }
});

checkbox.addEventListener("change", function () {
  if (this.checked) {
    mainMenu.style.display = "flex";
  } else {
    mainMenu.style.display = "none";
  }
});
