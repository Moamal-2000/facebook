"use strict";

// Selectors
const options = document.querySelectorAll("header .options i");
const searchContainer = document.querySelector("header .search");
const searchInputContainer = document.querySelector("header .search .input");
const searchInput = document.querySelector("header .search .input input");
const searchIcon = document.querySelector("header .search .input i");
const facebookLogo = document.querySelector(
  "header .search .facebook-logo img"
);
const backIcon = document.querySelector("header .search .facebook-logo i");

// Variables
let isSearchInpFocused = false;

// Functions

// Events
options.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.classList.contains("active")) {
      option.classList.remove("active");
      return false;
    }

    for (let i = 0; i < options.length; i++)
      options[i].classList.remove("active");
    option.classList.add("active");
  });

  option.addEventListener("mousedown", () => {
    option.style.transform = "scale(0.95)";
  });

  option.addEventListener("mouseup", () => {
    option.style.transform = "scale(1)";
  });
});

searchInputContainer.addEventListener("click", () => {
  searchInput.focus();
  isSearchInpFocused = true;
  searchContainer.classList.add("active");
  facebookLogo.parentElement.removeAttribute("href");
});

document.addEventListener("click", () => {
  if (searchInput !== document.activeElement && searchInput.value.length === 0)
    searchContainer.classList.remove("active");
});

backIcon.addEventListener("click", () => {
  let facebookUrl = facebookLogo.parentElement.href;
  if (searchInput !== document.activeElement) {
    searchInput.value = "";
    searchContainer.classList.remove("active");
    facebookLogo.parentElement.removeAttribute("href");

    setTimeout(() => {
      facebookLogo.parentElement.href = facebookUrl;
    }, 200);
  }
});
