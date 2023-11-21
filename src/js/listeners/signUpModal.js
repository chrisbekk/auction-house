const form = document.querySelector("form");
const inputs = Array.from(form.querySelectorAll("input"));
const errors = Array.from(form.querySelectorAll("p"));

export function signUpModal() {
  const closeBtn = document.getElementById("sign-up-modal-button");

  closeBtn.addEventListener("click", () => {
    form.reset();
    inputs.forEach((input) => {
      input.className = "";
      input.classList.add("form-control");
    });
    errors.forEach((error) => {
      error.className = "";
      error.classList.add("d-none");
    });
  });
}

export function closeOutside() {
  const modal = document.getElementById("sign-up-modal");
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      form.reset();
      inputs.forEach((input) => {
        input.className = "";
        input.classList.add("form-control");
      });
      errors.forEach((error) => {
        error.className = "";
        error.classList.add("d-none");
      });
    } else {
      return;
    }
  });
}

signUpModal();
closeOutside();
