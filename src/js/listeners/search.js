import { getParam } from "../utils/getParam.js";

export function search(event) {
  if (event.target.id !== "button-addon2") {
    return;
  } else {
    const input = event.target.parentElement.querySelector("input");
    console.log(input.value);
    if (input.value.trim() === "") {
      return;
    } else {
      window.location.href = `/listings.html?search=${input.value}`;
    }
  }
}

document
  .querySelector("#button-addon2")
  .addEventListener("click", (event) => search(event));
