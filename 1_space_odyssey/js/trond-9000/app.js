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

if (enemyCraft && photonLaser && photonLaserEnabled) {
  if (bullets >= 100) {
    for (var i = 0; i < 100; i++) {
    console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!");
    }
  }
  else {
    console.log("\u{1F9E8} DEAD \u{1F9E8} ");
  }
}

//5
// Level 1

console.log(
  "\u{1F311} LUNAR LANDING:::::"
);

var lunarRadar = {
  isEnabled: true,
  long: true,
  lat: true,
  approachSpeed: 200,
}

if (lunarRadar.isEnabled && lunarRadar.long && lunarRadar.lat) {
  console.log("\u{1F91F} looking good, " + name + ", we are making our descent, now entering approach speed");
  if (lunarRadar.approachSpeed >= 200 && lunarRadar.approachSpeed < 299) {
    console.log("\u{269B} well done, " + name + ", we have touched down safely. Lets get some samples and get heck outta here!");
  } else if (lunarRadar.approachSpeed >= 300) {
    console.log("\u{1F627} coming in hot, " + name + ", decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 400) {
    console.log("\u{1F627} coming in way too hot, " + name + ", decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 500) {
    console.log("\u{1F627} coming in way too hot, " + name + ", decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 600) {
    console.log("\u{1F627} coming in way too hot, " + name + ", decrease pitch!");
  } else if (lunarRadar.approachSpeed <= 100) {
    console.log("\u{1F47D} hmmm need a bit more heat, " + name + ", lets increase pitch and we should have a smooth landing");
  } else {
    console.log('Please enter an approach speed');
  }
}
else {
  console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + ", you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
}

// Level 2


