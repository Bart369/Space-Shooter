console.log('Game JS is working!')
let border = document.querySelector('.border');
let playerLives = document.querySelector('.playerLives')
let start = document.querySelector('.start');
let enemy1Container = document.querySelector('.enemy1Container');
let spaceHolder = document.querySelector('.spaceHolder');
let stop = document.querySelector('.stop');
let laser = document.querySelector('.laser');
let lives = document.querySelector('.livesContainer')
let points = document.querySelector('.points');
let box = document.createElement('div');



box.setAttribute('class', 'box');
spaceHolder.appendChild(box);
box.style.left = '325px';
box.style.top = '500px';

const itemXSpawn = [105, 165, 230, 325, 405, 385, 525, 585, 265];
let scorePoints = 0;

let boundaries = function(obj){
  if (obj.x < 52){
    obj.x = 52;
    obj.who.style.left = obj.x + 'px';
  }
  if (obj.y < 100){
    obj.y = 100;
    obj.who.style.top = obj.y + 'px';
  }
  if (obj.x + obj.width > 652){
    obj.x = 652 - obj.width;
    obj.who.style.left = obj.x + 'px';
  }
  if (obj.y + obj.height > 645){
    obj.y = 645 - obj.height;
    obj.who.style.top = obj.y + 'px';
  }
};

///////////////////////////////////// Objects //////////////////////////////

let boxObj = {
  who: box,
  x: 325,
  y: 500,
  height: 40,
  width: 40
}

let enemy1Obj = {
  num: 1,
  x: 100,
  y: 0,
  height: 40,
  width: 40,
  life: 0
}


let enemy2Obj = {
  num: 2,
  x: 200,
  y: 0,
  height: 40,
  width: 40,
  life: 0
}

let enemy3Obj = {
  num: 3,
  x: 250,
  y: 0,
  height: 40,
  width: 40,
  life: 0
}

let enemy4Obj = {
  num: 4,
  x: 300,
  y: 0,
  height: 40,
  width: 40,
  life: 0
}

let enemy5Obj = {
  num: 5,
  x: 350,
  y: 0,
  height: 40,
  width: 40,
  life: 0
}

let enemy6Obj = {
  num: 6,
  x: 400,
  y: 0,
  height: 40,
  width: 40,
  life: 0
}

let enemy7Obj = {
  num: 7,
  x: 470,
  y: 0,
  height: 70,
  width: 30,
  life: 0
}

let enemy8Obj = {
  num: 8,
  x: 540,
  y: 0,
  height: 50,
  width: 60,
  life: 0
}

let healthPackObj = {
  x: 300,
  y: 0,
  height: 30,
  width: 30,
  id: 'hp' //used in collisions
}

let pointItem1Obj = {
  x: 500,
  y: 0,
  height: 30,
  width: 30,
  id: 'points'
}


let pointItem2Obj = {
  x: 100,
  y: 0,
  height: 30,
  width: 30
}

let winObj = {
  x: 200,
  y: 0,
  height: 30,
  width: 30,
  id: 'win'
}








//////////////////////////////////////// Laser /////////////////////////////////////

let laserObj = {
    who: laser,
    height: 30,
    width: 3,
    x: boxObj.x + 18, //This is so it shoots from the middle of player taking in to account the width of the laser
    y: boxObj.y - 30 - boxObj.height // This is so it shoots above player height and you also have to minus the length of the laser
};
let numberOfLasers = 0; //This is to keep track of lasers. When we shoot this will go up to one. The player is not allowed to shoot when this is equal to one. w
                       //When the laser is gone this will go back to zero allowing the player to shoot again!
const lasers = function(){
  numberOfLasers++;
  laser = document.createElement('div');
  laser.setAttribute('class', 'laser');
  border.appendChild(laser);
  laser.style.left = laserObj.x + 'px';
  laser.style.top = laserObj.y + 40 + 'px';
  const laserShootUp = setInterval(function(){
    laserObj.y -= 30;
    laser.style.top = laserObj.y + 'px';
    laserCollision(laserObj,enemy1Obj);
    laserCollision(laserObj,enemy2Obj);
    laserCollision(laserObj,enemy3Obj);
    laserCollision(laserObj,enemy4Obj);
    laserCollision(laserObj,enemy5Obj);
    laserCollision(laserObj,enemy6Obj);
    laserCollision(laserObj,enemy7Obj);
    laserCollision(laserObj,enemy8Obj);
    if (laserObj.y < 80){ //When/if it gets to the border it is removed.
      laser.remove();
      numberOfLasers--;
      clearInterval(laserShootUp); //This stops increasing y.
      laserObj.x = boxObj.x + 18;  //Here we are reseting y and x so that next time we shoot it starts by the player
      laserObj.y = boxObj.y - 30 - boxObj.height;
    }
  }, 50)
};

window.addEventListener('keydown', function(event){

  if (event.keyCode === 32 && numberOfLasers === 0){
  lasers();
  }

  //MOVING RIGHT
  if (event.keyCode === 39){
    boxObj.x += 20;
    box.style.left = boxObj.x + 'px';
    laserObj.x += 20;
  }
  //MOVING LEFT
  if (event.keyCode === 37){
    boxObj.x -= 20;
    box.style.left = boxObj.x + 'px';
    laserObj.x -= 20;
  }
  //MOVING Down
  if (event.keyCode === 40){
    boxObj.y += 20;
    box.style.top = boxObj.y + 'px';
    laserObj.y += 20;
  }
  //MOVING Up
  if (event.keyCode === 38){
    boxObj.y -= 20;
    box.style.top = boxObj.y + 'px';
    laserObj.y -= 20;
  }
  boundaries(boxObj)
});

///////////////////////////////////Collision and Points /////////////////////////




const collision = function(boxObj, enemyobj){
  if (boxObj.x < enemyobj.x + enemyobj.width &&
   boxObj.x + boxObj.width > enemyobj.x &&
   boxObj.y < enemyobj.y + enemyobj.height &&
   boxObj.height + boxObj.y > enemyobj.y) {
    console.log(`box X is ${boxObj.x} box Y is ${boxObj.y}`)
    console.log(`Hit by ${enemyobj.num} X is ${enemyobj.x} ${enemyobj.num} Y is ${enemyobj.y}`)
    enemyobj.who.remove();
    if (lives.childNodes.length === 0){
      //alert('YOU LOSE!!');
    }
    else {
      console.log('You were hit!!')
      lives.removeChild(lives.childNodes[0]);
    }
  }
}

const laserCollision = function(laser, enemyobj){
  if (laserObj.x < enemyobj.x + enemyobj.width &&
   laserObj.x + laserObj.width > enemyobj.x &&
   laserObj.y < enemyobj.y + enemyobj.height &&
   laserObj.height + laserObj.y > enemyobj.y) {
    console.log('Laser HIT')
    scorePoints += 500;
    points.innerHTML = scorePoints
    enemyobj.who.remove();
    enemyobj.who.style.backgroundColor = 'green';
  }
}

const itemCollision = function(boxObj, item){
  if (boxObj.x < item.x + item.width &&
   boxObj.x + boxObj.width > item.x &&
   boxObj.y < item.y + item.height &&
   boxObj.height + boxObj.y > item.y){
    item.who.remove();
    if(item.who === 'points'){
      scorePoints += 5000;
      points.innerHTML = scorePoints;
    }
    else if (item.who === 'hp'){
      for(let i = 0; lives.childNodes.length < 23; i++){
        playerLives = document.createElement('div');
        playerLives.setAttribute('class', 'playerLives')
        lives.appendChild(playerLives);
      }

    }

  console.log('You got item!')
  }
}




///////////////////////////////// Enemy 1 ///////////////////////////////


const makeHealthPack = function(){
  //healthPackObj.exists = true;
  healthPack = document.createElement('div');
  healthPack.setAttribute('class', 'healthPack');
  spaceHolder.appendChild(healthPack);
  healthPackObj.who = healthPack;
  healthPackObj.x = itemXSpawn[Math.floor((Math.random() * 9) + 1)]
  healthPack.style.left = healthPackObj.x + 'px'
  healthPack.style.top = healthPackObj.y + 'px';
  moveHealthPack();
}
const moveHealthPack = function(){
  let healthPackMoveDown = setInterval(function(){
    healthPackObj.y += 3;
    healthPack.style.top = healthPackObj.y + 'px';
    itemCollision(boxObj, healthPackObj)
  }, 50)
}

const makeWinItem = function(){
  //healthPackObj.exists = true;
  winItem = document.createElement('div');
  winItem.setAttribute('class', 'winItem');
  spaceHolder.appendChild(winItem);
  winObj.who = winItem;
  winObj.x = itemXSpawn[Math.floor((Math.random() * 9) + 1)]
  winItem.style.left = winObj.x + 'px'
  winItem.style.top = winObj.y + 'px';
  moveWinItem();
}
const moveWinItem = function(){
  let moveWinMoveDown = setInterval(function(){
    winObj.y += 3;
    winItem.style.top = winObj.y + 'px';
    itemCollision(boxObj, winObj)
    if (winObj.y > 600){
      enemy1Obj.life = 0
      winItem.remove();
      clearInterval(moveWinMoveDown);
      winObj.y = 0;
    }
  }, 50)
}

const makePointItem1 = function(){
  //healthPackObj.exists = true;
  pointItem1 = document.createElement('div');
  pointItem1.setAttribute('class', 'pointItem1');
  spaceHolder.appendChild(pointItem1);
  pointItem1Obj.who = pointItem1;
  pointItem1Obj.x = itemXSpawn[Math.floor((Math.random() * 9) + 1)];
  pointItem1.style.left = pointItem1Obj.x + 'px'
  pointItem1.style.top = pointItem1Obj.y + 'px';
  movePointItem1();
}
const movePointItem1 = function(){
  let movePointItem1Down = setInterval(function(){
    pointItem1Obj.y += 3;
    pointItem1.style.top = pointItem1Obj.y + 'px';
    itemCollision(boxObj, pointItem1Obj)
    if (pointItem1Obj.y > 600){
      pointItem1.remove();
      clearInterval(movePointItem1Down);
      pointItem1Obj.y = 0;
    }
  }, 50)
}


const createEnemy1 = function(){
  enemy1Obj.life = 1
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
    enemy1Obj.y += 4;
    enemy1.style.top = enemy1Obj.y + 'px';
    collision(boxObj,enemy1Obj);
    if (enemy1Obj.y > 600){
      enemy1Obj.life = 0
      enemy1.remove();
      clearInterval(moveEnemy1Down);
      enemy1Obj.y = 0;
    }
  },50)
}

/////////////////////// Enemy 2

let enemy2Life = 0
const createEnemy2 = function(){
  enemy2Obj.life = 1;
  enemy2 = document.createElement('div');
  enemy2Obj.who = enemy2;
  enemy2.setAttribute('class', 'enemy2');
  spaceHolder.appendChild(enemy2);
  enemy2Life++
  enemy2.style.left = enemy2Obj.x + 'px';
  enemy2.style.top = enemy2Obj.y + 'px';
  moveEnemy2();
};

const moveEnemy2 = function(){
  let moveEnemy2Down = setInterval(function(){
    enemy2Obj.y += 5;
    enemy2.style.top = enemy2Obj.y + 'px';
    collision(boxObj,enemy2Obj);
    if (enemy2Obj.y > 600){
      enemy2Obj.life = 0;
      enemy2.remove();
      clearInterval(moveEnemy2Down);
      enemy2Obj.y = 0;
    }
  },50)
}


///////////////////////////// Enemy 3


const createEnemy3 = function(){
  enemy3Obj.life = 1
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
    enemy3Obj.y += 6;
    enemy3.style.top = enemy3Obj.y + 'px';
    collision(boxObj,enemy3Obj);
    if (enemy3Obj.y > 600){
      enemy3Obj.life = 0
      enemy3.remove();
      clearInterval(moveEnemy3Down);
      enemy3Obj.y = 0;
    }
  },50)
}

///////////////////////////////////////// Enemy 4


const createEnemy4 = function(){
  enemy4Obj.life = 1
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
    enemy4Obj.y += 7;
    enemy4.style.top = enemy4Obj.y + 'px';
    collision(boxObj,enemy4Obj);
    if (enemy4Obj.y > 600){
      enemy4Obj.life = 0
      enemy4.remove();
      clearInterval(moveEnemy4Down);
      enemy4Obj.y = 0;
    }
  },50)
}


//////////////////////////////////////////// Enemy 5


const createEnemy5 = function(){
  enemy5Obj.life = 1
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
    enemy5Obj.y += 7;
    enemy5.style.top = enemy5Obj.y + 'px';
    collision(boxObj,enemy5Obj);
    if (enemy5Obj.y > 600){
      enemy5Obj.life = 0
      enemy5.remove();
      clearInterval(moveEnemy5Down);
      enemy5Obj.y = 0;
    }
  },50)
}

////////////////////////////////////////////////// Enemy 6


const createEnemy6 = function(){
  enemy6Obj.life = 1
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
    enemy6Obj.y += 6;
    enemy6.style.top = enemy6Obj.y + 'px';
    collision(boxObj,enemy6Obj);
    if (enemy6Obj.y > 600){
      enemy6Obj.life = 0
      enemy6.remove();
      clearInterval(moveEnemy6Down);
      enemy6Obj.y = 0;
    }
  },50)
}


////////////////////////////////////////////////////// Enemy 7

const createEnemy7 = function(){
  enemy7Obj.life = 1
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
      enemy7Obj.life = 0
      enemy7.remove();
      clearInterval(moveEnemy7Down);
      enemy7Obj.y = 0;
    }
  },50)
}

////////////////////////////////////////////////////// Enemy 8


const createEnemy8 = function(){
  enemy8Obj.life = 1
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
    enemy8Obj.y += 4;
    enemy8.style.top = enemy8Obj.y + 'px';
    collision(boxObj,enemy8Obj);
    if (enemy8Obj.y > 600){
      enemy8Obj.life = 0;
      enemy8.remove();
      clearInterval(moveEnemy8Down);
      enemy8Obj.y = 0;
    }
  },50)
}



const stopEnemies = function(){
  clearInterval(callingEnemies);
};

const callEnemies = function(){
  let callingEnemies = setInterval(function(){
    const stopEnemies = function(){
      clearInterval(callingEnemies);
    };
    const num = Math.floor((Math.random() * 8) + 1);
    if (num === 1 && enemy1Obj.life === 0){
      createEnemy1();
    }
    else if (num === 2 && enemy2Obj.life === 0){
      createEnemy2();
    }
    else if (num === 3 && enemy3Obj.life === 0) {
      createEnemy3();
    }
    else if (num === 4 && enemy4Obj.life === 0){
      createEnemy4();
    }
    else if (num === 5 && enemy5Obj.life === 0) {
      createEnemy5();
    }
    else if (num === 6 && enemy6Obj.life === 0){
      createEnemy6();
    }
    else if (num === 7 && enemy7Obj.life === 0){
      createEnemy7();
    }
    else if (num === 8 && enemy8Obj.life === 0){
      createEnemy8();
    }
    stop.addEventListener('click', stopEnemies);
  }, 500)
};
/*
const moveItems = function(){
  let movingItems = setInterval(function(){
    const stopEnemies = function(){
      clearInterval(callingEnemies);
    }

  }





}

*/
//const num = Math.floor((Math.random() * 4) + 1);
//if (num === 1 && healthPackExists === false)

start.addEventListener('click', makeHealthPack);






