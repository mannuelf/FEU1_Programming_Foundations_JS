var isAlive = true;
var name = "ben-9000";
var hasJetPack = true;
var suitColor = "black";
var eyes = 4;
var eyeColor = "brown";
var hairColor = 0;
var legs = 2;
var arms = 2;
var hands = 2;
var ears = 2;
var canWalk = true;
var canRun = true;
var canFly = true;
var hasWeapon = false;
var isInGoodMood = false;

console.log(".-.-. Booting .-.-.");
console.log(
  name,
  isAlive,
  hasJetPack,
  eyes,
  eyeColor,
  hairColor,
  legs,
  arms,
  hands,
  ears,
  canWalk,
  canFly,
  hasWeapon
);

/* 
 2. BROKEN SATELLITE::::::
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid 
       cannot go outside, console log the correct log based on that condition. 
*/


if (hasJetPack) {
  console.log("JetPack is enabled!!! off I go outside to fix the satellite");
} else {
  console.log(
    "JetPack NOT enabled, please enable jetPack before doing a space walk"
  );
}
