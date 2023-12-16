const cards = document.querySelectorAll(".project-card");
const rainydaysCard = cards[0];
const cmsCard = cards[1];
const microticCard = cards[2];
let isMobile = false;

function toggleHoverClasses(target) {
  target.classList.toggle("card-open");
  target.classList.toggle("card-closed");
}

function cardOpen(target) {
  target.classList.add("card-open");
  target.classList.remove("card-closed");
}
function cardClosed(target) {
  target.classList.remove("card-open");
  target.classList.add("card-closed");
}

// https://stackoverflow.com/questions/13966914/can-mouseenter-and-click-event-exist-together
// this logic will no longer cause a conflict between desktop and mobile

//RAINYDAYS
rainydaysCard.addEventListener(
  "touchstart",
  () => {
    isMobile = true;
    toggleHoverClasses(rainydaysCard);
  },
  false
);
rainydaysCard.onmouseenter = (e) => {
  e.stopPropagation();
  if (!isMobile) {
    cardOpen(rainydaysCard);
    rainydaysCard.innerHTML = `
          <div class="project-info">
            <h2>RAINYDAYS</h2>
            <p>This site was made as a cross-course project that we worked on throughout the first year of my studies. It's an ecommerce site selling rainjackets. Read more about the project in my Github Repository.</p>
            <div class="project-icons-wrapper flex">
              <a href="https://github.com/DWNWND/cross-course-CA" class="icon-wrapper flex"><i class="fa-brands fa-github"></i></a>
              <a href="https://cms-ca-noroff.netlify.app" class="icon-wrapper flex"><i class="fa-solid fa-link"></i></a>
            </div>
          </div>`;
  }
};
rainydaysCard.onmouseleave = (e) => {
  e.stopPropagation();
  if (!isMobile) {
    cardClosed(rainydaysCard);
    rainydaysCard.innerHTML = `
      <div class="project-logo-wrapper flex"><img src="/img/rainydays-logo.png" alt="Rainydays logo" /></div>
      <p class="project-tag"><b>ecommerce</b></p>`;
  }
};

//CMS
cmsCard.addEventListener(
  "touchstart",
  () => {
    isMobile = true;
    toggleHoverClasses(cmsCard);
  },
  false
);
cmsCard.onmouseenter = (e) => {
  e.stopPropagation();
  if (!isMobile) {
    cardOpen(cmsCard);
    cmsCard.innerHTML = `
      <div class="project-info">
      <h2>Community Science Museum</h2>
      <p>This is what i delivered as my semester project for the first semester of my studies. It's a informative site for a Sience Museum. Read more about the project in my Github Repository.</p>
      <div class="project-icons-wrapper flex">
        <a href="https://github.com/DWNWND/SemesterProject1_Thea-Oland" class="icon-wrapper flex"><i class="fa-brands fa-github"></i></a>
        <a href="https://dainty-pony-7fe7b6.netlify.app" class="icon-wrapper flex"><i class="fa-solid fa-link"></i></a>
      </div>
    </div>`;
  }
};
cmsCard.onmouseleave = (e) => {
  e.stopPropagation();
  if (!isMobile) {
    cardClosed(cmsCard);
    cmsCard.innerHTML = `
      <div class="project-logo-wrapper flex"><img src="/img/cms-logo.png" alt="CMS logo" /></div>
      <p class="project-tag"><b>buisness landingpage</b></p>`;
  }
};

//MICROTIC
microticCard.addEventListener(
  "touchstart",
  () => {
    isMobile = true;
    toggleHoverClasses(microticCard);
  },
  false
);
microticCard.onmouseenter = (e) => {
  e.stopPropagation();
  if (!isMobile) {
    cardOpen(microticCard);
    microticCard.innerHTML = `
     <div class="project-info">
       <h2>Microtic</h2>
       <p>This is what i delivered for my project exam for first year of my studies. It's a blog site about unconventional living. Read more about the project in my Github Repository.</p>
       <div class="project-icons-wrapper flex">
         <a href="https://github.com/DWNWND/project-exam-1-DWNWND" class="icon-wrapper flex"><i class="fa-brands fa-github"></i></a>
         <a href="https://spiffy-halva-4ffb7c.netlify.app" class="icon-wrapper flex"><i class="fa-solid fa-link"></i></a>
        </div>
     </div>`;
  }
};
microticCard.onmouseleave = (e) => {
  e.stopPropagation();
  if (!isMobile) {
    cardClosed(microticCard);
    microticCard.innerHTML = `
     <div class="project-logo-wrapper flex"><img src="/img/microtic-logo.png" alt="Microtic logo" /></div>
     <p class="project-tag"><b>commercial blog</b></p>`;
  }
};
