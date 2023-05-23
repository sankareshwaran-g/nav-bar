const burgerDiv = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const burgerIcon = document.querySelector('.fa-bars');

burgerDiv.addEventListener("click", () => {
  menu.classList.toggle("nav-active");   
  burgerIcon.classList.toggle("fa-xmark");
  burgerIcon.classList.toggle("fa-bars");
});

  