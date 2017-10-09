console.log('Game JS is working!')
let border = document.querySelector('.border');
let player = document.querySelector('.player');
let enemy1 = document.querySelector('.enemy1');
let enemy2 = document.querySelector('.enemy2');
let enemy3 = document.querySelector('.enemy3');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let laser = document.querySelector('.laser');

let playerObj = {
  who: player,
  x: 275,
  y: 400,
  height: 40,
  width: 40
}

let enemy1Obj = {
  who: enemy1,
  x: 500,
  y: 0,
  height: 25,
  width: 25,
//  movement: enemy1Move()
}

let enemy2Obj = {
  who: enemy2,
  x: 300,
  y: 0,
  height: 40,
  width: 40
  //movement: enemy2Move()
}



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


//Player Moves



let enemies = [enemy1Obj, enemy2Obj];
/*


  }
};
*/

function collision(){
  if (playerObj.x < enemy2Obj.x + enemy2Obj.width &&
   playerObj.x + playerObj.width > enemy2Obj.x &&
   playerObj.y < enemy2Obj.y + enemy2Obj.height &&
   playerObj.height + playerObj.y > enemy2Obj.y) {
    console.log('collission holy shittttttttt');
  }
    // collision detected!
};




start.addEventListener('click', enemy2Move);

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
    height: 20,
    width: 5,
    x: playerObj.x + 18,
    y: playerObj.y - 20 - playerObj.height
};


const lasers = function(){
  laser = document.createElement('div');
  laser.setAttribute('class', 'laser');
  border.appendChild(laser);
  laser.style.left = laserObj.x + 'px'; //This is so it shoots from the middle of player taking in to account the width of the laser
  laser.style.top = laserObj.y + 'px'; // This is so it shoots above player height and you also have to minus the length of the laser
  const laserShootUp = setInterval(function(){
    laserObj.y -= 8;
    laser.style.top = laserObj.y + 'px';
  }, 50)
  if (laser.style.top < -20){
    console.log('laser above');
    laser.remove();
  }
}


//MOVING THE PLAYER
window.addEventListener('keydown', function(event){
  console.log(event.keyCode);

//Lasers PEW PEW
if (event.keyCode === 32){
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
//boundaries(playerObj);

});



collision();

