window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  document
    .querySelector("#red_container")
    .addEventListener("click", clickRedHandler);
}

function clickRedHandler() {
  console.log("clickRedHandler");
  document
    .querySelector("#red_container")
    .removeEventListener("click", clickRedHandler);
  document.querySelector("#red_container").classList.add("forsvind");
}
