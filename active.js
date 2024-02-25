const navLinks = document.querySelectorAll(".main-nav-links");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.target.classList.toggle("active");
  });
});

window.addEventListener("click", (event) => {
  for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].classList.contains("collapsed")) {
      navLinks[i].classList.remove("active");
    }
  }
});
