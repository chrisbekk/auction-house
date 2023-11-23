import { formErrorMessage } from "../errors/formErrorMessage.js";
import { checkValues } from "../utils/checkValues.js";
import { inputValidation } from "./inputValidation.js";

export function formValidation() {
  const form = document.querySelector(".needs-validation");
  const inputArray = Array.from(form.querySelectorAll("input")).filter(
    (input) => input.name !== "avatar",
  );

  let formValid = false;
  const inputObject = {};
  const checkedInputs = {};
  inputArray.forEach((element) => {
    if (element.name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (element.value.trim() === "" || null) {
        formErrorMessage(element);
        checkedInputs[element.name] = false;
      } else if (!emailRegex.test(element.value.trim())) {
        formErrorMessage(element);
        checkedInputs[element.name] = false;
      } else if (element.value.trim().indexOf("stud.noroff.no") === -1) {
        formErrorMessage(element);
        checkedInputs[element.name] = false;
      } else {
        inputValidation(element);
        checkedInputs[element.name] = true;
        inputObject.email = element.value;
      }
    } else {
      if (element.value.trim() === "" || null) {
        formErrorMessage(element);
        checkedInputs[element.name] = false;
      } else if (element.name === "username" && element.value.includes("_")) {
        formErrorMessage(element);
        checkedInputs[element.name] = false;
      } else if (
        element.name === "password" &&
        element.value.trim().length < 8
      ) {
        formErrorMessage(element);
        checkedInputs[element.name] = false;
      } else {
        inputValidation(element);
        checkedInputs[element.name] = true;
        inputObject[element.name] = element.value;
      }
    }
  });

  const avatar = document.getElementById("inputAvatar");
  if (typeof avatar.value === "string" && avatar.value.trim !== "") {
    inputObject[avatar.name] = avatar.value;
  }

  console.log(checkedInputs);
  if (checkValues(checkedInputs)) {
    return inputObject;
  } else {
    return;
  }
}
