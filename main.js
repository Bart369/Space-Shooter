console.log('Game JS is working!')
let player = document.querySelector('.player');
let enemy1 = document.querySelector('.enemy1');
let enemy2 = document.querySelector('.enemy2');
let enemy3 = document.querySelector('.enemy3');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');

//Player Moves

let playerObj = {
  who: player,
  x: 275,
  y: 400,
  height: 40,
  width: 40
}

let enemy1Obj = {
  who: enemy1,
  x: 0,
  y: 0,
  height: 25,
  width: 25
}

let enemy2Obj = {
  who: enemy2,
  x: 0,
  y: 0,
  height: 40,
  width: 40
}


//Enemy1 Moves
let enemy1Left = 500;
let enemy1Top = 0;
let enemy1Counter = 0;
let enemy1Switcher = Math.floor((Math.random() * 2) + 1);

//Enemy2 Moves
let enemy2Left = 300;
let enemy2Top = 0;
let enemy2Counter = 0;
let enemy2Switcher = Math.floor((Math.random() * 3) + 1);




let enemy1Move = function(){
  enemy1Switcher++;
  let enemy1Counter = 0;
  console.log('This is enemy1Switcher ' + enemy1Switcher);
  if (enemy1Switcher % 2 === 0){
    let moveEnemy1Right = setInterval(function(){
      console.log('Moving Right')
      enemy1Counter++;
      enemy1Top += 1;
      enemy1.style.top = enemy1Top + 'px';
      enemy1Left += 3;
      enemy1.style.left = enemy1Left + 'px';
      if (enemy1Counter === 50){
        clearInterval(moveEnemy1Right);
        enemy1Move();
      }
    }, 50);
  }
  else {
    let moveEnemy1Left = setInterval(function(){
      enemy1Counter++;
      console.log('Moving Left')
      enemy1Top += 1;
      enemy1.style.top = enemy1Top + 'px';
      enemy1Left -= 3;
      enemy1.style.left = enemy1Left + 'px';
      if (enemy1Counter === 50){
        clearInterval(moveEnemy1Left);
        enemy1Move();
      }
    }, 50);
  }
}


let enemy2Move = function(){
  enemy2Switcher += Math.floor((Math.random() * 3) + 1);
  let enemy2Counter = 0;
  console.log('This is enemy2Switcher ' + enemy2Switcher);
  if (enemy2Switcher === 3){
    let moveEnemy2Right = setInterval(function(){
      console.log('Moving Right')
      enemy2Counter++;
      enemy2Top += 1;
      enemy2.style.top = enemy2Top + 'px';
      enemy2Left += 1;
      enemy2.style.left = enemy2Left + 'px';
    }
  )};
  if (enemy2Switcher === 2){
    let moveEnemy2Left = setInterval(function(){
      enemy2Counter++;
      console.log('Moving Left')
      enemy2Top += 2;
      enemy2.style.top = enemy2Top + 'px';
      enemy2Left -= 1;
      enemy2.style.left = enemy2Left + 'px';
    })
  }
  else {
    let moveEnemy2Down = setInterval(function(){
      enemy2Counter++;
      console.log('Moving Down')
      enemy2Top += 1;
      enemy2.style.top = enemy2Top + 'px';
    }
  )};
}

/*
let enemy = {
  enemy1: {movement: enemy1Move()},
  enemy2: {movement: enemy2Move()},
  enemy3: enemy3
}
*/


start.addEventListener('click', enemy2Move);


let boundaries = function(obj){
  if (obj.x < 0){
    obj.x = 0;
    obj.who.style.left = obj.x + 'px';
  }
  if (obj.y < 0){
    obj.y = 0;
    obj.who.style.top = obj.y + 'px';
  }
  if (obj.x + obj.width > 600){
    obj.x = 600 - obj.width;
    obj.who.style.left = obj.x + 'px';
  }
  if (obj.y + obj.height > 550){
    obj.y = 550 - obj.height;
    obj.who.style.top = obj.y + 'px';
  }
};
/*

let playerBoundaries = function(){
  if (playerObj.x < 15){
    playerObj.x = 0;
    player.style.left = playerObj.x + 'px';
  }
  if (playerObj.y < 20){
    playerObj.y = 0;
    player.style.top = playerObj.y + 'px';
  }
  if (playerObj.x  + 40 > 600){
    playerObj.x = 560;
    player.style.left = playerObj.x + 'px';

  }
  if (playerObj.y + 40 > 550){
    playerObj.y = 510;
    player.style.top = playerObj.y + 'px';
  }
}
*/

//MOVING THE PLAYER
window.addEventListener('keydown', function(event){
  console.log(event.keyCode);

//MOVING RIGHT
if (event.keyCode === 39){
  playerObj.x += 20;
  player.style.left = playerObj.x + 'px';
}

//MOVING LEFT
if (event.keyCode === 37){
  playerObj.x -= 20;
  player.style.left = playerObj.x + 'px';
}

//MOVING Down
if (event.keyCode === 40){
  playerObj.y += 20;
  player.style.top = playerObj.y + 'px';
}

//MOVING Up
if (event.keyCode === 38){
  playerObj.y -= 20;
  player.style.top = playerObj.y + 'px';
}
boundaries(playerObj);

});





