const btnMenuEl = document.querySelector(".mobile-nav");
const btnClosesEl = document.querySelector(".mobile-nav-close");
const body = document.body;

btnMenuEl.addEventListener("click", (e) => {
  body.classList.toggle("open");
});

btnClosesEl.addEventListener("click", (e) => {
  body.classList.remove("open");
});

// Get nav links
const linksNavEl = document.querySelectorAll(".nav-list .btn-link");

linksNavEl.forEach((e) => {
  e.addEventListener("click", (link) => {
    body.classList.remove("open");
  });
});

// Make navbar sticky
const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-68px",
  }
);

obs.observe(sectionHeroEl);
