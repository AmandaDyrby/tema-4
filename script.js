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

  //reset points and lives
  points = 0;
  document.querySelector("#points").innerHTML = points;
  lives = 3;
  document.querySelector("#lives").innerHTML = lives;

  //start timer animation
  document.querySelector("#time_sprite").classList.add("time");
  document
    .querySelector("#time_container")
    .addEventListener("animationend", stopGame);

  //initialize poop1
  poop1.classList.add("pos" + rng(9), "fallGood", "delay" + rng(4));
  poop1.addEventListener("animationiteration", poopClickReset);
  poop1.addEventListener("mousedown", clickPoop);
  poop1.addEventListener("animationiteration", poopFallReset);
  //poop random delay

  //initialze seed1
  seed1.classList.add("pos" + rng(9), "fallBad", "delay" + rng(4));
  seed1.addEventListener("animationiteration", seedReset);
  seed1.addEventListener("mousedown", clickSeed);
  //seed random delay

  //initialize feather1
  //feather random delay
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
  //console.log("clickPoopReset");
  poop1.classList.remove("freeze");
  document.querySelector("#poop_sprite1").classList.remove("disappear_good");

  poop1.classList = "";
  poop1.offsetLeft;
  poop1.classList.add("pos" + rng(9), "fallGood");
  document
    .querySelector("#poop_container1")
    .addEventListener("mousedown", clickPoop);
}

function poopFallReset() {
  lives--;
  document.querySelector("#lives").innerHTML = lives;
  //play sound
  if (lives < 1) {
    stopGame();
  }
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
  //console.log("seedReset");
  seed1.classList.remove("freeze");
  document.querySelector("#seed_sprite1").classList.remove("disappear_bad");

  seed1.classList = "";
  seed1.offsetLeft;
  seed1.classList.add("pos" + rng(9), "fallBad");
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
//   document.querySelector("#lives").innerHTML = lives;
//   // play sound
//   // start featherDisappear animation
// }

// function featherReset() {
//   //show element again
//   //new random position
//   //restart fall animation
// }

function stopGame() {
  console.log("stopGame");

  //Stop timer
  document.querySelector("#time_sprite").classList.remove("time");
  document
    .querySelector("#time_container")
    .removeEventListener("animationend", stopGame);

  poop1.classList = "";
  poop1.firstElementChild.classList = "";

  poop1.removeEventListener("mousedown", clickPoop);
  poop1.removeEventListener("animationiteration", poopClickReset);
  poop1.removeEventListener("animationend", poopClickReset);

  seed1.classList = "";
  seed1.firstElementChild.classList = "";

  seed1.removeEventListener("mousedown", clickSeed);
  seed1.removeEventListener("animationiteration", seedReset);
  seed1.removeEventListener("animationend", seedReset);

  if (lives <= 0) {
    gameOver();
  } else if (points >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}

function gameOver() {
  console.log("u suck!");
  //show gameover screen
}

function levelComplete() {
  console.log("victory!");
  //show victory screen
}
