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
  console.log("Oh no");
}

/*
If its an enemyCraft && photonLaser && photonLaserEnabled
  IF bullets is greater than or equal to 100
      shoot 100 photon-lazers by printing this log 100 times:
      console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!"); (use a loop)
    ELSE
      console.log("\u{1F9E8} DEAD \u{1F9E8} ");
*/

/*
 6. PLANETARY INFO-DASH:::::

 Level 1::::::::::::::
 Given this array of planets using what you know about how to access data in an arrays index log out the:
  - Description,
  - Surface temperature and
  - Mass

  in the console logs bellow.

  tip: pass your variables into the console.log after comma ,
*/
console.log("\u{1F319} PLANETARY INFO-DASH:::::");

var planets = [
  [
    "MERCURY",
    [
      "The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days.",
      "-173 to 427°C",
      "330,104,000,000,000 billion kg (0.055 x Earth)"
    ]
  ],
  [
    "JUPITER",
    [
      "Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth.",
      "-108°C",
      "1,898,130,000,000,000,000 billion kg (317.83 x Earth)"
    ]
  ],
  [
    "EARTH",
    [
      "Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present.",
      "110 degrees Fahrenheit / 48 degrees Celsius, and the lowest around -126 degrees Fahrenheit / -88 degrees Celsius, maybe even lower",
      "6.6 sextillion tons"
    ]
  ],
  [
    "MARS",
    [
      "Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. It is the most widely searched planet for life.",
      "87 to -5 °C",
      "641,693,000,000,000 billion kg (0.107 x Earth)"
    ]
  ]
];


var newPlanet = [
  "Neptunes",
  [
    "is the fourth largest and the farthest planet of the Solar System with the most powerful wind speeds out of all the planets. It is the smallest of the gas giants and is the first planet to be discovered by mathematical predictions in 1846.",
    "-201 °C",
    "60,190.03 Earth days (164.79 Earth years)"
  ]
];

var newPlanet1 = [
  
    "Venus",
    [
      "spinning in the opposite direction to most planets, Venus is the hottest planet, and one of the brightest object in the sky.",
      "462° C",
      "108,209,475 km (0.73 AU),"
    ]
];

planets.unshift(newPlanet);
planets.unshift(newPlanet1);


console.log("\u{1F319} PLANETARY INFO-DASH:::::");

console.group(planets[4][0]); // earth.done
  console.log("Description:", planets[4][1][0]);
  console.log("Surface temperature:", "110 degrees Fahrenheit / 48 degrees Celsius, and the lowest around -126 degrees Fahrenheit / -88 degrees Celsius, maybe even lower");
  console.log("Distance:", "6.6 sextillion tons");
console.groupEnd();

console.group(planets[3][0]); // jupter.done
  console.log("Description:", planets[3][1][0]);
  console.log("Surface temperature:", "-108°C");
  console.log("Distance:", "1,898,130,000,000,000,000 billion kg (317.83 x Earth)");
console.groupEnd();

console.group(planets[5][0]);  // mars.done 
  console.log("Description:", planets[5][1][0]);
  console.log("Surface temperature:", "-87 to -5°C");
  console.log("Distance:","641,693,000,000,000 billion kg (0.107 x Earth)");
console.groupEnd();

console.group(planets[2][0]);  // Mercury.done
  console.log("Description:", planets[2][1][0]);
  console.log("Surface temperature:","-173 to 427°C");
  console.log("Distance:","330,104,000,000,000 billion kg (0.055 x Earth)");
console.groupEnd();


console.group(planets[0][0]); // Venus. done
  console.log("Description:", planets[0][1][0]);
  console.log("Surface temperature:",  "462° C");
  console.log("108,209,475 km (0.73 AU),");
console.groupEnd();

console.group(planets[1][0]); // Neptunes.done
  console.log("Description:", planets[1][1][0]);
  console.log("Surface temperature:", "87 to -5 °C");
  console.log("mass:", "60,190.03 Earth days (164.79 Earth years)");
console.groupEnd();





/*
 Level 2::::::::::::::
 Add 2 New planets of your choosing to the front of the Array : https://nineplanets.org
*/


console.log(planets);

