1. /*CREATE DROID::::::
    Below are all the variables needed to initialize an android into consciousness in its default state.
    a. assign the correct values to the variables below, 
    b. ensure to choose the correct values and datatypes
    c. the droid should be built in your likeness (a human, with human features, 2 arms, legs etc)
*/

var isAlive = true;
var name = "Hoff-9000";
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

var voiceover = "David Hasslehoff";
var bodytype = "car";
var evilAI = "EvilArcade";
var evilAIBodyType = "Packman machine";




/* 
 2. BROKEN SATELLITE::::::
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid 
       cannot go outside, console log the correct log based on that condition. 
*/

if (hasJetPack){
    console.log("Jetpack is on, go on outside")
}
else{
    console.log("Jetpack is not on, you should stay inside")
}

console.log(".-.-. Booting .-.-.");
console.log(name, isAlive, hasJetPack, eyes, eyeColor, hairColor, legs, arms, hands, ears, canWalk, canFly, hasWeapon);