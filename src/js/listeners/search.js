export function search(event) {
  if (event.target.id !== "button-addon2") {
    return;
  } else {
    const input = event.target.parentElement.querySelector("input");
    console.log(input.value);
    input.value = "";
  }
}

document
  .querySelector("#button-addon2")
  .addEventListener("click", (event) => search(event));
