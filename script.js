window.addEventListener("load", showPage);

function showPage() {
  console.log("show page");
  document
    .querySelector("#poop_container1")
    .addEventListener("click", clickPoopHandler);
}

function clickPoopHandler() {
  console.log("clickPoopHandler");
  document
    .querySelector("poop_container1")
    .removeEventListener("click", clickPoopHandler);
  document.querySelector("#poop_container1").classList.add("disappear");
}
