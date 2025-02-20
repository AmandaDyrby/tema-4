window.addEventListener("load", showPage);

let points;
let lives;
function rng(max) {
  return Math.floor(Math.random() * max) + 1;
}

const poop1 = document.querySelector("#poop_container1");
const poop2 = document.querySelector("#poop_container2");
const seed1 = document.querySelector("#seed_container1");
const seed2 = document.querySelector("#seed_container2");

const startScreen = document.querySelector("#start");
const gameOverScreen = document.querySelector("#game_over");
const victoryScreen = document.querySelector("#level_complete");

function showPage() {
  console.log("show page");

  //hide other screens
  victoryScreen.classList.add("hide");
  gameOverScreen.classList.add("hide");

  //show start screen
  startScreen.addEventListener("mousedown", startGame);
}

function startGame() {
  console.log("startGame");
  startScreen.classList.add("hide");
  gameOverScreen.classList.add("hide");
  victoryScreen.classList.add("hide");

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

  //initialize poop2
  poop2.classList.add("pos" + rng(9), "fallGood", "delay" + rng(4));
  poop2.addEventListener("animationiteration", poopClickReset);
  poop2.addEventListener("mousedown", clickPoop);
  poop2.addEventListener("animationiteration", poopFallReset);

  //initialze seed1
  seed1.classList.add("pos" + rng(9), "fallBad", "delay" + rng(4));
  seed1.addEventListener("animationiteration", seedReset);
  seed1.addEventListener("mousedown", clickSeed);

  //initialze seed2
  seed2.classList.add("pos" + rng(9), "fallBad", "delay" + rng(4));
  seed2.addEventListener("animationiteration", seedReset);
  seed2.addEventListener("mousedown", clickSeed);

  //initialize feather1
  //initialize feather2
  //initialize feather3
}

function clickPoop() {
  console.log("clickPoop");

  this.removeEventListener("mousedown", clickPoop);

  //add points on poop click
  points++;
  document.querySelector("#points").innerHTML = points;

  //play sound
  if (Math.random() < 0.5) {
    document.querySelector("#fart1").volume = 0.5;
    document.querySelector("#fart1").play();
  } else {
    document.querySelector("#fart2").volume = 0.5;
    document.querySelector("#fart2").play();
  }

  //poop disappear animation
  this.classList.add("freeze");
  this.firstElementChild.classList.add("disappear_good");

  //reset poop after animation end
  this.addEventListener("animationend", poopClickReset);
}

function poopClickReset() {
  console.log("clickPoopReset");

  this.classList.remove("freeze");
  this.firstElementChild.classList.remove("disappear_good");

  //reset click
  this.classList = "";
  this.offsetLeft;
  this.classList.add("pos" + rng(9), "fallGood");
  this.addEventListener("mousedown", clickPoop);
}

function poopFallReset() {
  //lose life if poop hits floor
  lives--;
  document.querySelector("#lives").innerHTML = lives;
  //play sound

  //game over if lives reaches 0
  if (lives < 1) {
    stopGame();
  }
}

function clickSeed() {
  console.log("clickSeed");
  this.removeEventListener("mousedown", clickSeed);

  //subtract point if seed is clicked
  points--;
  document.querySelector("#points").innerHTML = points;

  //play sound
  document.querySelector("#pip").volume = 0.5;
  document.querySelector("#pip").play();

  //seed disappear animation
  this.classList.add("freeze");
  this.firstElementChild.classList.add("disappear_bad");

  //reset seed after animation end
  this.addEventListener("animationend", seedReset);
}

function seedReset() {
  //console.log("seedReset");
  this.classList.remove("freeze");
  this.firstElementChild.classList.remove("disappear_bad");

  //reset seed
  this.classList = "";
  this.offsetLeft;
  this.classList.add("pos" + rng(9), "fallBad");
  this.addEventListener("mousedown", clickSeed);
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
  poop2.classList = "";
  seed1.classList = "";
  seed2.classList = "";

  poop1.removeEventListener("mousedown", clickPoop);
  poop1.removeEventListener("animationiteration", poopClickReset);
  poop1.removeEventListener("animationend", poopClickReset);
  poop2.removeEventListener("mousedown", clickPoop);
  poop2.removeEventListener("animationiteration", poopClickReset);
  poop2.removeEventListener("animationend", poopClickReset);

  seed1.removeEventListener("mousedown", clickSeed);
  seed1.removeEventListener("animationiteration", seedReset);
  seed1.removeEventListener("animationend", seedReset);
  seed2.removeEventListener("mousedown", clickSeed);
  seed2.removeEventListener("animationiteration", seedReset);
  seed2.removeEventListener("animationend", seedReset);

  //which end screen?
  if (lives <= 0) {
    gameOver();
  } else if (points >= 20) {
    levelComplete();
  } else {
    gameOver();
  }
}

function gameOver() {
  console.log("u suck!");

  //show game over screen
  gameOverScreen.classList.remove("hide");
  gameOverScreen.addEventListener("mousedown", startGame);
}

function levelComplete() {
  console.log("victory!");

  //show victory screen
  victoryScreen.classList.remove("hide");
  victoryScreen.addEventListener("mousedown", startGame);
}
