window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  document
    .querySelector("#blue_container")
    .addEventListener("click", clickBlueHandler);
}

function clickBlueHandler() {
  console.log("clickBlueHandler");
  document
    .querySelector("#blue_container")
    .removeEventListener("click", clickBlueHandler);
  document.querySelector("#blue_container").classList.add("hop");
}
