const input = document.querySelector("input");
const eye = document.getElementById("eye-icon");

eye.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }

  // input.type === "password" ? (input.type = "text") : (input.type = "password");
});
