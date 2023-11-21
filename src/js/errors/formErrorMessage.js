export function formErrorMessage(selector) {
  console.log(selector);
  selector.nextElementSibling.classList.remove("d-none");
  selector.nextElementSibling.classList.add("d-block");
  selector.classList.add("border-danger");
  selector.classList.add("bg-danger-subtle");
}
