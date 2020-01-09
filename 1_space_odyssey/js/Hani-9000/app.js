var isAlive = true;
var name = "Hani-9000";
var hasJetPack = false;
var suitColor = "grey";
var eyes = 2;
var eyeColor = "brown";
var hairColor = "black";
var legs = 2;
var arms = 2;
var hands = 2;
var ears = 2;
var canWalk = true;
var canRun = true;
var canFly = false;
var hasWeapon = false;
var isInGoodMood = false;

console.log(".-.-. Booting .-.-.");
console.log(name, isAlive, hasJetPack, eyes, eyeColor, hairColor, legs, arms, hands, ears, canWalk, canFly, hasWeapon);

if(hasJetPack === true) {
    console.log("The Jetpack is enabled, off you go");
    } else {
    console.log("the jetpack is disabled, please enable it before you go out");
}