import { animateTitle } from "./js/animations/title.js";
import { signUp } from "./js/listeners/signUp.js";
import { search } from "./js/listeners/search.js";
import { formValidation } from "./js/validation/formValidation.js";
import { signUpModal, closeOutside } from "./js/listeners/signUpModal.js";
import "./scss/styles.scss";
import { checkState } from "./js/state/user.js";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
export function index() {}
document
  .querySelector("#search-listings")
  .addEventListener("click", (event) => search(event));
index();
