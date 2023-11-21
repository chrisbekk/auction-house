import { formValidation } from "../validation/formValidation.js";
const apiUrl = import.meta.env.VITE_BASE_URL;
export function signUp(event) {
  event.preventDefault();
  console.log("clicked");
  console.log("Form Valid");
  const inputObject = formValidation();
  console.log(inputObject);
  console.log(apiUrl);
}

document.querySelector("#sign-up-button").addEventListener("click", signUp);
