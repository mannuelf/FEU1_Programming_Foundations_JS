var isAlive;
var name = "Mannuel-9000";
var hasJetPack = true;
var suitColor = blue;
var eyes = 5;
var eyeColor = red;
var hairColor = black;
var legs = 4;
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

if (hasJetPack) {
    console.log("JetPack is enabled!!! off I go outside to fix the satellite");
} else {
    console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");
}