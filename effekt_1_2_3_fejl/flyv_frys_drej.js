window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
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
  document.querySelector("#red_sprite").classList.add("drej");
}
