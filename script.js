
const imageArea = document.querySelector(".page-wrap")
const button = document.querySelector("button")

button.addEventListener("click", function () {
  imageArea.classList.toggle("grid")
  
  if (imageArea.classList.contains("grid")) {
    button.innerHTML = "grid"
  } else {
    button.innerHTML = "list"
  }
})