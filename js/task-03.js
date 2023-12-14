const inputText = document
  .getElementById("name-input")
  .addEventListener("input", function () {
    const inputValue = this.value.trim();
    const outputText = document.getElementById("name-output");

    outputText.textContent = inputValue === "" ? "Anonymous" : inputValue;
  });
