const inputText = document.getElementById("name-input");
inputText.addEventListener("input", () => {
  const inputValue = inputText.value.trim();
  const outputText = document.getElementById("name-output");

  outputText.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
console.log(inputText);
