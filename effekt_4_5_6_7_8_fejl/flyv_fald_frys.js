window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  document.querySelector("#red_container").classList.add("flyv");
  document
    .querySelector("#red_container")
    .addEventListener("click", clickRedHandler);
}

function clickRedHandler() {
  console.log("clickRedHandler");
  document
    .querySelector("#red_container")
    .removeEventListener("click", clickRedHandler);
  document.querySelector("#red_sprite").classList.add("fald");
  document
    .querySelector("#red_container")
    .addEventListener("animationend", faldDone);
}

function faldDone() {
  console.log("faldDone");
  document
    .querySelector("#red_container")
    .removeEventListener("animationend", faldDone);
  document.querySelector("#red_container").classList.add("frys");
}
