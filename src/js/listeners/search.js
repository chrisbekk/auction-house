import { getParam } from "../utils/getParam.js";

export function search(event) {
  const input = event.target.parentElement.querySelector("input");
  if (input.value.trim() === "") {
    return;
  } else {
    window.location.href = `/listings.html?search=${input.value}`;
  }
}
