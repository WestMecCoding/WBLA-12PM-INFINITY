const buttons = document.querySelectorAll("[data-carousel]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    changeSlide(offset);
  });
});

function changeSlide(offset) {
  const carousel = document.querySelector("[data-carousel");
  const slides = carousel.querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

setInterval(() => {
  changeSlide(1);
}, 2000);

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const vhInPixels = window.innerHeight * 0.2;
    let Position = element.offsetTop - vhInPixels;

    window.scrollTo({
      left: 0,
      top: Position,
    });
  });
});
