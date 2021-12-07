const imageArea = document.querySelector(".page-main");
const button = document.querySelector("button");

button.addEventListener("click", function() {
  imageArea.classList.toggle("grid");

  if (imageArea.classList.contains("grid")) {
    button.innerHTML = "list";
  } else {
    button.innerHTML = "grid";
  }
});
