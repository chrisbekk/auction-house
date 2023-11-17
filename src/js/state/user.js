import { isAuth } from "../auth/isAuth.js";
import { signOut } from "../listeners/signOut.js";
import { signIn } from "../listeners/signIn.js";
export function checkState(selector) {
  const element = document.querySelector(selector);
  if (isAuth("token")) {
    element.innerText = "Sign Out";
    element.addEventListener("click", signOut);
  } else {
    element.innerText = "Sign In";
    element.addEventListener("click", signIn);
  }
}
