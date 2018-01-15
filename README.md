# Space-Shooter Proposal
GA Project
 
Space Shooter 
Its a game where you will be moving your character left and right (maybe up and down if it i can get it work) and pressing space button to shoot projectiles.  These projectiles should destroy the few enemies that will be on screen and hopefully they move as well. The winning condition is when you make through all the levels. Going to aim for 5 levels. Each level will have more enemies. At the end there will be a scoreboard. You get points for each enemy shot down. 

Initial thoughts on game structure
I have a few but big hurdles to overcome. 
The first concern is getting detection collision to work - when the enemies crash in to the player and when the player projectiles hit the enemies.

Concern two is getting the enemies to act the way i want them to. Appear and leave the screen smoothly. Move around horizontally while continuing to move down the screen towards the player and eventually off the screen. They can never bump into eachother.

Concern 3 is getting the projectiles to act the way i want them to. They are supposed to leave from the player and go vertically up across the whole play area. The projectiles should disappear when they hit an enemy. You shouldnt be able to spam shoot projectiles either.

I would like to include some powerups. Like scoreboard multiplier or upgrades to you the player or projectile upgrade but that would be a bonus if i get that far.

Phases of Completion

- First i will work on the actual gameplay since that is my biggest concern. So first getting the player character to move how i want it to move (or close enough) since there is no game if that doesnt work. 

- Next will be working on the enemies movements.
- And finally the detection between the enemies and player.
- Player projectiles and detection.
- Once those thing are working i will work on the landing page and transitioning to the game page. 
- And finally transfering the player score to the final page which is a leaderboard.

Features/Improvements I would like to implement: The first thing I would like to improve is the actual code since I repeated myself too much. I also would like to let each player enter their initials and save their score to a leaderboard, which would be updated and displayed after the player wins or loses the game. There is also a bug where the player sometimes takes damage when shooting, and this is what made me decide to create the items the player can collect by flying to them. There's a heart the player can get that will refill the player's shield. In other words, I turned the bug into a feature!

