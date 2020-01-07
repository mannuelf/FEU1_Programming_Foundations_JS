/*
____/\\\\\\\\\_________/\\\\\\\_______/\\\\\\\\\_________/\\\\\\\__________        
 __/\\\///////\\\_____/\\\/////\\\___/\\\///////\\\_____/\\\/////\\\________       
  _\///______\//\\\___/\\\____\//\\\_\///______\//\\\___/\\\____\//\\\_______      
   ___________/\\\/___\/\\\_____\/\\\___________/\\\/___\/\\\_____\/\\\_______     
    ________/\\\//_____\/\\\_____\/\\\________/\\\//_____\/\\\_____\/\\\__/\\\_    
     _____/\\\//________\/\\\_____\/\\\_____/\\\//________\/\\\_____\/\\\_\///__   
      ___/\\\/___________\//\\\____/\\\____/\\\/___________\//\\\____/\\\________  
       __/\\\\\\\\\\\\\\\__\///\\\\\\\/____/\\\\\\\\\\\\\\\__\///\\\\\\\/____/\\\_ 
        _\///////////////_____\///////_____\///////////////_____\///////_____\///__

_____/\\\\\\\\\____________________/\\\\\\\\\\\_____/\\\\\\\\\\\\\________/\\\\\\\\\____________/\\\\\\\\\___/\\\\\\\\\\\\\\\_                 
 ___/\\\\\\\\\\\\\________________/\\\/////////\\\__\/\\\/////////\\\____/\\\\\\\\\\\\\_______/\\\////////___\/\\\///////////__                
  __/\\\/////////\\\______________\//\\\______\///___\/\\\_______\/\\\___/\\\/////////\\\____/\\\/____________\/\\\_____________               
   _\/\\\_______\/\\\_______________\////\\\__________\/\\\\\\\\\\\\\/___\/\\\_______\/\\\___/\\\______________\/\\\\\\\\\\\_____              
    _\/\\\\\\\\\\\\\\\__________________\////\\\_______\/\\\/////////_____\/\\\\\\\\\\\\\\\__\/\\\______________\/\\\///////______             
     _\/\\\/////////\\\_____________________\////\\\____\/\\\______________\/\\\/////////\\\__\//\\\_____________\/\\\_____________            
      _\/\\\_______\/\\\______________/\\\______\//\\\___\/\\\______________\/\\\_______\/\\\___\///\\\___________\/\\\_____________           
       _\/\\\_______\/\\\_____________\///\\\\\\\\\\\/____\/\\\______________\/\\\_______\/\\\_____\////\\\\\\\\\__\/\\\\\\\\\\\\\\\_          
        _\///________\///________________\///////////______\///_______________\///________\///_________\/////////___\///////////////__         
_______/\\\\\________/\\\\\\\\\\\\______/\\\________/\\\______/\\\\\\\\\\\________/\\\\\\\\\\\_____/\\\\\\\\\\\\\\\___/\\\________/\\\_        
 _____/\\\///\\\_____\/\\\////////\\\___\///\\\____/\\\/_____/\\\/////////\\\____/\\\/////////\\\__\/\\\///////////___\///\\\____/\\\/__       
  ___/\\\/__\///\\\___\/\\\______\//\\\____\///\\\/\\\/______\//\\\______\///____\//\\\______\///___\/\\\________________\///\\\/\\\/____      
   __/\\\______\//\\\__\/\\\_______\/\\\______\///\\\/_________\////\\\____________\////\\\__________\/\\\\\\\\\\\__________\///\\\/______     
    _\/\\\_______\/\\\__\/\\\_______\/\\\________\/\\\_____________\////\\\____________\////\\\_______\/\\\///////_____________\/\\\_______    
     _\//\\\______/\\\___\/\\\_______\/\\\________\/\\\________________\////\\\____________\////\\\____\/\\\____________________\/\\\_______   
      __\///\\\__/\\\_____\/\\\_______/\\\_________\/\\\_________/\\\______\//\\\____/\\\______\//\\\___\/\\\____________________\/\\\_______  
       ____\///\\\\\/______\/\\\\\\\\\\\\/__________\/\\\________\///\\\\\\\\\\\/____\///\\\\\\\\\\\/____\/\\\\\\\\\\\\\\\________\/\\\_______ 
        ______\/////________\////////////____________\///___________\///////////________\///////////______\///////////////_________\///________
  
      ============================================================================================
        TIMELINE of EVENTS
      ============================================================================================
       2001: A Space Odyssey spans from the dawn of man to its title year. 
             Stone Age Earth: 
             In the presence of a mysterious black obelisk, pre-humans discover the use 
             of tools -- and weapons -- violently taking first steps toward intelligence. 
             
        1999: On Earth's moon astronauts uncover another mysterious black obelisk. 
        
        2001: Between Earth and Jupiter, the spacecraft's intelligent computer makes a mistake that 
              kills most of the human crew -- then continues to kill to hide its error. 
              
        2020: The sole survivor of the journey to Jupiter ascends to the next level of humanity.
 */


/*
  You are the sole survivor who will make the journey to Jupiter.

  But before you can leave you must build an autonomous humanoid robot to help you on your mission.

  This humanoid will be used to perform dangerous and mission critical tasks on your journey to Jupiter.
  - space walks to repair the spaceship
  - fight off alien creatures
  -  

  The humanoid is your doppelgänger, a sentient being that will help you save man from extinction by keeping you alive.

  Using JavaScript build the software that will allow us to describe and programme the humanoid to do our bidding.
  */

/* ______   __  __   ______  ______   
        _..._
      .'     '.      _
     /    .-""-\   _/ \
   .-|   /:.   |  |   |
   |  \  |:.   /.-'-./
   | .-'-;:__.'    =/
   .'=  *=|Noroff_.='
  /   _.  |    ;
 ;-.-'|    \   |
/   | \    _\  _\
\__/'._;.  ==' ==\
         \    \   |
         /    /   /
         /-._/-._/
  ...    \   `\  \
          `-._/._/


 1. CREATE DROID::::::
    Below are all the variables needed to initialize an android into consciousness in its default state.
    a. assign the correct values to the variables below, 
    b. ensure to choose the correct values and datatypes
    c. the droid should be built in your likeness (a human, with human features, 2 arms, legs etc)
*/
var isAlive = true;
var name = "tina-9000";
var hasJetPack = true;
var suitColor = "white";
var eyes = 4;
var eyeColor = "white";
var hairColor = "grey";
var legs = 2;
var arms = 4;
var hands = 4;
var ears = 2;
var canWalk = true;
var canRun = true;
var canFly = false;
var hasWeapon = true;
var isInGoodMood = false;

console.log(".-.-. Booting .-.-.");
console.log(name, isAlive, hasJetPack, suitColor, eyes, eyeColor, hairColor, legs, arms, hands, ears, canWalk, canRun, canFly, hasWeapon, isInGoodMood);



/* 
 2. BROKEN SATELLITE::::::
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid 
       cannot go outside, console log the correct log based on that condition. 
*/
var cangooutside = true;
console.log(cangooutside);
/* 
 uncomment these console logs and write your if else statement and use them to console log out the correct statement
 console.log("JetPack is enabled!!! off I go outside to fix the satellite");
 console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");
 */
if (hasJetPack){
  console.log("JetPack is enabled!!! off I go outside to fix the satellite");
}
else if (hasJetPack){
  console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");
}