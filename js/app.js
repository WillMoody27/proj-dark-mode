const darkModeSun = document.querySelector(".fa-sun");
const darkModeMoon = document.querySelector(".fa-moon");
const docBody = document.documentElement;
const darkModeFeature = localStorage.getItem("isDarkMode");
if (darkModeFeature === "enabled") {
  darkModeOn();
}
darkModeSun.addEventListener("mouseover", () => {
  console.log("MOuse");
  if (darkModeFeature == null || darkModeFeature === "disabled") {
    localStorage.setItem("isDarkMode", "disabled");
  }
});
darkModeSun.addEventListener("click", (e) => {
  if (!e.target.classList.contains("hide")) {
    e.target.classList.add("hide");
    darkModeMoon.classList.remove("hide");
    darkModeMoon.classList.add("night-mode");
    darkModeOn();
  }
});
darkModeMoon.addEventListener("click", (e) => {
  if (!e.target.classList.contains("hide")) {
    e.target.classList.add("hide");
    darkModeSun.classList.remove("hide");
    darkModeOff();
  }
});
function darkModeOn() {
  docBody.classList.add("dark-mode");
  darkModeSun.classList.add("hide");
  darkModeMoon.classList.remove("hide");
  darkModeMoon.classList.add("night-mode");
  localStorage.setItem("isDarkMode", "enabled");
}
function darkModeOff() {
  docBody.classList.remove("dark-mode");
  darkModeSun.classList.remove("hide");
  darkModeMoon.classList.add("hide");
  localStorage.setItem("isDarkMode", "disabled");
}
