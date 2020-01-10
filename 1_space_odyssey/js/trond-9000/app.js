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

console.log("\u{1F916} .-.-. Booting .-.-.");
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

//2

console.log(
  "\u{1F6F0} BROKEN SATELLITE::::::"
);

if (hasJetPack === true) {
    console.log("JetPack is enabled!!! off I go outside to fix the satellite");
}
else {
    console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");
}

//3

console.log(
  "\u{1F327} METEOR SHOWER::::::"
);

var responses = [
  "Call basecamp and ask for assistance, but they are far away",
  "Do nothing, just push through",
  "Initiate core thrusters, punch 180 degrees into dash-nav and warp away from danger",
  "Ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid"
];

var numberOfResponses = responses.length;

for (var i = 0; i <= numberOfResponses; i++) {
  if (responses[i] === numberOfResponses[2]) {
    console.log(responses[2] + " " + "\u{1F6F8} Swoosh -> -> Ship is steered to safety!");
  }
}

//4

console.log(
"\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::"
);

var enemyCraft = true;
var photonLaser = true;
var photonLaserEnabled = true;
var bullets = 100;

if (enemyCraft && photonLaser && photonLaserEnabled === true) {
  if (bullets >= 100) {
    for (var i = 0; i < 100; i++) {
    console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!");
    }
  }
  else {
    console.log("\u{1F9E8} DEAD \u{1F9E8} ");
  }
}

/*
If its an enemyCraft && photonLaser && photonLaserEnabled
  IF bullets is greater than or equal to 100
      shoot 100 photon-lazers by printing this log 100 times:
      console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!"); (use a loop)
    ELSE
      console.log("\u{1F9E8} DEAD \u{1F9E8} ");
*/

