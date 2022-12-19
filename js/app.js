const toggleBtn = document.querySelector(".btn");
const docBody = document.documentElement;
const darkModeFeature = localStorage.getItem("isDarkMode");

// Dark Mode Feature
if (darkModeFeature === "enabled") {
  darkModeOn(); // Initial State of Dark Mode
}
// Mouseover checks theme status & if darkmode in localStorage
toggleBtn.addEventListener("mouseover", () => {
  if (darkModeFeature == null || darkModeFeature === "disabled") {
    localStorage.setItem("isDarkMode", "disabled");
  }
});
toggleBtn.addEventListener("click", () => {
  if (localStorage.getItem("isDarkMode") === "disabled") {
    darkModeOn();
  } else {
    darkModeOff();
  }
});
// ***** Functions *****
function darkModeOn() {
  docBody.classList.add("dark-mode");
  toggleBtn.classList.add("dark-btn");
  localStorage.setItem("isDarkMode", "enabled");
}
function darkModeOff() {
  docBody.classList.remove("dark-mode");
  toggleBtn.classList.remove("dark-btn");
  localStorage.setItem("isDarkMode", "disabled");
}
