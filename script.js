window.addEventListener("load", showPage);

let points;
let lives;
function rng(max) {
  return Math.floor(Math.random() * max) + 1;
}

const poop1 = document.querySelector("#poop_container1");
const seed1 = document.querySelector("#seed_container1");

function showPage() {
  console.log("show page");
  // skjul andre skærme
  startGame();
}

function startGame() {
  console.log("startGame");
  // skjul andre skærme
  points = 0;
  document.querySelector("#points").innerHTML = points;
  lives = 3;
  document.querySelector("#lives").innerHTML = lives;

  //start timer animation

  poop1.classList.add("pos" + rng(9), "fall");
  seed1.classList.add("pos" + rng(9), "fall");

  //feather random position
  //feather fall

  document
    .querySelector("#poop_container1")
    .addEventListener("animationiteration", poopClickReset);
  document
    .querySelector("#poop_container1")
    .addEventListener("mousedown", clickPoop);

  seed1.addEventListener("animationiteration", seedReset);
  seed1.addEventListener("mousedown", clickSeed);
  //feather clickable

  document
    .querySelector("#poop_container1")
    .addEventListener("animationiteration", poopFallReset);
}

function clickPoop() {
  console.log("clickPoop");
  document
    .querySelector("#poop_container1")
    .removeEventListener("mousedown", clickPoop);

  points++;
  document.querySelector("#points").innerHTML = points;
  poop1.classList.add("freeze");
  document.querySelector("#poop_sprite1").classList.add("disappear_good");
  // play sound

  document
    .querySelector("#poop_sprite1")
    .addEventListener("animationend", poopClickReset);
}

function poopClickReset() {
  console.log("clickPoopReset");
  poop1.classList.remove("freeze");
  document.querySelector("#poop_sprite1").classList.remove("disappear_good");

  poop1.classList = "";
  poop1.offsetLeft;
  poop1.classList.add("pos" + rng(9), "fall");
  document
    .querySelector("#poop_container1")
    .addEventListener("mousedown", clickPoop);
}

function poopFallReset() {
  lives--;
  document.querySelector("#lives").innerHTML = lives;
  //play sound
}

function clickSeed() {
  console.log("clickSeed");
  seed1.removeEventListener("mousedown", clickSeed);

  points--;
  document.querySelector("#points").innerHTML = points;
  seed1.classList.add("freeze");
  document.querySelector("#seed_sprite1").classList.add("disappear_bad");
  //play sound

  document
    .querySelector("#seed_sprite1")
    .addEventListener("animationend", seedReset);
}

function seedReset() {
  console.log("seedReset");
  seed1.classList.remove("freeze");
  document.querySelector("#seed_sprite1").classList.remove("disappear_bad");

  seed1.classList = "";
  seed1.offsetLeft;
  seed1.classList.add("pos" + rng(9), "fall");
  document
    .querySelector("#seed_container1")
    .addEventListener("mousedown", clickSeed);
}

// function clickFeather() {
//   document
//     .querySelector("selector")
//     .removeEventListener("mousedown", clickFeather);
//   if (lives < 3) {
//     lives++;
//   }
//   document.querySelector("#life_board").innerHTML = lives;
//   // play sound
//   // start featherDisappear animation
// }

// function featherReset() {
//   //show element again
//   //new random position
//   //restart fall animation
// }

//if lives=0 // if timer animation done
function stopGame() {
  //remove all animations
  //remove all listeners
}

//if stopGame && (if lives = 0 // points<30)
function gameOver() {
  //show gameover screen
}

//if stopGame && points>29
function levelComplete() {
  //show victory screen
}
