document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {
  displayCurrentYear();   //Initialize on app load
};

//  YEAR FOR FOOTER
const displayCurrentYear = () => {
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
};

//  HAMBURGER MENU - TOGGLE

const ham = document.getElementById("ham-wrapper");
const menu = document.querySelector(".navbar");
const minus = document.querySelector(".minus")

ham.addEventListener("click", (e) => {
  ham.classList.toggle("open");
  menu.classList.toggle("show");
  minus.classList.toggle("show-minus");
})
