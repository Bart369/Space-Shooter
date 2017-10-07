console.log('Game JS is working!')
let player = document.querySelector('.player');
let enemy1 = document.querySelector('.enemy1');
let enemy2 = document.querySelector('.enemy2');
let enemy3 = document.querySelector('.enemy3');
let start = document.querySelector('.start');

//Player Moves
let playerLeft = 275;
let playerTop = 240;

//Enemy1 Moves
let enemy1Left = 0;
let enemy1Top = 0;

let counter = 0;


let enemy1MoveDown = function(){
  enemy1Top += 1;
  enemy1.style.top = enemy1Top + 'px';
};

//EVERY THREE SECONDS CHANCE TO CHANGEDIRECTION?? Hopefully
let enemy1MoveLeftRight = function(){
  let switcher = Math.floor((Math.random() * 2) + 1);
  counter++;

  if (counter % 30 === 0){

    switcher += Math.floor((Math.random() * 2) + 1);
    console.log(switcher);
  }
  if (switcher === 2){
    enemy1Left += 1;
    enemy1.style.left = enemy1Left + 'px';

  }
  else {
    enemy1Left -= 1;
    enemy1.style.left = enemy1Left + 'px';



  }
}



let enemy1MoveDownTimer = setInterval(enemy1MoveDown, 50);
let enemy1MoveLRTimer = setInterval(enemy1MoveLeftRight, 50);


let enemy1Movement = [
//Moving Right
  enemy1Left += 20,

//Moving Left
  enemy1Left -= 20
]



//TEST TO MOVE THE ENEMIES
start.addEventListener('keydown', function(event){




})


//MOVING THE PLAYER
window.addEventListener('keydown', function(event){
  console.log(event.keyCode);

//MOVING RIGHT
if (event.keyCode === 39){
  playerLeft += 20;
  player.style.left = playerLeft + 'px';
}

//MOVING LEFT
if (event.keyCode === 37){
  playerLeft -= 20;
  player.style.left = playerLeft + 'px';
}

//MOVING Down
if (event.keyCode === 40){
  playerTop += 20;
  player.style.top = playerTop + 'px';
}

//MOVING Up
if (event.keyCode === 38){
  playerTop -= 20;
  player.style.top = playerTop + 'px';
}













});

