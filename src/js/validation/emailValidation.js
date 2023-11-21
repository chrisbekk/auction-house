export function emailValidation(element) {
  console.log(element);
  if (element.value.trim() === "" || null) {
    formErrorMessage(element);
  }
}
