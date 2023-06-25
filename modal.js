"use strict";

// const modalAbout = document.getElementById("modal-about");
// const modalRealEstateAgents = document.getElementById("modal-realEstateAgents");
// const modalCareers = document.getElementById("modal-careers");
// const modalSuggestions = document.getElementById("modal-suggestions");
// const modalCloseButtons = document.querySelectorAll(".modal-close");

// document.getElementById("about").addEventListener("click", function () {
//   modalAbout.style.display = "block";
// });

// document.getElementById("realEstateAgents").addEventListener("click", function () {
//   modalRealEstateAgents.style.display = "block";
// });

// document.getElementById("careers").addEventListener("click", function () {
//   modalCareers.style.display = "block";
// });

// document.getElementById("suggestions").addEventListener("click", function () {
//   modalSuggestions.style.display = "block";
// });

// modalCloseButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     modalAbout.style.display = "none";
//     modalRealEstateAgents.style.display = "none";
//     modalCareers.style.display = "none";
//     modalSuggestions.style.display = "none";
//   });
// });

let modalTemplate = document.getElementById("modal-template");
let modalTemplateBody = modalTemplate.getElementsByClassName("modal-body")[0];
let modalTemplateHeader =
  modalTemplateBody.getElementsByClassName("modal-header")[0];
let modalTemplateContent =
  modalTemplateBody.getElementsByClassName("modal-content")[0];
let modalTemplateFooter =
  modalTemplateBody.getElementsByClassName("modal-footer")[0];




document.getElementById("about").addEventListener("click", function () {
  showAboutModal();
});

document
  .getElementById("realEstateAgents")
  .addEventListener("click", function () {
    showRealEstateAgentsModal();
  });

document.getElementById("careers").addEventListener("click", function () {
  showCareersModal();
});

document.getElementById("suggestions").addEventListener("click", function () {
  showSuggestionModal();
});

window.addEventListener("click", function (event) {
  if (event.target === modalTemplate) {
    modalTemplate.style.display = "none";
  }
});

function showAboutModal() {
  modalTemplateHeader.innerHTML = '<p class="modal-header-about">About</p>';
  modalTemplateContent.innerHTML =
    '<p class="modal-content-text">Find your dream home hassle-free Welcome to RoyaltyHomes, the ultimate destination for luxury real estate seekers. Our platform offers a simplified and seamless experience, connecting you with a curated selection of exquisite properties. Explore the world of elegance and craftsmanship as you discover the finest homes meticulously handpicked by RoyaltyHomes. Experience the pinnacle of real estate excellence with us.</p>';
  modalTemplateFooter.innerHTML =
    '<img class="modal-footer-image" src="images/logo-no-background.png">';
  modalTemplate.style.display = "block";
}

function showRealEstateAgentsModal() {
  modalTemplateHeader.innerHTML =
    '<p class="modal-header-realEstateAgents">Real Estate Agents</p>';
  modalTemplateContent.innerHTML =
    '<p class="modal-content-text"> At RoaltyEstate, we take pride in providing exceptional service to our clients. With a team of dedicated and knowledgeable agents, you can count on us to navigate the complexities of the real estate market and find your dream property or sell your existing one with confidence. Trust RoaltyEstate for all your real estate needs.</p>';
  modalTemplateFooter.innerHTML =
    '<img class="modal-footer-image" src="images/logo-no-background.png">';
  modalTemplate.style.display = "block";
}

function showCareersModal() {
  modalTemplateHeader.innerHTML = '<p class="modal-header-careers">Careers</p>';
  modalTemplateContent.innerHTML =
    '<p class="modal-content-text"> At RoaltyEstate, we believe in fostering growth and nurturing talent. Our career section offers a platform for aspiring real estate professionals to thrive. Join our team of dedicated agents and unlock your potential in a dynamic and supportive environment. With RoaltyEstate, you can build a rewarding career that opens doors to endless opportunities in the real estate industry.</p>';
  modalTemplateFooter.innerHTML =
    '<img class="modal-footer-image" src="images/logo-no-background.png">';
  modalTemplate.style.display = "block";
}

function showSuggestionModal() {
  modalTemplateHeader.innerHTML =
    '<p class="modal-header-suggestions"> Suggestions</p>';
  modalTemplateContent.innerHTML =
    '<p class="modal-content-text">At RoaltyEstate, we value the feedback and suggestions from our clients. Our suggestion section is designed to provide a platform for our clients to share their thoughts and ideas. We believe that your input is essential in shaping our services and improving our customer experience. Together, we can create a real estate journey that exceeds your expectations. Trust RoaltyEstate to listen and act upon your suggestions for a personalized and exceptional experience.</p>';
  modalTemplateFooter.innerHTML =
    '<img class="modal-footer-image" src="images/logo-no-background.png">';
  modalTemplate.style.display = "block";
}





console.log();
