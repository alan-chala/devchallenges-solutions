const toggleBtn = document.querySelector(".toggle-theme");
const logoImg = document.querySelector("img");
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

const BODY = document.body;

toggleBtn.addEventListener("click", () => {
  BODY.classList.toggle("dark-mode");

  if (BODY.classList.contains("dark-mode")) {
    logoImg.src = "./assets/images/logo-dark.svg";
    moonIcon.src = "./assets/images/Moon_fill.svg";
    localStorage.setItem("active-theme", "dark");
  } else {
    logoImg.src = "./assets/images/logo-light.svg";
    moonIcon.src = "./assets/images/Moon_fill_light.svg";
    localStorage.setItem("active-theme", "light");
  }
});

const activeTheme = localStorage.getItem("active-theme");

if (activeTheme == "dark") {
  BODY.classList.add("dark-mode");
  logoImg.src = "./assets/images/logo-dark.svg";
  moonIcon.src = "./assets/images/Moon_fill.svg";
} else {
  BODY.classList.remove("dark-mode");
  logoImg.src = "./assets/images/logo-light.svg";
  moonIcon.src = "./assets/images/Moon_fill_light.svg";
}
