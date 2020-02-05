var isAlive = true;
var name = "Line-9000";
var hasJetPack = true;
var suitColor = "neongreen";
var eyes = true;
var eyeColor = "blue";
var hairColor = "blonde";
var legs = 2;
var arms = 2;
var hands = 2;
var ears = 2;
var canWalk = true;
var canRun = false;
var canFly = true;
var hasWeapon = true;
var isInGoodMood = true;



/*
 2. BROKEN SATELLITE::::::
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid
       cannot go outside, console log the correct log based on that condition.
*/

if (hasJetPack) {
    console.log ("Jetpack is on")
} else { console.log ("Jetpack is not on, you should stay inside")
}

/*
 uncomment these console logs and write your if else statement and use them to console log out the correct statement

 console.log("JetPack is enabled!!! off I go outside to fix the satellite");
 console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");

 */

console.log(".-.-. Booting .-.-.");
console.log(name, isAlive, hasJetPack, eyes, eyeColor, hairColor, legs, arms, hands, ears, canWalk, canFly, hasWeapon);

  /*
    9. REFACTOR Arrow functions
    Level 1:::::::::
    Go through your application and convert all your functions into Arrow functions.
    If you only have one function, please make a few more it is possible to have one function per feature.

    Level 2:::::::::
    Create a few methods on your droid object that will allow you to update your object properties like isAlive, eyeColors etc.
  */
