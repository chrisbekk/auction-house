import { register } from "../api/register.js";
import { formValidation } from "../validation/formValidation.js";

export async function signUp(event) {
  event.preventDefault();
  const inputObject = formValidation();
  register(inputObject)
    .then((data) => console.log("Data", data))
    .catch((error) => alert(error));
}

document.querySelector("#sign-up-button").addEventListener("click", signUp);
