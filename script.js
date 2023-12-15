const cards = document.querySelectorAll(".card");
const cardInfo = document.querySelectorAll(".card-info");
const screenshot = document.querySelectorAll(".screenshot");

// cards[0].addEventListener("click", () => {
//   cards[0].classList.add("hover-state");
//   console.log("ok");
//   cards[0].innerHTML = `
//     <div class="project-info">
//       <h2>RAINYDAYS</h2>
//       <p>This site was made as a cross-course project that we worked on throughout the first year of my studies. It's an ecommerce site selling rainjackets. Read more about the project in my Github Repository.</p>
//       <div class="project-links-wrapper flex">
//         <a href="https://github.com/DWNWND/cross-course-CA" class="icon-wrapper flex"><i class="fa-brands fa-github"></i></a>
//         <a href="https://cms-ca-noroff.netlify.app" class="icon-wrapper flex"><i class="fa-solid fa-link"></i></a>
//       </div>
//     </div>`;
// });
// cards[0].addEventListener("click", () => {
//   console.log(cards[0].classList);
//   cards[0].classList.add("hover-state");
//   cards[0].innerHTML = `
//     <div class="project-info">
//       <h2>RAINYDAYS</h2>
//       <p>This site was made as a cross-course project that we worked on throughout the first year of my studies. It's an ecommerce site selling rainjackets. Read more about the project in my Github Repository.</p>
//       <div class="project-links-wrapper flex">
//         <a href="https://github.com/DWNWND/cross-course-CA" class="icon-wrapper flex"><i class="fa-brands fa-github"></i></a>
//         <a href="https://cms-ca-noroff.netlify.app" class="icon-wrapper flex"><i class="fa-solid fa-link"></i></a>
//       </div>
//     </div>`;
// });
// cards[1].addEventListener("click", () => {
//   cards[1].classList.add("hover-state");
//   cards[1].innerHTML = `
//     <div class="project-info">
//       <h2>Community Science Museum</h2>
//       <p>This is what i delivered as my semester project for the first semester of my studies. It's a informative site for a Sience Museum. Read more about the project in my Github Repository.</p>
//       <div class="project-links-wrapper flex">
//         <a href="https://github.com/DWNWND/SemesterProject1_Thea-Oland" class="icon-wrapper flex"><i class="fa-brands fa-github"></i></a>
//         <a href="https://dainty-pony-7fe7b6.netlify.app" class="icon-wrapper flex"><i class="fa-solid fa-link"></i></a>
//       </div>
//     </div>`;
// });
// cards[2].addEventListener("click", () => {
//   cards[2].classList.add("hover-state");
//   cards[2].innerHTML = `
//     <div class="project-info">
//       <h2>Microtic</h2>
//       <p>This is what i delivered for my project exam for first year of my studies. It's a blog site about unconventional living. Read more about the project in my Github Repository.</p>
//       <div class="project-links-wrapper flex">
//         <a href="https://github.com/DWNWND/project-exam-1-DWNWND" class="icon-wrapper flex"><i class="fa-brands fa-github"></i></a>
//         <a href="https://spiffy-halva-4ffb7c.netlify.app" class="icon-wrapper flex"><i class="fa-solid fa-link"></i></a>
//       </div>
//     </div>`;
// });

cards[0].addEventListener("click", () => {
  cards[0].classList.toggle("hover-state");
  cards[0].classList.toggle("not-hover-state");
});

cards[1].addEventListener("click", () => {
  cards[1].classList.toggle("hover-state");
  cards[1].classList.toggle("not-hover-state");
});
cards[2].addEventListener("click", () => {
  cards[2].classList.toggle("hover-state");
  cards[2].classList.toggle("not-hover-state");
});

// cards[0].addEventListener("mouseenter", () => {
//   cards[0].classList.add("hover-state");
//   cards[0].innerHTML = `
//       <div class="project-info mobile-display">
//         <h2>RAINYDAYS</h2>
//         <p>This site was made as a cross-course project that we worked on throughout the first year of my studies. It's an ecommerce site selling rainjackets. Read more about the project in my Github Repository.</p>
//         <div class="project-links-wrapper flex">
//           <a href="https://github.com/DWNWND/cross-course-CA" class="icon-wrapper flex"><i class="fa-brands fa-github"></i></a>
//           <a href="https://cms-ca-noroff.netlify.app" class="icon-wrapper flex"><i class="fa-solid fa-link"></i></a>
//         </div>
//       </div>`;
// });

// cards[0].addEventListener("mouseleave", () => {
//   cards[0].classList.remove("hover-state");
//   cards[0].classList.add("not-hover-state");
//   cards[0].innerHTML = `
//       <div class="project-img-wrapper flex"><img src="/img/rainydays-logo.png" alt="Rainydays logo" /></div>
//       <p class="project-tag"><b>ecommerce</b></p>`;
// });

// cards[1].addEventListener("mouseenter", () => {
//   cards[1].classList.add("hover-state");
//   cards[1].innerHTML = `
//     <div class="project-info">
//       <h2>Community Science Museum</h2>
//       <p>This is what i delivered as my semester project for the first semester of my studies. It's a informative site for a Sience Museum. Read more about the project in my Github Repository.</p>
//       <div class="project-links-wrapper flex">
//         <a href="https://github.com/DWNWND/SemesterProject1_Thea-Oland" class="icon-wrapper flex"><i class="fa-brands fa-github"></i></a>
//         <a href="https://dainty-pony-7fe7b6.netlify.app" class="icon-wrapper flex"><i class="fa-solid fa-link"></i></a>
//       </div>
//     </div>`;
// });
// cards[1].addEventListener("mouseleave", () => {
//   cards[1].classList.remove("hover-state");
//   cards[1].classList.add("not-hover-state");
//   cards[1].innerHTML = `
//       <div class="project-img-wrapper flex"><img src="/img/cms-logo.png" alt="CMS logo" /></div>
//       <p class="project-tag"><b>buisness landingpage</b></p>`;
// });
// cards[2].addEventListener("mouseenter", () => {
//   cards[2].classList.add("hover-state");
//   cards[2].innerHTML = `
//     <div class="project-info">
//       <h2>Microtic</h2>
//       <p>This is what i delivered for my project exam for first year of my studies. It's a blog site about unconventional living. Read more about the project in my Github Repository.</p>
//       <div class="project-links-wrapper flex">
//         <a href="https://github.com/DWNWND/project-exam-1-DWNWND" class="icon-wrapper flex"><i class="fa-brands fa-github"></i></a>
//         <a href="https://spiffy-halva-4ffb7c.netlify.app" class="icon-wrapper flex"><i class="fa-solid fa-link"></i></a>
//       </div>
//     </div>`;
// });
// cards[2].addEventListener("mouseleave", () => {
//   cards[2].classList.remove("hover-state");
//   cards[2].classList.add("not-hover-state");
//   cards[2].innerHTML = `
//     <div class="project-img-wrapper flex"><img src="/img/microtic-logo.png" alt="Microtic logo" /></div>
//     <p class="project-tag"><b>commercial blog</b></p>`;
// });
