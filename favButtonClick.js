"use strict";

const favButtons = document.getElementsByClassName("buttonFav");
const navFavorite = document.getElementById("favorites");
let counter = 0;

for (let i = 0; i < favButtons.length; i++) {
  favButtons[i].onclick = function () {
    navFavorite.setAttribute("value", ++counter);
  };
}
