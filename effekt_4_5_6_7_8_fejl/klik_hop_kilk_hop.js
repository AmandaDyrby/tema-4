window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  document
    .querySelector("#red_container")
    .addEventListener("mousedown", clickRedHandler);
}

function clickRedHandler() {
  console.log("clickRedHandler");

  document.querySelector("#red_container").classList.remove("hop");
  document.querySelector("#red_container").offsetLeft;
  document.querySelector("#red_container").classList.add("hop");
}
