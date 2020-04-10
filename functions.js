const transitionTime = 3000; // in miliseconds

const slides = document.querySelectorAll("#slides .slide");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let currentSlide = 0; // start on slide number 0
slides[currentSlide].className = "slide showing";

const nextSlide = () => {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
};

let slideInterval = undefined;
let playing = false;

const startSlideshow = () => {
  playing = true;
  slideInterval = setInterval(nextSlide, transitionTime);

  startButton.disabled = true;
  stopButton.disabled = false;
};

const stopSlideshow = () => {
  playing = false;
  clearInterval(slideInterval);

  startButton.disabled = false;
  stopButton.disabled = true;
};
