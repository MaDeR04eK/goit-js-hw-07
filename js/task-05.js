function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;

  const colorEl = document.querySelector(".color");
  colorEl.textContent = newColor;
});
