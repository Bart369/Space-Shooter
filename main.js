console.log('Game JS is working!')
let border = document.querySelector('.border');
let playerLives = document.querySelector('.playerLives')
let enemy1 = document.querySelector('.enemy1');
let enemy2 = document.querySelector('.enemy2');
let enemy3 = document.querySelector('.enemy3');
let start = document.querySelector('.start');
let enemyContainer = document.querySelector('.enemyContainer');
let spaceHolder = document.querySelector('.spaceHolder');
let stop = document.querySelector('.stop');
let laser = document.querySelector('.laser');
let enemyTest = document.querySelector('.enemyTest')

let enemySpawnPoints = [null, 100, 200, 300, 400, 500]; //The different  x coords spots enemies will appear from

let enemyMiniSpawnPoints = [null, 100, 150, 200, 250, 300, 350, 400, 450, 500]



/*
let enemy1Obj = {
  who: enemy1,
  x: 0,
  y: 50,
  height: 25,
  width: 25,
//  movement: enemy1Move()
}

let enemyMiniObj = {
  //who: enemyMini,
  x: 0,
  y: 50,
  height: 25,
  width: 25,
//  movement: enemy1Move()
}

let enemy2Obj = {
  who: enemy2,
  x: 0,
  y: 50,
  height: 40,
  width: 40
  //movement: enemy2Move()
}



/////////////////////////////    ENEMYMINI   /////////////////////////

//Originally just made this for practice but i like it so i kept it.
let enemyMiniX = [] //Each  enemy  will have a different set of x and y coords so i can have more than one spawn.
let enemyMiniY = [];
let enemyMiniList = []

let enemyMiniInGameCounter = 0; //So i is always increasing in the for loop so that i can have multiple copies of enemies and they won't override eachothers top and left style.
const createEnemyMini = function(){
  enemyMiniInGameCounter++;
  for(let i = enemyMiniInGameCounter; i < (enemyMiniInGameCounter + 1); i++){
    enemyMiniList[i] = document.createElement('div');
    enemyMiniList[i].setAttribute('class', 'enemyMini');
    spaceHolder.appendChild(enemyMiniList[i]);
    enemyMiniX[i] = enemyMiniSpawnPoints[Math.floor((Math.random() * 9) + 1)] ; //This will randomize the x coords. Not sure why more than one Spawn at a time though
    enemyMiniList[i].style.left = enemyMiniX[i] + 'px';
    enemyMiniY[i] = enemyMiniObj.y;
    moveEnemyMini(i)
  }
}
const moveEnemyMini = function(i){
  let moveEnemyMoveDown = setInterval(function(){
      enemyMiniY[i] += 6;
      enemyMiniList[i].style.top = enemyMiniY[i] + 'px';
      enemyMiniCollision(i);
      if (enemyMiniY[i]  > 600){
        enemyMiniList[i].remove();
        clearInterval(moveEnemyMoveDown);
        enemyMiniObj.y = 0;
      }
  }, 50)
};



/////////////////////////////////////// Enemy1 /////////////////////////////////////

/*
let enemy1List = [];
let enemy1X = [];
let enemy1Y = [];


let enemy1InGameCounter = 0;
const createEnemy1 = function(){
  enemy1InGameCounter++;
  for (let i = enemy1InGameCounter; i < (enemy1InGameCounter + 1); i++){
    enemy1List[i] = document.createElement('div');
    enemy1List[i].setAttribute('class', 'enemy1');
    spaceHolder.appendChild(enemy1List[i]);
    enemy1X[i] = enemySpawnPoints[Math.floor(Math.random() * 5) + 1];
    enemy1List[i].style.Left = enemy1X[i] + 'px';
    enemy1Y[i] = enemy1Obj.y;
    enemy1Move(i);
  }
}

const enemy1Move = function(i){
  let enemy1Counter = 0;
  let enemy1Switcher = Math.floor((Math.random() * 2) + 1);
  enemy1Switcher++;
  if (enemy1Switcher % 2 === 0){
    let moveEnemy1Right = setInterval(function(){
      enemy1Counter++;
      enemy1Y[i] += 2;
      enemy1List[i].style.top = enemy1Y[i] + 'px';
      enemy1X[i] += 4;
      enemy1List[i].style.left = enemy1X[i] + 'px';
      if (enemy1Counter === 30){
        clearInterval(moveEnemy1Right); //Stops in the inverval and starts the function again, it may switch sides depending on the switcher randomizer.
        enemy1Move(i);
      }
      if (enemy1X[i] > 600){
        enemy1List[i].remove();
        clearInterval(moveEnemy1Right);
      }
      else if (enemy1Y[i] > 600){
        enemy1List[i].remove();
        clearInterval(moveEnemy1Right);
      }
    }, 50);
  }
  else {
    let moveEnemy1Left = setInterval(function(){
      enemy1Counter++;
      enemy1Y[i] += 2;
      enemy1List[i].style.top = enemy1Y[i] + 'px';
      enemy1X[i] -= 4;
      enemy1List[i].style.left = enemy1X[i] + 'px';
      if (enemy1Counter === 30){
        clearInterval(moveEnemy1Left);
        enemy1Move(i);
      }
      if (enemy1X[i] < 0){
        enemy1List[i].remove();
        clearInterval(moveEnemy1Left);
      }
      else if (enemy1Y[i] > 600){
        enemy1List[i].remove();
        clearInterval(moveEnemy1Left);
      }
    }, 50);
  }
}


////////////////////////////////////  Enemy2    ////////////////////////////////

let enemy2List = [];
let enemy2X = [];
let enemy2Y = [];

let enemy2InGameCounter = 0;
const createEnemy2 = function(){
  enemy2InGameCounter++;
  for (let i = enemy2InGameCounter; i < (enemy2InGameCounter + 1); i++){
    enemy2List[i] = document.createElement('div');
    enemy2List[i].setAttribute('class', 'enemy2');
    spaceHolder.appendChild(enemy2List[i]);
    enemy2X[i] = enemySpawnPoints[Math.floor(Math.random() * 5) + 1];
    enemy2List[i].style.Left = enemy2X[i] + 'px';
    enemy2Y[i] = enemy2Obj.y;
    enemy2Move(i);
  }
}


let enemy2Move = function(i){
  let enemy2Switcher = Math.floor((Math.random() * 3) + 1);
  if (enemy2Switcher === 3){
    let moveEnemy2Right = setInterval(function(){
      enemy2Y[i] += 5;
      enemy2List[i].style.top = enemy2Y[i] + 'px';
      enemy2X[i] += 3;
      enemy2List[i].style.left = enemy2X[i] + 'px';
      enemy2LaserCollision(i);
      enemy2Collision(i);
      if (enemy2X[i] > 550){
        enemy2List[i].remove();
        clearInterval(moveEnemy2Right);
      }
      else if (enemy2Y[i]  > 600){
        enemy2List[i].remove();
        clearInterval(moveEnemy2Right);
      }
    }, 50)
  }
  if (enemy2Switcher === 2){
    let moveEnemy2Left = setInterval(function(){
      enemy2Y[i] += 5;
      enemy2List[i].style.top = enemy2Y[i] + 'px';
      enemy2X[i] -= 3;
      enemy2List[i].style.left = enemy2X[i] + 'px';
      enemy2LaserCollision(i);
      enemy2Collision(i);
      if (enemy2X[i] < 0){
        enemy2List[i].remove();
        clearInterval(moveEnemy2Left);
      }
      else if (enemy2Y[i]  > 600){
        enemy2List[i].remove();
        clearInterval(moveEnemy2Left);
      }
    }, 50)
  }
  else {
    let moveEnemy2Down = setInterval(function(){
      enemy2Y[i] += 5;
      enemy2List[i].style.top = enemy2Y[i] + 'px';
      enemy2X[i] += 0;
      enemy2List[i].style.left = enemy2X[i] + 'px';
      enemy2LaserCollision(i);
      enemy2Collision(i);
      if (enemy2Y[i]  > 600){
        enemy2List[i].remove();
        clearInterval(moveEnemy2Down);
      }
    }, 50)
  };
}
*/
//////////////////////////////////// Calling Enemies //////////////////////////////

/*

const callEnemies = function(){
  let callingEnemies = setInterval(function(){
    const num = Math.floor((Math.random() * 4) - 1);
    if (num === 1){
      createEnemyMini();
    }
    else if (num === 2){
      createEnemy1();
    }
    else {
      createEnemy2();
    }
  }, 1000)
};

*/



/////////////////////////////////////    Collision       ///////////////////////////////////////////
/*

let enemyMiniCollision = function(i){
    if (playerObj.x < enemyMiniX[i] + 25 &&
     playerObj.x + 40 > enemyMiniX[i] &&
     playerObj.y < enemyMiniY[i] + 25 &&
     40 + playerObj.y > enemyMiniY[i]) {
    enemyMiniList[i].style.backgroundColor = 'white';
    enemyMiniList[i].remove();
    }
};


let enemy2Collision = function(i){

    if (playerObj.x < enemy2X[i] + enemy2Obj.width &&
   playerObj.x + playerObj.width > enemy2X[i] &&
   playerObj.y < enemy2Y[i] + enemy2Obj.height &&
   playerObj.height + playerObj.y > enemy2Y[i]) {
    enemy2List[i].style.backgroundColor = 'white';
    console.log('collission !!!!!!!!');
    console.log(`Enemy2 X is ${enemy2X[i]}`)
    console.log(`Enemy2 Y is ${enemy2Y[i]}`)
    enemy2List[i].remove();
    playerLives.remove();
    }
};

let enemy2LaserCollision = function(i){
   if (laserObj.x < enemy2X[i] + enemy2Obj.width &&
   laserObj.x + laserObj.width > enemy2X[i] &&
   laserObj.y < enemy2Y[i] + enemy2Obj.height &&
   laserObj.height + laserObj.y > enemy2Y[i]) {
    enemy2List[i].style.backgroundColor = 'white';
    console.log('laser collission!');
    console.log(`Enemy2 X is ${enemy2X[i]}`)
    console.log(`Enemy2 Y is ${enemy2Y[i]}`)
    enemy2List[i].remove();
    }
};
*/

/////////////////////////////////// Player and Laser and Boundary ///////////////////////////////

let player = document.createElement('div');

let playerObj = {
  who: player,
  x: 0,
  y: 0,
  height: 40,
  width: 40
}

border.appendChild(player);
player.setAttribute('class', 'player');
player.style.left = '275px';
player.style.top = '400px';



//For the player mostly
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

let laserObj = {
    who: laser,
    height: 30,
    width: 3,
    x: playerObj.x + 18, //This is so it shoots from the middle of player taking in to account the width of the laser
    y: playerObj.y - 30 - playerObj.height // This is so it shoots above player height and you also have to minus the length of the laser
};

let numberOfLasers = 0; //This is to keep track of lasers. When we shoot this will go up to one. The player is not allowed to shoot when this is equal to one. w
                       //When the laser is gone this will go back to zero allowing the player to shoot again!

const lasers = function(){
  numberOfLasers++;
  laser = document.createElement('div');
  laser.setAttribute('class', 'laser');
  border.appendChild(laser);
  laser.style.left = laserObj.x + 'px';
  laser.style.top = laserObj.y + 'px';
  const laserShootUp = setInterval(function(){
    laserObj.y -= 30;
    laser.style.top = laserObj.y + 'px';
    if (laserObj.y < -40){ //When/if it gets to the border it is removed.
      laser.remove();
      numberOfLasers--;
      clearInterval(laserShootUp); //This stops increasing y.
      laserObj.x = playerObj.x + 18;  //Here we are reseting y and x so that next time we shoot it starts by the player
      laserObj.y = playerObj.y - 30 - playerObj.height;
    }
  }, 50)
};


*/

//MOVING THE PLAYER
window.addEventListener('keydown', function(event){
/*
//LASERS PEW PEW... if numberOfLaser equals one then it won't shoot.
if (event.keyCode === 32 && numberOfLasers === 0){
  lasers();
}
*/

//MOVING RIGHT
if (event.keyCode === 39){
  playerObj.x += 20;
  player.style.left = playerObj.x + 'px';
 // laserObj.x += 20; //As the player moves, the origin of the laser changes with it.
}

//MOVING LEFT
if (event.keyCode === 37){
  playerObj.x -= 20;
  player.style.left = playerObj.x + 'px';
  //laserObj.x -= 20;
}

//MOVING Down
if (event.keyCode === 40){
  playerObj.y += 20;
  player.style.top = playerObj.y + 'px';
  //laserObj.y += 20;
}

//MOVING Up
if (event.keyCode === 38){
  playerObj.y -= 20;
  player.style.top = playerObj.y + 'px';
  //laserObj.y -= 20;
}
boundaries(playerObj); //Checking boundaries every time the player moves
});

///////////////////////////////// Testing ///////////////////////////////
/
boxObj = {
  x: 300,
  y: 400,
  height: 40,
  width: 40
}

box = document.createElement('div');
box.setAttribute('class', 'box');
spaceHolder.appendChild(box);
box.style.left = '300px';
box.style.top = '400px';

const collision = function(){
  if (boxObj.x < enemyObj.x + enemyObj.width &&
   boxObj.x + boxObj.width > enemyObj.x &&
   boxObj.y < enemyObj.y + enemyObj.height &&
   boxObj.height + boxObj.y > enemyObj.y) {
    console.log(`box X is ${boxObj.x} box Y is ${boxObj.y}`)
    console.log(`Enemy X is ${enemyObj.x} enemy Y is ${enemyObj.y}`)
    enemy.style.backgroundColor = 'white';
    // collision detected!
  }
}


*/


enemyObj = {
  x: 300,
  y: 0,
  height: 40,
  width: 40
}



const collision = function(){
  if (playerObj.x < enemyObj.x + enemyObj.width &&
   playerObj.x + playerObj.width > enemyObj.x &&
   playerObj.y < enemyObj.y + enemyObj.height &&
   playerObj.height + playerObj.y > enemyObj.y) {
    console.log(`Player X is ${playerObj.x} Player Y is ${playerObj.y}`)
    console.log(`Enemy X is ${enemyObj.x} enemy Y is ${enemyObj.y}`)
    enemy.style.backgroundColor = 'white';
    // collision detected!
  }
}


const createEnemy = function(){
  enemy = document.createElement('div');
  enemy.setAttribute('class', 'enemy');
  spaceHolder.appendChild(enemy);
  enemy.style.left = enemyObj.x + 'px';
  enemy.style.top = enemyObj.y + 'px';
  moveEnemy();
};

const moveEnemy = function(){
  let moveEnemyDown = setInterval(function(){
    enemyObj.y += 5;
    enemy.style.top = enemyObj.y + 'px';
    collision();
    if (enemyObj.y > 600){
      enemy.remove();
      clearInterval(moveEnemyDown);
      enemyObj.y = 0;
    }
  },50)
}




start.addEventListener('click', createEnemy);

