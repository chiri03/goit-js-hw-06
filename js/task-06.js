const inputName = document.querySelector("#validation-input");

inputName.addEventListener("blur", () => {
  if (inputName.value.length === 6 && inputName.classList.contains("invalid")) {
    return inputName.classList.replace("invalid", "valid");
  }
  inputName.classList.add("invalid");
});
