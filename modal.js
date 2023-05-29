"use strict";

const modalAbout = document.getElementById("modal-about");
const modalRealEstateAgents = document.getElementById("modal-realEstateAgents");
const modalCareers = document.getElementById("modal-careers");
const modalSuggestions = document.getElementById("modal-suggestions");
const modalCloseButtons = document.querySelectorAll(".modal-close");

document.getElementById("about").addEventListener("click", function () {
  modalAbout.style.display = "block";
});

document.getElementById("realEstateAgents").addEventListener("click", function () {
  modalRealEstateAgents.style.display = "block";
});

document.getElementById("careers").addEventListener("click", function () {
  modalCareers.style.display = "block";
});

document.getElementById("suggestions").addEventListener("click", function () {
  modalSuggestions.style.display = "block";
});

modalCloseButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    modalAbout.style.display = "none";
    modalRealEstateAgents.style.display = "none";
    modalCareers.style.display = "none";
    modalSuggestions.style.display = "none";
  });
});

window.addEventListener("click", function (event) {
  if (
    event.target === modalAbout ||
    event.target === modalRealEstateAgents ||
    event.target === modalCareers ||
    event.target === modalSuggestions
  ) {
    modalAbout.style.display = "none";
    modalRealEstateAgents.style.display = "none";
    modalCareers.style.display = "none";
    modalSuggestions.style.display = "none";
  }
});
