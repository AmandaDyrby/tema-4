window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  document.querySelector("#red_container").classList.add("pos1");
  document.querySelector("#red_container").classList.add("flyv");
  document
    .querySelector("#red_container")
    .addEventListener("mousedown", clickRedHandler);
}

function clickRedHandler() {
  console.log("clickRedHandler");
  document
    .querySelector("#red_container")
    .removeEventListener("mousedown", clickRedHandler);
  document.querySelector("#red_container").classList.add("frys");
  document.querySelector("#red_sprite").classList.add("forsvind");
  document
    .querySelector("#red_container")
    .addEventListener("animationend", redReset);
}

function redReset() {
  console.log("redReset");
  document.querySelector("#red_container").classList = "";
  document.querySelector("#red_sprite").classList = "";
  document
    .querySelector("#red_container")
    .removeEventListener("animationend", redReset);

  document.querySelector("#red_container").offsetLeft;
  document.querySelector("#red_container").classList.add("pos2");
  document.querySelector("#red_container").classList.add("flyv");
  document
    .querySelector("#red_container")
    .addEventListener("mousedown", clickRedHandler);
}
