// Importing CDN from TypeJS: https://github.com/mattboldt/typed.js
// Sources: Class lessons, youtube, websites for documentations, mentoring by older students (who have done Epicode bootcamp courses before), help from the tutor

let typed = new Typed(".inner-text", {
  strings: ["Game Developer", "Web Developer", "AI Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Menu Hamburger
const hamburger = document.querySelector(".hamburger");
const navRight = document.querySelector(".menu-item");
const closeIcon = document.querySelector("#close-icon");

// Opening
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("activated");
  navRight.classList.toggle("activated");
  closeIcon.classList.toggle("activated");
});

// Closing
closeIcon.addEventListener("click", () => {
  hamburger.classList.toggle("activated");
  navRight.classList.toggle("activated");
  closeIcon.classList.toggle("activated");
});

// Carousel

const carouselButtons = document.querySelectorAll("[data-carousel-button]");

carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const slideContainer = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const currentSlide = slideContainer.querySelector("[data-active]");
    const slidesArray = Array.from(slideContainer.children);
    const currentIndex = slidesArray.indexOf(currentSlide);
    const moveSlide = (button.dataset.carouselButton = "next" ? 1 : -1);

    const newIndex = currentIndex + moveSlide;
    let newPosition;

    //Define the position of the current slide
    if (newIndex < 0) {
      newPosition = slidesArray.length - 1;
    } else if (newIndex >= slidesArray.length) {
      newPosition = 0;
    } else {
      newPosition = newIndex;
    }

    //Which is the current active slide that need to be shown?
    slidesArray[newPosition].setAttribute("data-active", "true");
    currentSlide.removeAttribute("data-active");
  });
});

//contact form

document.getElementById("submit-button").addEventListener("click", () => {
  console.log("ciao");
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!name) {
    document.getElementById("name-error").textContent = "Enter your name";
    document
      .getElementById("name")
      .setCustomValidity("I believe you can do better!");
  }
  if (!email || !emailPattern.test(email)) {
    document.getElementById("email-error").textContent = "Enter a valid Email";
    document
      .getElementById("email")
      .setCustomValidity("Here we go! Try to change your email");
  }
  if (!phone) {
    document.getElementById("phone-error").textContent =
      "Where can I call you?";
    document
      .getElementById("phone")
      .setCustomValidity("Ye... oh no! Invalid Phone. Enter it again");
  }
  if ((message.length = 0)) {
    document.getElementById("message-error").textContent =
      "Let me know how I can help you!";
    document
      .getElementById("message")
      .setCustomValidity("You can't let this space being blank again!");
  }
});

// Progress bar where e=element

document.querySelectorAll(".progress-bar").forEach((e) => {
  valuePercentage = e.querySelector("span").innerHTML;
  value = parseInt(valuePercentage);
  if (value <= 25) {
    e.style.background = "red";
  }
  if (value > 25 && value < 50) {
    e.style.background = "orange";
  }
  if (value >= 50) {
    e.style.background = "green";
  }
  e.style.width = valuePercentage;
});
