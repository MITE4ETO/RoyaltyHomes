let slideIndex1 = 0; // Initialize slide index to 0
let slideIndex2 = 0; // Initialize slide index to 0
let slideIndex3 = 0; // Initialize slide index to 0
let slideIndex4 = 0; // Initialize slide index to 0

showSlides(); // Call the showSlides function to display the initial slide

// Next/previous controls
function plusSlides(index, n) {
  const slidesLength = 3;

  if (index === 0) {
    slideIndex1 += n;
    if (slideIndex1 === 3) {
      slideIndex1 = 0;
    } else if (slideIndex1 === -1) {
      slideIndex1 = 2;
    }
  } else if (index === 1) {
    slideIndex2 += n;
    if (slideIndex2 === 3) {
      slideIndex2 = 0;
    } else if (slideIndex2 === -1) {
      slideIndex2 = 2;
    }
  } else if (index === 2) {
    slideIndex3 += n;
    if (slideIndex3 === 3) {
      slideIndex3 = 0;
    } else if (slideIndex3 === -1) {
      slideIndex3 = 2;
    }
  } else if (index === 3) {
    slideIndex4 += n;
    if (slideIndex4 === 3) {
      slideIndex4 = 0;
    } else if (slideIndex4 === -1) {
      slideIndex4 = 2;
    }
  }
  showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n; // Set the slide index to n
  showSlides();
}

function showSlides() {
  let i;
  let slides1 = document.getElementsByClassName('mySlides1');
  let slides2 = document.getElementsByClassName('mySlides2');
  let slides3 = document.getElementsByClassName('mySlides3');
  let slides4 = document.getElementsByClassName('mySlides4');

  let dots1 = document.getElementsByClassName('dots1');
  let dots2 = document.getElementsByClassName('dots2');
  let dots3 = document.getElementsByClassName('dots3');
  let dots4 = document.getElementsByClassName('dots4');

  // Reset slide index if it goes beyond the number of slides
  [
    { slides: slides1, dots: dots1, index: slideIndex1 },
    { slides: slides2, dots: dots2, index: slideIndex2 },
    { slides: slides3, dots: dots3, index: slideIndex3 },
    { slides: slides4, dots: dots4, index: slideIndex4 },
  ].forEach(({ slides, dots, index }) => {
    // Hide all slides and remove active class from dots
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    // Display the current slide and set active class on corresponding dot
    slides[index].style.display = 'block';
    dots[index].className += ' active';
  });
}
