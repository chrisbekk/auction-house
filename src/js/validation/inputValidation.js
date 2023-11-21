import { formErrorMessage } from "../errors/formErrorMessage.js";

export function inputValidation(element) {
  element.classList.remove("border-danger");
  element.classList.remove("bg-danger-subtle");
  element.classList.add("border-success");
  element.classList.add("bg-success-subtle");
  element.nextElementSibling.classList.add("d-none");
}
