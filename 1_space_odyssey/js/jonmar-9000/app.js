// 1st Exercise

const droid = {
  name: "Jonmar-9000",
  isAlive: true,
  body: {
    eyes: 2,
    eyeColor: "black",
    hairColor: "black",
    legs: 2,
    arms: 2,
    hands: 2,
    ears: 2
  },
  accesories: {
    hasJetPack: true,
    hasWeapon: true,
    suitColor: "pink"
  },
  ability: {
    canWalk: true,
    canRun: true,
    canFly: true,
    isInGoodMood: true
  }
};

// 2nd Exercise

droid.hasJetPack
  ? console.log("JetPack is enabled!!! off I go outside to fix the satellite")
  : console.log(
      "JetPack NOT enabled, please enable jetPack before doing a space walk"
    );

console.log(".-.-. Booting .-.-.");
console.log(droid);

// 3rd Exercise

console.log("\u{1F327} METEOR SHOWER::::::");

var responses = [
  "Call basecamp and ask for assistance, but they are far away",
  "Do nothing, just push through",
  "Initiate core thrusters, punch 180degrees into dash-nav and warp away from danger",
  "Ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid"
];

let safetyResponse = "\u{1F6F8} Swoosh -> -> Ship is steered to safety!";

for (var i = 0; i <= responses.length; i++) {
  if (responses[i] === responses[2]) console.log(safetyResponse);
}

// 4th Exercise

console.log("\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::");

var enemyCraft = true;
var photonLaser = true;
var photonLaserEnabled = true;
var bullets = 101;

var bulletsNeeded = 100;

var win = "\u{2708} \u{1F525} pew pew pew !! you got them!!";
var lose = "\u{1F9E8} DEAD \u{1F9E8} ";

if (enemyCraft && photonLaser && photonLaserEnabled) {
  if (bullets >= bulletsNeeded) {
    for (var i = 0; i < bulletsNeeded; i++) {
      console.log(win);
    }
  } else {
    console.log(lose);
  }
}
