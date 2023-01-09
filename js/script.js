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

linksNavEl.forEach(e => {
  e.addEventListener('click', link => {
    body.classList.remove('open')
  })
})
