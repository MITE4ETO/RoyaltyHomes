"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const homeButton = document.getElementById("home");

  homeButton.addEventListener("click", function () {
    location.reload();
  });
});
