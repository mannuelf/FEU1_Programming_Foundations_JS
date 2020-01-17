/*
 7. Android Object REFACTOR:::::

 Level 1::::::::::::::
 Refactor (change) all the variables you have in place that initializes the android into an android object.
 - Your android needs a head, upperBody, lowerBody & [ anyThingElseYouCanDreamOf ].
 - Feel free to create any new properties that will further describe your android [ anyThingYouCanDreamOf ].
 - next update your application to use this newly refactored code

 tip: the console.log that prints the variables of the android will need to be updated

 Level 2::::::::::::::
 Refactor the planets array to be an array of objects, each object must be its own planet.
  - next update your application to use this newly refactored code

var isAlive = true;
var name = "ben-9000";
var hasJetPack = true;
var suitColor = "black";
var eyes = 4;
var eyeColor = "brown";
var hairColor = "black";
var legs = 2;
var arms = 2;
var hands = 2;
var ears = 2;
var canWalk = true;
var canRun = true;
var canFly = true;
var hasWeapon = false;
var isInGoodMood = false;
*/

var android = {
  head: {
    name: "ben-9000",
    eyes: 2,
    eyeColor: "brown",
    hairColor: "black",
    ears: 2
  },
  upperBody: {
    arms: 2,
    hands: 2
  },
  lowerBody: {
    legs: 2
  },
  anyThingElseYouCanDreamOf: {
    canWalk: true,
    canRun: true,
    canFly: true,
    hasWeapon: false,
    isInGoodMood: false,
    isAlive: true,
    suitColor: "black",
    hasJetPack: true
  }
};

console.log(".-.-. Booting .-.-.");
console.log(android.head.name);
console.log(android.head.eyes);
console.log(android.head.ears);
console.log(android.head.eyeColor);
console.log(android.head.hairColor);
console.log(android.anyThingElseYouCanDreamOf.isAlive);
console.log(android.anyThingElseYouCanDreamOf.canWalk);
console.log(android.anyThingElseYouCanDreamOf.canFly);
console.log(android.anyThingElseYouCanDreamOf.hasWeapon);
console.log(android.anyThingElseYouCanDreamOf.hasJetPack);
console.log(android.lowerBody.legs);
console.log(android.upperBody.arms);
console.log(android.upperBody.hands);

//Refactor the planets array to be an array of objects, each object must be its own planet.
//next update your application to use this newly refactored code

var planet = [
  {
    name: "Mercury",
    description:
      "the smallest and fastest planet, Mercury is the closest planet to the sun and whips around it every 88 Earth Days",
    mass: "330,104,000,000,000 billion kg (0.055 x Earth)"
  },
  {
    name: "JUPITER",
    description:
      "Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth.",
    mass: "1,898,130,000,000,000,000 billion kg (317.83 x Earth)"
  },
  {
    name: "EARTH",
    description:
      "Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present.",
    mass: "6.6 sextillion tons"
  },
  {
    name: "mars",
    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. It is the most widely searched planet for life.",
    mass: "641,693,000,000,000 billion kg (0.107 x Earth)"
  }
];

for (var i = 0; i < planet.length; i++) {
console.group(planet[i].name); //Jupiter
console.log(planet[i].description);
console.log(planet[i].mass);
}




/*console.group(planet[0].name); //Mercury
console.log(planet[0].description);
console.log(planet[0].mass);

console.group(planet[1].name); //Jupiter
console.log(planet[1].description);
console.log(planet[1].mass);

console.group(planet[2].name); //Earth
console.log(planet[2].description);
console.log(planet[2].mass);

console.group(planet[3].name); //Mars
console.log(planet[3].description);
console.log(planet[3].mass);
*/ 

/* 
 2. BROKEN SATELLITE::::::
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid 
       cannot go outside, console log the correct log based on that condition. 
*/

hasJetPack = true;

if (hasJetPack) {
  console.log("JetPack is enabled!!! off I go outside to fix the satellite");
} else {
  console.log(
    "JetPack NOT enabled, please enable jetPack before doing a space walk"
  );
}

/*
 3. METEOR SHOWER::::::
    On your way to Jupiter you encounter a massive meteor shower that could damage the ship, you need to redirect the ship to a new safe location.
    a) Using a for loop iterate through the responses array and choose the appropriate response to get out of danger.
      create an if condition in your loop to print only 1 response using a comparison operator.
*/
/* 3. METEOR SHOWER::::::
On your way to Jupiter you encounter a massive meteor shower that could damage the ship, you need to redirect the ship to a new safe location.
a) Using a for loop iterate through the responses array and choose the appropriate response to get out of danger.
  create an if condition in your loop to print only 1 response using a comparison operator.
*/
console.log("\u{1F327} METEOR SHOWER::::::");

var responses = [
  "Call basecamp and ask for assistance, but they are far away",
  "Do nothing, just push through",
  "initiate core thrusters, punch 180degrees into dash-nav and warp away from danger",
  "ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid"
];

for (var i = 0; i <= responses.length; i++) {
  if (responses[i] === responses[2]) {
    console.log(responses[i]);
  }
}

// write your code here, use the console log beneath
// console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");

/*
4. ALIENS SPACE CRAFT ENCROACHING::::::
Alien craft approaches its an enemy for sure...you need to shoot it down!!
a) convert the pseudoscope to real code
   create the required variables below and fill in the correct values and dataTypes to make
   the if statements pass so that photonLaser fires pew pew pew.
b)
*/
console.log("\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::");

var orderHasShipped = true;

//honestly have no clue of what i did her

// a.
var enemyCraft = true;
var photonLaser = true;
var photonLaserEnabled = true;
var bullets = 100;

console.log("TEST", enemyCraft, photonLaser, photonLaserEnabled, bullets);

if (enemyCraft && photonLaser && photonLaserEnabled) {
  if (bullets >= 100) {
    for (var i = 0; i <= 100; i++) {
      console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!");
    }
  } else {
    console.log("\u{1F9E8} DEAD \u{1F9E8}");
  }
} else {
  console.log("do your homework");
}

/*
If its an enemyCraft && photonLaser && photonLaserEnabled
  IF bullets is greater than or equal to 100
      shoot 100 photon-lazers by printing this log 100 times:
      console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!"); (use a loop)
    ELSE
      console.log("\u{1F9E8} DEAD \u{1F9E8} ");
*/
