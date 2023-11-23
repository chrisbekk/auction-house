import { animateTitle } from "../animations/title.js";
import { signUp } from "../listeners/signUp.js";
import { search } from "../listeners/search.js";
import { formValidation } from "../validation/formValidation.js";
import { signUpModal, closeOutside } from "../listeners/signUpModal.js";
export function index() {}
document
  .querySelector("#search-listings")
  .addEventListener("click", (event) => search(event));
index();
