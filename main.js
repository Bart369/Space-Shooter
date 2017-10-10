console.log('Game JS is working!')
let border = document.querySelector('.border');
let player = document.querySelector('.player');
let enemy1 = document.querySelector('.enemy1');
let enemy2 = document.querySelector('.enemy2');
let enemy3 = document.querySelector('.enemy3');
let start = document.querySelector('.start');
let enemyContainer = document.querySelector('.enemyContainer');
let spaceHolder = document.querySelector('.spaceHolder');
let stop = document.querySelector('.stop');
let laser = document.querySelector('.laser');

let enemySpawnPoints = [null, 100, 200, 300, 400, 500]; //The different  x coords spots enemies will appear from

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
  y: 50,
  height: 25,
  width: 25,
//  movement: enemy1Move()
}

let enemyMiniObj = {
  who: enemy1,
  x: 0,
  y: 0,
  height: 25,
  width: 25,
//  movement: enemy1Move()
}

let enemy2Obj = {
  who: enemy2,
  x: 0,
  y: 0,
  height: 40,
  width: 40
  //movement: enemy2Move()
}

/*

let enemy1Move = function(){
  let enemy1Counter = 0;
  let enemy1Switcher = Math.floor((Math.random() * 2) + 1);
  enemy1Switcher++;
  console.log('This is enemy1Switcher ' + enemy1Switcher);
  if (enemy1Switcher % 2 === 0){
    let moveEnemy1Right = setInterval(function(){
      console.log('Moving Right')
      enemy1Counter++;
      enemy1Obj.y += 2;
      enemy1.style.top = enemy1Obj.y + 'px';
      enemy1Obj.x += 3;
      enemy1.style.left = enemy1Obj.x + 'px';
      if (enemy1Counter === 35){
        clearInterval(moveEnemy1Right);
        enemy1Move();
      }
    }, 50);
  }
  else {
    let moveEnemy1Left = setInterval(function(){
      enemy1Counter++;
      console.log('Moving Left')
      enemy1Obj.y += 2;
      enemy1.style.top = enemy1Obj.y + 'px';
      enemy1Obj.x -= 3;
      enemy1.style.left = enemy1Obj.x + 'px';
      if (enemy1Counter === 35){
        clearInterval(moveEnemy1Left);
        enemy1Move();
      }
    }, 50);
  }
}
*/

let enemy2Move = function(){
  let enemy2Switcher = Math.floor((Math.random() * 3) + 1);
  enemy2Switcher += Math.floor((Math.random() * 3) + 1);
  console.log('This is enemy2Switcher ' + enemy2Switcher);
  if (enemy2Switcher === 3){
    let moveEnemy2Right = setInterval(function(){
      console.log('Moving Right')
      enemy2Obj.y += 3;
      enemy2.style.top = enemy2Obj.y + 'px';
      enemy2Obj.x += 3;
      enemy2.style.left = enemy2Obj.x + 'px';
      collision();
    }, 50)
  }
  if (enemy2Switcher === 2){
    let moveEnemy2Left = setInterval(function(){
      console.log('Moving Left')
      enemy2Obj.y += 5;
      enemy2.style.top = enemy2Obj.y + 'px';
      enemy2Obj.x -= 3;
      enemy2.style.left = enemy2Obj.x + 'px';
      collision();
    }, 50)
  }
  else {
    let moveEnemy2Down = setInterval(function(){
      console.log('Moving Down')
      enemy2Obj.y += 5;
      enemy2.style.top = enemy2Obj.y + 'px';
      collision();
    }, 50)
  };
}






let enemyMiniTop = 0;
let enemyMiniList = []; //These enemies will be in an array

const createEnemyMini = function(){
  for(let i = 0; i < 3; i++){
  enemyMiniList[i] = document.createElement('div');
  enemyMiniList[i].setAttribute('class', 'enemyMini');
  spaceHolder.appendChild(enemyMiniList[i]);
  enemyMiniList[i].style.left = enemySpawnPoints[Math.floor((Math.random() * 5) + 1)] + 'px'; //This will randomize the x coords. Not sure why more than one Spawn at a time though
  let moveEnemyMoveDown = setInterval(function(){
      console.log('Moving Down');
      enemyMiniObj.y += 4;
      enemyMiniList[i].style.top = enemyMiniObj.y + 'px';
      collision();
      if (enemyMiniObj.y > 600){
        enemyMiniList[i].remove();
        clearInterval(moveEnemyMoveDown);
        enemyMiniObj.y = 0;
      }
  }, 50)
  }
}

let enemy1List = [];
let enemy1X = []; //Each  enemy1  will have a different set of x and y coords so i can have more than one spawn.
let enemy1Y = [];

let enemy1Move = function(i){
      let enemy1Counter = 0;
      let enemy1Switcher = Math.floor((Math.random() * 2) + 1);
      enemy1Switcher++;
      console.log('This is enemy1Switcher ' + enemy1Switcher);
      if (enemy1Switcher % 2 === 0){
        let moveEnemy1Right = setInterval(function(){
          console.log('Moving Right')
          enemy1Counter++;
          enemy1Y[i] += 2;
          enemy1List[i].style.top = enemy1Y[i] + 'px';
          enemy1X[i] += 4;
          enemy1List[i].style.left = enemy1X[i] + 'px';
          if (enemy1Counter === 30){
            clearInterval(moveEnemy1Right); //Stops in the inverval and starts the function again, it may switch sides depending on the switcher randomizer.
            enemy1Move(i);
          }
        }, 50);
      }
      else {
        let moveEnemy1Left = setInterval(function(){
          enemy1Counter++;
          console.log('Moving Left')
          enemy1Y[i] += 2;
          enemy1List[i].style.top = enemy1Y[i] + 'px';
          enemy1X[i] -= 4;
          enemy1List[i].style.left = enemy1X[i] + 'px';
          if (enemy1Counter === 30){
            clearInterval(moveEnemy1Left);
            enemy1Move(i);
          }
        }, 50);
      }
    }



let enemy1InGameCounter = 0;  //Setting i in the for loop to this value which will increase the move enemy1 are created.
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




start.addEventListener('click', createEnemy1);


function collision(){
  if (playerObj.x < enemy2Obj.x + enemy2Obj.width &&
   playerObj.x + playerObj.width > enemy2Obj.x &&
   playerObj.y < enemy2Obj.y + enemy2Obj.height &&
   playerObj.height + playerObj.y > enemy2Obj.y) {
    console.log('collission holy shittttttttt');
  }
    // collision detected!
};






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
      console.log('laser above');
      laser.remove();
      numberOfLasers--;
      clearInterval(laserShootUp); //This stops increasing y.
      laserObj.x = playerObj.x + 18;  //Here we are reseting y and x so that next time we shoot it starts by the player
      laserObj.y = playerObj.y - 30 - playerObj.height;
    }
  }, 50)
};




//MOVING THE PLAYER
window.addEventListener('keydown', function(event){
  console.log(event.keyCode);

//LASERS PEW PEW... if numberOfLaser equals one then it won't shoot.
if (event.keyCode === 32 && numberOfLasers === 0){
  lasers();
}

//MOVING RIGHT
if (event.keyCode === 39){
  playerObj.x += 20;
  player.style.left = playerObj.x + 'px';
  laserObj.x += 20; //As the player moves, the origin of the laser changes with it.
}

//MOVING LEFT
if (event.keyCode === 37){
  playerObj.x -= 20;
  player.style.left = playerObj.x + 'px';
  laserObj.x -= 20;
}

//MOVING Down
if (event.keyCode === 40){
  playerObj.y += 20;
  player.style.top = playerObj.y + 'px';
  laserObj.y += 20;
}

//MOVING Up
if (event.keyCode === 38){
  playerObj.y -= 20;
  player.style.top = playerObj.y + 'px';
  laserObj.y -= 20;
}
boundaries(playerObj); //Checking boundaries every time the player moves

});


/*This could be a cool  laser upgrade
const lasers = function(){
  const laserShootUp = setInterval(function(){
  laser = document.createElement('div');
  laser.setAttribute('class', 'laser');
  border.appendChild(laser);
  laser.style.left = laserObj.x + 'px'; //This is so it shoots from the middle of player taking in to account the width of the laser
  laser.style.top = laserObj.y + 'px'; // This is so it shoots above player height and you also have to minus the length of the laser
  laserObj.y -= 8;
  laser.style.top = laserObj.y + 'px';
  }, 50)
  if (laser.style.top < -20){
    console.log('laser above');
    laser.remove();
  }
}
*/


collision();

