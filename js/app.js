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

// filter JS

const allItem = document.querySelector(".all");

allItem.addEventListener("click", function handleClick(event) {
  document.querySelector("#moreimg").innerHTML = "";
  object.address.forEach((score) => {
    score.title.forEach((title, index) => {
      const img = score.img[index];
      const span = score.span[index];
      const item = `
        <div class="moreimg_img">
          <img src="${img}" alt="image" />
          <div class="moreimg_info">
            <div class="moreimg_center">
              <img src="images/heart.svg" alt="hearticon" />
              <span>${span}</span>
              <h1>${title}</h1>
            </div>
          </div>
        </div>`;
      document.querySelector("#moreimg").innerHTML += item;
    });
  });
});

const object = {
  address: [
    {
      title: ["3D Mockup Design", "2D Mockup Design"],
      span: ["6 MONTS AGO", "2 MONTS AGO"],
      img: ["images/abstractart.jpg ", "images/wingfulheart.jpg"],
    },
    {
      title: ["3D Mockup Design", "2D Mockup Design"],
      span: ["9 MONTS AGO", "1 MONTS AGO"],
      img: ["images/greenpixel.jpg", "images/webproject.png"],
    },
    {
      title: ["3D Mockup Design"],
      span: ["7 MONTS AGO"],
      img: ["images/rainbowsunglasses.png"],
    },
    {
      title: ["3D Mockup Design"],
      span: ["3 MONTS AGO"],
      img: ["images/mobileproject.png"],
    },
  ],
};

function handleButtonClick(event) {
  const dataAttribute = event.target.getAttribute("data");

  if (typeof object.address[dataAttribute] !== "undefined") {
    const items = object.address[dataAttribute].title.map((title, index) => {
      const img = object.address[dataAttribute].img[index];
      const span = object.address[dataAttribute].span[index];
      return `
        <div class="moreimg_img">
          <img src="${img}" alt="image" />
          <div class="moreimg_info">
            <div class="moreimg_center">
              <img src="images/heart.svg" alt="hearticon" />
              <span>${span}</span>
              <h1>${title}</h1>
            </div>
          </div>
        </div>`;
    });
    document.querySelector("#moreimg").innerHTML = items.join("");
  }
}

const categoryButtons = document.querySelectorAll(".btn_click");
categoryButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

const allButton = document.querySelector(".all");
allButton.addEventListener("click", () => {
  const items = object.address.flatMap((score) => {
    return score.title.map((title, index) => {
      const img = score.img[index];
      const span = score.span[index];
      return `
        <div class="moreimg_img">
          <img src="${img}" alt="image" />
          <div class="moreimg_info">
            <div class="moreimg_center">
              <img src="images/heart.svg" alt="hearticon" />
              <span>${span}</span>
              <h1>${title}</h1>
            </div>
          </div>
        </div>`;
    });
  });
  document.querySelector("#moreimg").innerHTML = items.join("");
});

//

const form = document.getElementById("user-forms");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://borjomi.loremipsum.ge/api/send-message", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

const forms = document.querySelector("#user-forms");

forms.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const urlInput = document.querySelector("#url");
  const message = document.querySelector("#message").value.trim();

  const emailRegex = /\S+@\S+.\S+/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  if (!urlInput.checkValidity()) {
    alert("Please enter a valid URL.");
    return;
  }

  if (message === "") {
    alert("Please enter a message.");
    return;
  }

  const modal = window.open("modal.html", "modal", "width=100%");
  modal.document.write(
    "<h1>Thank you for getting in touch! We appreciate you contacting us.</h1>"
  );
  modal.document.close();
});
