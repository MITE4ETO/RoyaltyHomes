"use strict";

const favButtons = document.getElementsByClassName("buttonFav");
const navFavorite = document.getElementById("favorites");
let favorites = [];

for (let i = 0; i < favButtons.length; i++) {
  favButtons[i].onclick = function () {
    const exists = favorites.indexOf(i);

    if (exists === -1) {
      favorites.push(i);
      favButtons[i].textContent = 'Remove from favourites';
    } else {
      favorites.splice(exists, 1);
      favButtons[i].textContent = 'Add to favourites';
    }

    navFavorite.setAttribute("value", favorites.length);
  };
}
