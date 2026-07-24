const toggleBtn = document.querySelector(".toggle-theme");
const logoImg = document.querySelector("img");
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

const THEME_ROOT = document.documentElement;

const activeTheme = localStorage.getItem("active-theme");

if (activeTheme == "dark") {
  THEME_ROOT.classList.add("dark-mode");
  logoImg.src = "./assets/images/logo-dark.svg";
  moonIcon.src = "./assets/images/Moon_fill.svg";
} else {
  THEME_ROOT.classList.remove("dark-mode");
  logoImg.src = "./assets/images/logo-light.svg";
  moonIcon.src = "./assets/images/Moon_fill_light.svg";
}

toggleBtn.addEventListener("click", () => {
  THEME_ROOT.classList.toggle("dark-mode");

  if (THEME_ROOT.classList.contains("dark-mode")) {
    logoImg.src = "./assets/images/logo-dark.svg";
    moonIcon.src = "./assets/images/Moon_fill.svg";
    localStorage.setItem("active-theme", "dark");
  } else {
    logoImg.src = "./assets/images/logo-light.svg";
    moonIcon.src = "./assets/images/Moon_fill_light.svg";
    localStorage.setItem("active-theme", "light");
  }
});

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navLink = document.querySelector(".nav-link");

openBtn.addEventListener("click", () => {
  navLink.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navLink.classList.remove("active");
});
