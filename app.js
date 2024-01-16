const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImage = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll("animated-bg");
const animatedBgTexts = document.querySelectorAll("animted-bg-text");

function getData() {
  header.innerHTML =
    '<img src="https://unsplash.com/photos/macbook-pro-on-top-of-brown-table-1SAnrIxw5OY" alt="" />';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendii consequuntur";
  profileImage.innerHTML =
    '  <img src="https://randomuser.me/api/portraits.men.45.jpg" alt="" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08 2024";
}
