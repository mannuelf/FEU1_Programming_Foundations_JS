//1

var isAlive = true;
var name = "Trond-9000";
var hasJetPack = true;
var suitColor = "white";
var eyes = true;
var eyeColor = "blue";
var hairColor ="dark blonde";
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

//2

if (hasJetPack === true) {
    console.log("JetPack is enabled!!! off I go outside to fix the satellite");
}
else (hasJetPack === false); {
    console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");
}