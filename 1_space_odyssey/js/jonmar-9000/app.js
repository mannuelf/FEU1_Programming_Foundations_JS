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

let name = droid.name;

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

// 5th Exercise

console.log("\u{1F311} LUNAR LANDING:::::");

var lunarRadar = {
  isEnabled: undefined,
  long: undefined,
  lat: undefined,
  approachSpeed: undefined // "ft per minute"
};

lunarRadar.isEnabled = true;
lunarRadar.long = 200;
lunarRadar.lat = 300;
lunarRadar.approachSpeed = 500;

// 5th Exercise -- 1st part (if statement)

// if (
//   lunarRadar.isEnabled &&
//   lunarRadar.lat !== undefined &&
//   lunarRadar.long !== undefined
// ) {
//   console.log(
//     "\u{1F91F} looking good " +
//       name +
//       " we are making our descent, now entering approach speed"
//   );
//   if (lunarRadar.approachSpeed >= 400) {
//     console.log(`\u{1F627} Coming in way too hot ${name} decrease pitch!`);
//   } else if (lunarRadar.approachSpeed >= 300) {
//     console.log("\u{1F627} Coming in hot " + name + " decrease pitch!");
//   } else if (lunarRadar.approachSpeed >= 200) {
//     console.log(
//       "\u{269B} Well done " +
//         name +
//         " we have touched down safely. Lets get some samples and get heck outta here!"
//     );
//   } else if (lunarRadar.approachSpeed < 200) {
//     console.log(
//       "\u{1F47D} hmmm need a bit more heat " +
//         name +
//         " lets increase pitch and we should have a smooth landing"
//     );
//   } else {
//     console.log("Please enter an approach speed");
//   }
// } else {
//   console.log(
//     "\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " +
//       name +
//       " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance."
//   );
// }

// 5th Exercise -- 2nd part (switch statement)

if (
  lunarRadar.isEnabled &&
  lunarRadar.lat !== undefined &&
  lunarRadar.long !== undefined
) {
  console.log(
    "\u{1F91F} looking good " +
      name +
      " we are making our descent, now entering approach speed"
  );

  switch (true) {
    case lunarRadar.approachSpeed > 300:
      console.log(
        "\u{1F627} coming in way too hot " + name + " decrease pitch!"
      );
      break;

    case lunarRadar.approachSpeed > 200:
      console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
      break;

    case lunarRadar.approachSpeed > 100:
      console.log(
        "\u{269B} well done " +
          name +
          " we have touched down safely. Lets get some samples and get heck outta here!"
      );
      break;

    case lunarRadar.approachSpeed <= 100:
      console.log(
        "\u{1F47D} hmmm need a bit more heat " +
          name +
          " lets increase pitch and we should have a smooth landing"
      );
      break;

    default:
      console.log("Please enter an approach speed");
      break;
  }
} else {
  console.log(
    "\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " +
      name +
      " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance."
  );
}
