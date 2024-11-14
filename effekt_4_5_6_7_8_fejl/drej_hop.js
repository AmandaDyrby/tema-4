window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  document.querySelector("#red_container").classList.add("drej");
  document
    .querySelector("#red_container")
    .addEventListener("animationiteration", drejEnIteration);
}

function drejEnIteration() {
  console.log("drejEnIteration");
  document.querySelector("#blue_container").classList.add("hop");
  document
    .querySelector("#blue_container")
    .addEventListener("animationend", hopDone);
}

function hopDone() {
  console.log("hopDone");
  document.querySelector("#blue_container").classList.remove("hop");
  document
    .querySelector("#blue_container")
    .removeEventListener("animationend", hopDone);
}
