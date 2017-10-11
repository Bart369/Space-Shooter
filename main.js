console.log('Game JS is working!')
let border = document.querySelector('.border');
let playerLives = document.querySelector('.playerLives')
let enemy11 = document.querySelector('.enemy11');
let enemy12 = document.querySelector('.enemy12');
let enemy13 = document.querySelector('.enemy13');
let start = document.querySelector('.start');
let enemy1Container = document.querySelector('.enemy1Container');
let spaceHolder = document.querySelector('.spaceHolder');
let stop = document.querySelector('.stop');
let laser = document.querySelector('.laser');
let enemy1Test = document.querySelector('.enemy1Test')

let enemy1SpawnPoints = [null, 100, 200, 300, 400, 500]; //The different  x coords spots enemies will appear from

let enemy1MiniSpawnPoints = [null, 100, 150, 200, 250, 300, 350, 400, 450, 500]



/*
let enemy11Obj = {
  who: enemy11,
  x: 0,
  y: 50,
  height: 25,
  width: 25,
//  movement: enemy11Move()
}

let enemy1MiniObj = {
  //who: enemy1Mini,
  x: 0,
  y: 50,
  height: 25,
  width: 25,
//  movement: enemy11Move()
}

let enemy12Obj = {
  who: enemy12,
  x: 0,
  y: 50,
  height: 40,
  width: 40
  //movement: enemy12Move()
}



/////////////////////////////    enemy1MINI   /////////////////////////

//Originally just made this for practice but i like it so i kept it.
let enemy1MiniX = [] //Each  enemy1  will have a different set of x and y coords so i can have more than one spawn.
let enemy1MiniY = [];
let enemy1MiniList = []

let enemy1MiniInGameCounter = 0; //So i is always increasing in the for loop so that i can have multiple copies of enemies and they won't override eachothers top and left style.
const createenemy1Mini = function(){
  enemy1MiniInGameCounter++;
  for(let i = enemy1MiniInGameCounter; i < (enemy1MiniInGameCounter + 1); i++){
    enemy1MiniList[i] = document.createElement('div');
    enemy1MiniList[i].setAttribute('class', 'enemy1Mini');
    spaceHolder.appendChild(enemy1MiniList[i]);
    enemy1MiniX[i] = enemy1MiniSpawnPoints[Math.floor((Math.random() * 9) + 1)] ; //This will randomize the x coords. Not sure why more than one Spawn at a time though
    enemy1MiniList[i].style.left = enemy1MiniX[i] + 'px';
    enemy1MiniY[i] = enemy1MiniObj.y;
    moveenemy1Mini(i)
  }
}
const moveenemy1Mini = function(i){
  let moveenemy1MoveDown = setInterval(function(){
      enemy1MiniY[i] += 6;
      enemy1MiniList[i].style.top = enemy1MiniY[i] + 'px';
      enemy1MiniCollision(i);
      if (enemy1MiniY[i]  > 600){
        enemy1MiniList[i].remove();
        clearInterval(moveenemy1MoveDown);
        enemy1MiniObj.y = 0;
      }
  }, 50)
};



/////////////////////////////////////// enemy11 /////////////////////////////////////

/*
let enemy11List = [];
let enemy11X = [];
let enemy11Y = [];


let enemy11InGameCounter = 0;
const createenemy11 = function(){
  enemy11InGameCounter++;
  for (let i = enemy11InGameCounter; i < (enemy11InGameCounter + 1); i++){
    enemy11List[i] = document.createElement('div');
    enemy11List[i].setAttribute('class', 'enemy11');
    spaceHolder.appendChild(enemy11List[i]);
    enemy11X[i] = enemy1SpawnPoints[Math.floor(Math.random() * 5) + 1];
    enemy11List[i].style.Left = enemy11X[i] + 'px';
    enemy11Y[i] = enemy11Obj.y;
    enemy11Move(i);
  }
}

const enemy11Move = function(i){
  let enemy11Counter = 0;
  let enemy11Switcher = Math.floor((Math.random() * 2) + 1);
  enemy11Switcher++;
  if (enemy11Switcher % 2 === 0){
    let moveenemy11Right = setInterval(function(){
      enemy11Counter++;
      enemy11Y[i] += 2;
      enemy11List[i].style.top = enemy11Y[i] + 'px';
      enemy11X[i] += 4;
      enemy11List[i].style.left = enemy11X[i] + 'px';
      if (enemy11Counter === 30){
        clearInterval(moveenemy11Right); //Stops in the inverval and starts the function again, it may switch sides depending on the switcher randomizer.
        enemy11Move(i);
      }
      if (enemy11X[i] > 600){
        enemy11List[i].remove();
        clearInterval(moveenemy11Right);
      }
      else if (enemy11Y[i] > 600){
        enemy11List[i].remove();
        clearInterval(moveenemy11Right);
      }
    }, 50);
  }
  else {
    let moveenemy11Left = setInterval(function(){
      enemy11Counter++;
      enemy11Y[i] += 2;
      enemy11List[i].style.top = enemy11Y[i] + 'px';
      enemy11X[i] -= 4;
      enemy11List[i].style.left = enemy11X[i] + 'px';
      if (enemy11Counter === 30){
        clearInterval(moveenemy11Left);
        enemy11Move(i);
      }
      if (enemy11X[i] < 0){
        enemy11List[i].remove();
        clearInterval(moveenemy11Left);
      }
      else if (enemy11Y[i] > 600){
        enemy11List[i].remove();
        clearInterval(moveenemy11Left);
      }
    }, 50);
  }
}


////////////////////////////////////  enemy12    ////////////////////////////////

let enemy12List = [];
let enemy12X = [];
let enemy12Y = [];

let enemy12InGameCounter = 0;
const createenemy12 = function(){
  enemy12InGameCounter++;
  for (let i = enemy12InGameCounter; i < (enemy12InGameCounter + 1); i++){
    enemy12List[i] = document.createElement('div');
    enemy12List[i].setAttribute('class', 'enemy12');
    spaceHolder.appendChild(enemy12List[i]);
    enemy12X[i] = enemy1SpawnPoints[Math.floor(Math.random() * 5) + 1];
    enemy12List[i].style.Left = enemy12X[i] + 'px';
    enemy12Y[i] = enemy12Obj.y;
    enemy12Move(i);
  }
}


let enemy12Move = function(i){
  let enemy12Switcher = Math.floor((Math.random() * 3) + 1);
  if (enemy12Switcher === 3){
    let moveenemy12Right = setInterval(function(){
      enemy12Y[i] += 5;
      enemy12List[i].style.top = enemy12Y[i] + 'px';
      enemy12X[i] += 3;
      enemy12List[i].style.left = enemy12X[i] + 'px';
      enemy12LaserCollision(i);
      enemy12Collision(i);
      if (enemy12X[i] > 550){
        enemy12List[i].remove();
        clearInterval(moveenemy12Right);
      }
      else if (enemy12Y[i]  > 600){
        enemy12List[i].remove();
        clearInterval(moveenemy12Right);
      }
    }, 50)
  }
  if (enemy12Switcher === 2){
    let moveenemy12Left = setInterval(function(){
      enemy12Y[i] += 5;
      enemy12List[i].style.top = enemy12Y[i] + 'px';
      enemy12X[i] -= 3;
      enemy12List[i].style.left = enemy12X[i] + 'px';
      enemy12LaserCollision(i);
      enemy12Collision(i);
      if (enemy12X[i] < 0){
        enemy12List[i].remove();
        clearInterval(moveenemy12Left);
      }
      else if (enemy12Y[i]  > 600){
        enemy12List[i].remove();
        clearInterval(moveenemy12Left);
      }
    }, 50)
  }
  else {
    let moveenemy12Down = setInterval(function(){
      enemy12Y[i] += 5;
      enemy12List[i].style.top = enemy12Y[i] + 'px';
      enemy12X[i] += 0;
      enemy12List[i].style.left = enemy12X[i] + 'px';
      enemy12LaserCollision(i);
      enemy12Collision(i);
      if (enemy12Y[i]  > 600){
        enemy12List[i].remove();
        clearInterval(moveenemy12Down);
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
      createenemy1Mini();
    }
    else if (num === 2){
      createenemy11();
    }
    else {
      createenemy12();
    }
  }, 1000)
};

*/



/////////////////////////////////////    Collision       ///////////////////////////////////////////
/*

let enemy1MiniCollision = function(i){
    if (playerObj.x < enemy1MiniX[i] + 25 &&
     playerObj.x + 40 > enemy1MiniX[i] &&
     playerObj.y < enemy1MiniY[i] + 25 &&
     40 + playerObj.y > enemy1MiniY[i]) {
    enemy1MiniList[i].style.backgroundColor = 'white';
    enemy1MiniList[i].remove();
    }
};


let enemy12Collision = function(i){

    if (playerObj.x < enemy12X[i] + enemy12Obj.width &&
   playerObj.x + playerObj.width > enemy12X[i] &&
   playerObj.y < enemy12Y[i] + enemy12Obj.height &&
   playerObj.height + playerObj.y > enemy12Y[i]) {
    enemy12List[i].style.backgroundColor = 'white';
    console.log('collission !!!!!!!!');
    console.log(`enemy12 X is ${enemy12X[i]}`)
    console.log(`enemy12 Y is ${enemy12Y[i]}`)
    enemy12List[i].remove();
    playerLives.remove();
    }
};

let enemy12LaserCollision = function(i){
   if (laserObj.x < enemy12X[i] + enemy12Obj.width &&
   laserObj.x + laserObj.width > enemy12X[i] &&
   laserObj.y < enemy12Y[i] + enemy12Obj.height &&
   laserObj.height + laserObj.y > enemy12Y[i]) {
    enemy12List[i].style.backgroundColor = 'white';
    console.log('laser collission!');
    console.log(`enemy12 X is ${enemy12X[i]}`)
    console.log(`enemy12 Y is ${enemy12Y[i]}`)
    enemy12List[i].remove();
    }
};
*/

/////////////////////////////////// Player and Laser and Boundary ///////////////////////////////
/*
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
/*
//MOVING THE PLAYER
window.addEventListener('keydown', function(event){
/*
//LASERS PEW PEW... if numberOfLaser equals one then it won't shoot.
if (event.keyCode === 32 && numberOfLasers === 0){
  lasers();
}

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
*/

///////////////////////////////// Testing ///////////////////////////////
box = document.createElement('div');

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

boxObj = {
  who: box,
  x: 325,
  y: 500,
  height: 40,
  width: 40
}

box.setAttribute('class', 'box');
spaceHolder.appendChild(box);
box.style.left = '325px';
box.style.top = '500px';

window.addEventListener('keydown', function(event){
  //MOVING RIGHT
  if (event.keyCode === 39){
    boxObj.x += 20;
    box.style.left = boxObj.x + 'px';
  }
  //MOVING LEFT
  if (event.keyCode === 37){
    boxObj.x -= 20;
    box.style.left = boxObj.x + 'px';
  }
  //MOVING Down
  if (event.keyCode === 40){
    boxObj.y += 20;
    box.style.top = boxObj.y + 'px';
  }
  //MOVING Up
  if (event.keyCode === 38){
    boxObj.y -= 20;
    box.style.top = boxObj.y + 'px';
  }
  boundaries(boxObj)
});

const collision = function(playerobj, enemyobj){
  if (playerobj.x < enemyobj.x + enemyobj.width &&
   playerobj.x + playerobj.width > enemyobj.x &&
   playerobj.y < enemyobj.y + enemyobj.height &&
   playerobj.height + playerobj.y > enemyobj.y) {
    console.log(`box X is ${playerobj.x} box Y is ${playerobj.y}`)
    console.log(`enemy1 X is ${enemyobj.x} enemy1 Y is ${enemyobj.y}`)
    enemyobj.who.style.backgroundColor = 'white';
    // collision detected!
  }
}

///////////////////////////////// Enemy 1

enemy1Obj = {
  x: 100,
  y: 0,
  height: 40,
  width: 40
}

const createEnemy1 = function(){
  enemy1 = document.createElement('div');
  enemy1Obj.who = enemy1;
  enemy1.setAttribute('class', 'enemy1');
  spaceHolder.appendChild(enemy1);
  enemy1.style.left = enemy1Obj.x + 'px';
  enemy1.style.top = enemy1Obj.y + 'px';
  moveenemy1();
};

const moveenemy1 = function(){
  let moveEnemy1Down = setInterval(function(){
    enemy1Obj.y += 5;
    enemy1.style.top = enemy1Obj.y + 'px';
    collision(boxObj,enemy1Obj);
    if (enemy1Obj.y > 600){
      enemy1.remove();
      clearInterval(moveEnemy1Down);
      enemy1Obj.y = 0;
    }
  },50)
}

/////////////////////// Enemy 2
enemy2Obj = {
  x: 200,
  y: 0,
  height: 40,
  width: 40
}

const createEnemy2 = function(){
  enemy2 = document.createElement('div');
  enemy2Obj.who = enemy2;
  enemy2.setAttribute('class', 'enemy2');
  spaceHolder.appendChild(enemy2);
  enemy2.style.left = enemy2Obj.x + 'px';
  enemy2.style.top = enemy2Obj.y + 'px';
  moveEnemy2();
};

const moveEnemy2 = function(){
  let moveenemy2Down = setInterval(function(){
    enemy2Obj.y += 5;
    enemy2.style.top = enemy2Obj.y + 'px';
    collision(boxObj,enemy2Obj);
    if (enemy2Obj.y > 600){
      enemy2.remove();
      clearInterval(moveEnemy2Down);
      enemy2Obj.y = 0;
    }
  },50)
}


///////////////////////////// Enemy 3

enemy3Obj = {
  x: 250,
  y: 0,
  height: 40,
  width: 40
}

const createEnemy3 = function(){
  enemy3 = document.createElement('div');
  enemy3Obj.who = enemy3;
  enemy3.setAttribute('class', 'enemy3');
  spaceHolder.appendChild(enemy3);
  enemy3.style.left = enemy3Obj.x + 'px';
  enemy3.style.top = enemy3Obj.y + 'px';
  moveEnemy3();
};

const moveEnemy3 = function(){
  let moveEnemy3Down = setInterval(function(){
    enemy3Obj.y += 5;
    enemy3.style.top = enemy3Obj.y + 'px';
    collision(boxObj,enemy3Obj);
    if (enemy3Obj.y > 600){
      enemy3.remove();
      clearInterval(moveEnemy3Down);
      enemy3Obj.y = 0;
    }
  },50)
}

///////////////////////////////////////// Enemy 4


enemy4Obj = {
  x: 300,
  y: 0,
  height: 40,
  width: 40
}

const createEnemy4 = function(){
  enemy4 = document.createElement('div');
  enemy4Obj.who = enemy4;
  enemy4.setAttribute('class', 'enemy4');
  spaceHolder.appendChild(enemy4);
  enemy4.style.left = enemy4Obj.x + 'px';
  enemy4.style.top = enemy4Obj.y + 'px';
  moveEnemy4();
};

const moveEnemy4 = function(){
  let moveEnemy4Down = setInterval(function(){
    enemy4Obj.y += 5;
    enemy4.style.top = enemy4Obj.y + 'px';
    collision(boxObj,enemy4Obj);
    if (enemy4Obj.y > 600){
      enemy4.remove();
      clearInterval(moveEnemy4Down);
      enemy4Obj.y = 0;
    }
  },50)
}


//////////////////////////////////////////// Enemy 5

enemy5Obj = {
  x: 350,
  y: 0,
  height: 40,
  width: 40
}

const createEnemy5 = function(){
  enemy5 = document.createElement('div');
  enemy5Obj.who = enemy5;
  enemy5.setAttribute('class', 'enemy5');
  spaceHolder.appendChild(enemy5);
  enemy5.style.left = enemy5Obj.x + 'px';
  enemy5.style.top = enemy5Obj.y + 'px';
  moveEnemy5();
};

const moveEnemy5 = function(){
  let moveEnemy5Down = setInterval(function(){
    enemy5Obj.y += 5;
    enemy5.style.top = enemy5Obj.y + 'px';
    collision(boxObj,enemy5Obj);
    if (enemy5Obj.y > 600){
      enemy5.remove();
      clearInterval(moveEnemy5Down);
      enemy5Obj.y = 0;
    }
  },50)
}

////////////////////////////////////////////////// Enemy 6

enemy6Obj = {
  x: 400,
  y: 0,
  height: 40,
  width: 40
}

const createEnemy6 = function(){
  enemy6 = document.createElement('div');
  enemy6Obj.who = enemy6;
  enemy6.setAttribute('class', 'enemy6');
  spaceHolder.appendChild(enemy6);
  enemy6.style.left = enemy6Obj.x + 'px';
  enemy6.style.top = enemy6Obj.y + 'px';
  moveEnemy6();
};

const moveEnemy6 = function(){
  let moveEnemy6Down = setInterval(function(){
    enemy6Obj.y += 5;
    enemy6.style.top = enemy6Obj.y + 'px';
    collision(boxObj,enemy6Obj);
    if (enemy6Obj.y > 600){
      enemy6.remove();
      clearInterval(moveEnemy6Down);
      enemy6Obj.y = 0;
    }
  },50)
}


////////////////////////////////////////////////////// Enemy 7

enemy7Obj = {
  x: 470,
  y: 0,
  height: 70,
  width: 30
}

const createEnemy7 = function(){
  enemy7 = document.createElement('div');
  enemy7Obj.who = enemy7;
  enemy7.setAttribute('class', 'enemy7');
  spaceHolder.appendChild(enemy7);
  enemy7.style.left = enemy7Obj.x + 'px';
  enemy7.style.top = enemy7Obj.y + 'px';
  moveEnemy7();
};

const moveEnemy7 = function(){
  let moveEnemy7Down = setInterval(function(){
    enemy7Obj.y += 5;
    enemy7.style.top = enemy7Obj.y + 'px';
    collision(boxObj,enemy7Obj);
    if (enemy7Obj.y > 600){
      enemy7.remove();
      clearInterval(moveEnemy7Down);
      enemy7Obj.y = 0;
    }
  },50)
}

////////////////////////////////////////////////////// Enemy 8


enemy8Obj = {
  x: 540,
  y: 0,
  height: 50,
  width: 60
}

const createEnemy8 = function(){
  enemy8 = document.createElement('div');
  enemy8Obj.who = enemy8;
  enemy8.setAttribute('class', 'enemy8');
  spaceHolder.appendChild(enemy8);
  enemy8.style.left = enemy8Obj.x + 'px';
  enemy8.style.top = enemy8Obj.y + 'px';
  moveEnemy8();
};

const moveEnemy8 = function(){
  let moveEnemy8Down = setInterval(function(){
    enemy8Obj.y += 5;
    enemy8.style.top = enemy8Obj.y + 'px';
    collision(boxObj,enemy8Obj);
    if (enemy8Obj.y > 600){
      enemy8.remove();
      clearInterval(moveEnemy8Down);
      enemy8Obj.y = 0;
    }
  },50)
}

start.addEventListener('click', createEnemy7);

