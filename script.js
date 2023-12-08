const cards = document.querySelectorAll(".card");

cards[0].addEventListener("mouseenter", () => {
  cards[0].classList.add("hover-state");
  cards[0].innerHTML = `
    <h2>RAINYDAYS</h2>
    <p>Cross-course project made throughout the first year of my Frontend Dev. studies</p>
    <div class="project-links-wrapper">
      <a href="https://github.com/DWNWND/cross-course-CA">link to github</a>
      <a href="https://cms-ca-noroff.netlify.app">link to netlify</a>
    </div>`;
});
cards[0].addEventListener("mouseleave", () => {
  cards[0].classList.remove("hover-state");
  cards[0].classList.add("not-hover-state");
  cards[0].innerHTML = `
    <div class="project-img-wrapper flex"><img src="/img/rainydays-logo.png" alt="Rainydays logo" /></div>
    <p class="project-tag"><b>ecommerce</b></p>`;
});
cards[1].addEventListener("mouseenter", () => {
  cards[1].classList.add("hover-state");
  cards[1].innerHTML = `
    <h2>Community Science Museum</h2>
    <p>Semester project for the first semester of my Frontend Dev. studies.</p>
    <div class="project-links-wrapper">
      <a href="https://github.com/DWNWND/SemesterProject1_Thea-Oland">link to github</a>
      <a href="https://dainty-pony-7fe7b6.netlify.app">link to netlify</a>
    </div>`;
});
cards[1].addEventListener("mouseleave", () => {
  cards[1].classList.remove("hover-state");
  cards[1].classList.add("not-hover-state");
  cards[1].innerHTML = `
    <div class="project-img-wrapper flex"><img src="/img/cms-logo.png" alt="CMS logo" /></div>
    <p class="project-tag"><b>buisness landingpage</b></p>`;
});
cards[2].addEventListener("mouseenter", () => {
  cards[2].classList.add("hover-state");
  cards[2].innerHTML = `
    <h2>Microtic</h2>
    <p>Project exam for first year of my Frontend Dev. studies.</p>
    <div class="project-links-wrapper">
      <a href="https://github.com/DWNWND/project-exam-1-DWNWND">link to github</a>
      <a href="https://spiffy-halva-4ffb7c.netlify.app">link to netlify</a>
    </div>`;
});
cards[2].addEventListener("mouseleave", () => {
  cards[2].classList.remove("hover-state");
  cards[2].classList.add("not-hover-state");
  cards[2].innerHTML = `
  <div class="project-img-wrapper flex"><img src="/img/microtic-logo.png" alt="Microtic logo" /></div>
  <p class="project-tag"><b>commercial blog</b></p>`;
});
