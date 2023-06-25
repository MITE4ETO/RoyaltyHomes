let slideIndex = 0; // Initialize slide index to 0

showSlides(); // Call the showSlides function to display the initial slide

// Next/previous controls
function plusSlides(n) {
  slideIndex += n; // Increment the slide index by n
  showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n; // Set the slide index to n
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Reset slide index if it goes beyond the number of slides
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides and remove active class from dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and set active class on corresponding dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}