let toggle = document.querySelector(".toggle");
let topbar = document.querySelector(".topbar");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let themeSwitch = document.querySelector(".themeSwitch");
let body = document.querySelector("body");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  topbar.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});

// theme switch toggle

themeSwitch.addEventListener("click", function () {
  body.classList.toggle("dark");
});

// now, we fix menu active class issue for mobile devices

function toggleMenu() {
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");
  navigation.classList.remove("active");
  main.classList.remove("active");
}

document.querySelector(".link").addEventListener("click", toggleMenu);

// Show Hidden Items From Work

let showMore = document.querySelector(".show-more");
let hidden = document.querySelector(".hidden");

showMore.addEventListener("click", function () {
  if (showMore.innerHTML === "Less View") {
    showMore.innerHTML = "Show More";
    /* hidden.style.display = "none"; */
    $(".hidden").fadeOut();
  } else {
    showMore.innerHTML = "Less View";
    /* hidden.style.display = "block"; */
    $(".hidden").fadeIn(1000);
  }
});

// current year in copyright div

document.querySelector(".year").innerHTML = new Date().getFullYear();
