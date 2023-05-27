"use strict";

const modal = document.getElementById("modal");
const modalCloseButton = document.getElementById("modal-close");

document.getElementById("about").addEventListener("click", function () {
  modal.style.display = "block";
});



window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


