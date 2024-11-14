window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  document
    .querySelector("#red_container")
    .addEventListener("mousedown", clickRedHandler);
}

function clickRedHandler() {
  console.log("clickRedHandler");
  document
    .querySelector("#red_container")
    .removeEventListener("mousedown", clickRedHandler);
  document.querySelector("#red_container").classList.add("forsvind");
  document
    .querySelector("#red_container")
    .addEventListener("animationend", forsvindDone);
}

function forsvindDone() {
  console.log("forsvindDone");
  document
    .querySelector("#red_container")
    .removeEventListener("animationend", forsvindDone);
  document.querySelector("#red_container").classList.remove("forsvind");
  document.querySelector("#blue_container").classList.add("hop");
}
