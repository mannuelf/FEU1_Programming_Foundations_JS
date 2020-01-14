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
var name = "Henrik-9000";
var hasJetPack = true;
var suitColor = "white";
var eyes = true;
var eyeColor = "blue";
var hairColor = "blond";
var legs = 2;
var arms = 2;
var hands = 2;
var ears = 2;
var canWalk = true;
var canRun = true;
var canFly = true;
var hasWeapon = true;
var isInGoodMood = true;

console.log(".-.-. Booting .-.-.");
console.log(name, isAlive, hasJetPack, eyes, eyeColor, hairColor, legs, arms, hands, ears, canWalk, canFly, hasWeapon);



/*
 2. BROKEN SATELLITE::::::
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid
       cannot go outside, console log the correct log based on that condition.
*/

if (hasJetPack === true) {
    console.log("JetPack is enabled!!! off I go outside to fix the satellite");
} else {
    console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");
}
/*
 uncomment these console logs and write your if else statement and use them to console log out the correct statement

 console.log("JetPack is enabled!!! off I go outside to fix the satellite");
 console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");

 */



/*
 5. LUNAR LANDING:::::
    We got word of an extra terrestrial sighting on the moon... we have been tasked to land on the moon
    to investigate it, we have aboard a NASA lunar module https://en.wikipedia.org/wiki/Apollo_Lunar_Module
    This module will allow to land safely on the moon with the aid of the landing radar which takes inputs.

    Ensure the correct co-ordinates and approach speed are entered into the landing radar.
    It's all automated we just have to ensure that the correct values are input ie. not undefined.

    The lunar radar accepts approach speeds in increments of hundreds only, starting at 0 and maxing out at 700.

    You cannot edit the lunarRadar object directly you have to pass your values in via an interface called variables.

    tip: varName.keyName (this is how to extract a value from an object)
*/
console.log(
  "\u{1F311} LUNAR LANDING:::::"
);

// start coding here

var lunarRadar = {
  isEnabled: true,
  long: 200,
  lat: 400,
  approachSpeed: 300, // "ft per minute"
}
// Level 1 convert this psuedocode to functioning code.

/*
IF lunar radar is enabled && lat is defined and long is defined
    console.log("\u{1F91F} looking good " + name + " we are making our descent, now entering approach speed");
    IF approach speed is greater than or equal to 200ft per minute and approach speed is less than 299ft per minute
      console.log("\u{269B} well done " + name + " we have touched down safely. Lets get some samples and get heck outta here!");
    ELSE IF approach speed is greater than or equal to 300ft per minute
      console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 400ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 500ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 600ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is less than or equal to 100ft per minute
      console.log("\u{1F47D} hmmm need a bit more heat " + name + " lets increase pitch and we should have a smooth landing");
    ELSE
      console.log('Please enter an approach speed');
ELSE
  console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
*/

if (lunarRadar.isEnabled && lunarRadar.long && lunarRadar.lat) {
  console.log("\u{1F91F} looking good " + name + " we are making our descent, now entering approach speed")

  if ((lunarRadar.approachSpeed >= 200) && (lunarRadar.approachSpeed > 299)) {
    console.log("\u{269B} well done " + name + " we have touched down safely. Lets get some samples and get heck outta here!")
  }
  else if (lunarRadar.approachSpeed >= 300) {
    console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
  }

  else if (lunarRadar.approachSpeed >= 400) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  }

  else if (lunarRadar.approachSpeed >= 500) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  }

  else if (lunarRadar.approachSpeed >= 600) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  }
  else if (lunarRadar.approachSpeed <= 100) {
    console.log("\u{1F47D} hmmm need a bit more heat " + name + " lets increase pitch and we should have a smooth landing");
  }
      else {
        console.log('Please enter an approach speed')
    }
}
else {
  console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
  }





// Level 2 convert it to a switch statement.
if (lunarRadar.isEnabled && lunarRadar.long && lunarRadar.lat) {
  switch(true) {


  }

}
