// slider
let slideIndex = 0;

function slider() {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("imgslides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  setTimeout(slider, 7000);
}
slider();

// For precentage

window.addEventListener("scroll", activeOnScroll);

function activeOnScroll() {
  const htmlSpan = document.querySelector(".htmlspan");
  const cssSpan = document.querySelector(".cssspan");
  const jsSpan = document.querySelector(".jsspan");
  const bootstrapSpan = document.querySelector(".bsspan");
  const sqlSpan = document.querySelector(".sqlspan");

  if (document.documentElement.scrollTop > 200) {
    htmlSpan.classList.add("precent90");
    cssSpan.classList.add("precent75");
    jsSpan.classList.add("parent80");
    bootstrapSpan.classList.add("parent90");
    sqlSpan.classList.add("precent60");
  } else {
    htmlSpan.classList.remove("precent90");
    cssSpan.classList.remove("precent75");
    jsSpan.classList.remove("parent80");
    sqlSpan.classList.remove("precent60");
    bootstrapSpan.classList.remove("parent90");
  }
}
activeOnScroll();

// for clicking slider

const buttons = document.querySelectorAll(".button");
const sliders = document.querySelectorAll(".slider");

let currentSlide = 0;
sliders[currentSlide].classList.add("active-slider");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    sliders[currentSlide].classList.remove("active-slider");
    currentSlide = index;
    sliders[currentSlide].classList.add("active-slider");
  });
});
