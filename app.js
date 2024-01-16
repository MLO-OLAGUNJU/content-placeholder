const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImage = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="./I will build html, css, javascript responsive website .png" alt="">';
  title.innerHTML = "FullStack Engineer";
  excerpt.innerHTML = "I will build fully responsive website for you";
  profileImage.innerHTML =
    '<img src="./MLO-Olagunju-Oladele-Emmanuel.jpg" alt="">';
  name.innerHTML = "Olagunju O.E.";
  date.innerHTML = "Jan 01, 2024";

  animatedBgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animatedBgTexts.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
}
