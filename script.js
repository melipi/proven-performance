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

const hamContainer = document.getElementById("ham-wrapper");
const ham = document.querySelector(".ham");
const menu = document.querySelector(".navbar");
const minus = document.querySelector(".minus")

hamContainer.addEventListener("click", (e) => {
  hamContainer.classList.toggle("open");
  ham.classList.toggle("hide");
  menu.classList.toggle("show");
  minus.classList.toggle("hide");
})
