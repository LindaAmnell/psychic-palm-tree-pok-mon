const startbtn = document.querySelector("#start-button");
const startScreen = document.querySelector(".start-screen");
const searchScreen = document.querySelector(".search-screen");

startbtn.addEventListener("click", () => {
  startScreen.classList.add("hide");
  searchScreen.classList.add("show");
});

export { startbtn };
