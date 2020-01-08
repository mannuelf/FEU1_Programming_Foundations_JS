var isAlive = true;
var name = "farida-9000";
var hasJetPack = true;
var suitColor = "pink";
var eyes = 2;
var eyeColor = "green";
var hairColor = "red";
var legs = 2;
var arms = 2;
var hands = 2;
var ears = 2;
var canWalk = true;
var canRun = true;
var canFly = true;
var hasWeapon = true;
var isInGoodMood = false;

console.log(".-.-. Booting .-.-.");
console.log(name, isAlive, hasJetPack, eyes, eyeColor, hairColor, legs, arms, hands, ears, canWalk, canFly, hasWeapon);


/* 
 2. BROKEN SATELLITE::::::
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid 
       cannot go outside, console log the correct log based on that condition. 
*/

if (hasJetPack === true){    
    console.log("JetPack is enabled!!! off I go outside to fix the satellite");
}
else {
    console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");
}


