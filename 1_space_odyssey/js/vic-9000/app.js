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

//bot
var botIsAlive = true;
var botName = "Bot";
var botHasJetPack = true;
var suitColor = "black";
var eyes = 2;
var eyeColor = "green";
var hairColor = "reddish brown";
var legs = 2;
var arms = 2;
var hands = 2;
var ears = 2;
var canWalk = true;
var canRun = true;
var canFly = false;
var hasWeapon = false;
var isInGoodMood = undefined;

//main character
var mainCharName = "Victoria";
var mainCharHasJetPack = true;
var mainCharHasWeapon = true;
var mainCharIsAlive = true;
var mainCharThinking = "YOU'RE THINKING:" + "\n";

//other
var dotDotDot = "......";



//STORY BEGINS
console.log("-------------------------------------\n------------SPACE ODYSSEY------------\n-------------------------------------");



//CHAPTER 1: BOT
console.log(
  "\n" +
  "\n" +
  "\n" +
  "CHAPTER 1: BOT::::::" +
  "\n" +
  "\n" +
  "\n"
);

console.log("The year is 2020, and human built robots have gone rogue, and is killing everyone and everything on Earth. You somehow managed to steal a spaceship. You mashed a few buttons, and it started flying while the robots were attacking the ship. You're now somewhere in the Universe, and the ship is on fire.\nSoon however, you realize you're staring at a humanoid robot.\nYou look at the robot intensely. You can see it says \'Maintenance Robot\' on it's shirt".toUpperCase());

console.error(mainCharThinking + "\"The robot is probably going to kill me... But the ship is on fire... I don't know anything about spaceships, and if no one fixes it I'm going to die anyway...\"");

console.log("You stand still for a second, draw your weapon, which you have never used before, and point it at the robot while you press button that says \'Boot Robot\' while you look at the monitor beside it.".toUpperCase());

console.error(
  "\n" +
  ".-.-. Booting .-.-." + "\n" +
  "\n" +
  "Bot is alive:   " + botIsAlive + dotDotDot + "\n" +
  "Bot name is:   " + botName + dotDotDot + "\n" +
  "Bot has jetpack:   " + botHasJetPack + dotDotDot + "\n" +
  "Bot's suit color is:   " + suitColor + dotDotDot + "\n" +
  "Bot has how many eyes:   " + eyes + dotDotDot + "\n" +
  "Bot's eye color is:   " + eyeColor + dotDotDot + "\n" +
  "Bot's hair color is:   " + hairColor + dotDotDot + "\n" +
  "Bot has how many legs:   " + legs + dotDotDot + "\n" +
  "Bot has how many arms:   " + arms + dotDotDot + "\n" +
  "Bot has how many hands:   " + hands + dotDotDot + "\n" +
  "Bot has how many ears:   " + ears + dotDotDot + "\n" +
  "Bot can walk:   " + canWalk + dotDotDot + "\n" +
  "Bot can run:   " + canRun + dotDotDot + "\n" +
  "Bot can fly:   " + canFly + dotDotDot + "\n" +
  "Bot has weapon:   " + hasWeapon + dotDotDot + "\n" +
  "Bot is in good mood:   " + isInGoodMood + dotDotDot + "\n" +
  "\n"
);



//CHAPTER 2: BROKEN SATELLITE
/*
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid
       cannot go outside, console log the correct log based on that condition.
*/
console.log(
  "\n" +
  "\n" +
  "\n" +
  "CHAPTER 2: BROKEN SATELLITE" +
  "\n" +
  "\n" +
  "\n"
);

console.log("You still aim at the robot as wakes up. It makes some weird noises as it starts moving around. It does not look at you. It walkes up to what looks like an exit, and it opens the door. You panic.".toUpperCase());

console.error(mainCharThinking + "\"WHAT THE HELL? DON'T OPEN THAT!!!\"");

console.log("You keep panicking realizing that the robot is opening the door to outside, the Universe. You don't have a spacesuit and cannot breathe in space. The robot does not aknowledge you however, and proceeds opening the door. You throw away your weapon, and try to stop the robot by grabbing its arms, but it's too strong. The robot manages to open the door and proceeds to go outside. You hold your breath".toUpperCase());

console.error(mainCharThinking + "\"Fuck!\"");

console.log("While the robot is outside the spaceship doing who knows what, you try to look for something to help. You spot a oxygen mask on the wall, grab it and put it on. You wondering if there is an oxygen tank near the fire?".toUpperCase());

console.error(mainCharThinking + "\"Probably... Well, fuck me...\"");

console.log("You stand there doing nothing. \n".toUpperCase() + dotDotDot + "\n" + dotDotDot + "\n" + dotDotDot + "\nYou go back to look at the monitor that was next to the robot. It says: \n".toUpperCase());

if (botHasJetPack === true) {
  console.error(
    "\n" +
    "\nBot's jetpack is at 100% capacity.\n" +
    "Bot's doing repair on the spaceship.\n" +
    "Please stand by.\n" +
    "\n"
  );
} else {
  console.error(
    "Bot's jetpack is at 0% capacity.\n" +
    "Bot's in need of repair."
  );
}

console.error(mainCharThinking + "\"Well, I'm not complaining...\"");
console.log("You just realized you don't have your weapon anymore. You panic again, but find it on the floor. You hold your breath for a second, and feel a little safer. \n The monitor starts blasting a siren, and it says:".toUpperCase());

console.error("- METEOR SHOWER - METEOR SHOWER - METEOR SHOWER - METEOR SHOWER - METEOR SHOWER - METEOR SHOWER - METEOR SHOWER - METEOR SHOWER - METEOR SHOWER - METEOR SHOWER - METEOR SHOWER - METEOR SHOWER -");

console.log("And you panic again. You start sprinting for the exit not caring what you do. As you are about to stick your head out the door, you see the robot fending off the meteor shower outside. Then you realize you'll die if you go dance in the meteor shower. You go inside again and look at the monitor again. The meteor shower is over, but it says the communication satellite is at 10% capacity and needs repairing. Of course you don't trust the robot to fix it, because it'll probably call it's robot friends, so you decide to fix it yourself, even though you don't know what you're doing.".toUpperCase());



/*
 uncomment these console logs and write your if else statement and use them to console log out the correct statement
 console.log("JetPack is enabled!!! off I go outside to fix the satellite");
 console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");
 */

/*
 3. METEOR SHOWER::::::
    On your way to Jupiter you encounter a massive meteor shower that could damage the ship, you need to redirect the ship to a new safe location.
    a) Using a for loop iterate through the responses array and choose the appropriate response to get out of danger.
      create an if condition in your loop to print only 1 response using a comparison operator.
*/
console.log(
  "\u{1F327} METEOR SHOWER::::::"
);

var responses = [
  "Call basecamp and ask for assistance, but they are far away",
  "Do nothing, just push through",
  "initiate core thrusters, punch 180degrees into dash-nav and warp away from danger",
  "ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid"
];

// write your code here, use the console log beneath
// console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");

/*
 4. ALIENS SPACE CRAFT ENCROACHING::::::
    Alien craft approaches its an enemy for sure...you need to shoot it down!!
    a) convert the pseudoscope to real code
       create the required variables below and fill in the correct values and dataTypes to make
       the if statements pass so that photonLaser fires pew pew pew.
*/
console.log(
  "\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::"
);

// a.
var ___;
var ___;
var ___;
var ___;

/*
  If its an enemyCraft && photonLaser && photonLaserEnabled
      IF bullets is greater than or equal to 100
          shoot 100 photon-lazers by printing this log 100 times:
          console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!"); (use a loop)
        ELSE
          console.log("\u{1F9E8} DEAD \u{1F9E8} ");
*/
