function bootHenrik() {

/* ______   __  __   ______  ______
        _..._
      .'     '.      _
     /    .-""-\   _/ \
   .-|   /:.   |  |   |
   |  \  |:.   /.-'-./
   | .-'-;:__.'    =/
   .'=  *=|Noroff_.='
  /   _.  |    ;
 ;-.-'|    \   |
/   | \    _\  _\
\__/'._;.  ==' ==\
         \    \   |
         /    /   /
         /-._/-._/
  ...    \   `\  \
          `-._/._/


 1. CREATE DROID::::::
    Below are all the letiables needed to initialize an android into consciousness in its default state.
    a. assign the correct values to the letiables below,
    b. ensure to choose the correct values and datatypes
    c. the droid should be built in your likeness (a human, with human features, 2 arms, legs etc)
*/

let isAlive = true;
let name = "Henrik-9000";
let hasJetPack = true;
let suitColor = "white";
let eyes = true;
let eyeColor = "blue";
let hairColor = "blond";
let legs = 2;
let arms = 2;
let hands = 2;
let ears = 2;
let canWalk = true;
let canRun = true;
let canFly = true;
let hasWeapon = true;
let isInGoodMood = true;

console.log(".-.-. Booting .-.-.");
console.log(
  name,
  isAlive,
  hasJetPack,
  suitColor,
  eyes,
  eyeColor,
  hairColor,
  legs,
  arms,
  hands,
  ears,
  canRun,
  canWalk,
  canFly,
  hasWeapon,
  isInGoodMood,
);



/*
 2. BROKEN SATELLITE::::::
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid
       cannot go outside, console log the correct log based on that condition.
*/


if (hasJetPack === true) {
  console.log("JetPack is enabled!!! off I go outside to fix the satellite");
} else {
  console.log(
    "JetPack NOT enabled, please enable jetPack before doing a space walk"
  );
}
/*
 uncomment these console logs and write your if else statement and use them to console log out the correct statement

 console.log("JetPack is enabled!!! off I go outside to fix the satellite");
 console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");

 */

/*
 3. METEOR SHOWER::::::
    On your way to Jupiter you encounter a massive meteor shower that could damage the ship, you need to redirect the ship to a new safe location.
    a) Using a for loop iterate through the responses array and choose the appropriate response to get out of danger.
      create an if condition in your loop to print only 1 response using a comparison operator.
*/

function meteorShower() {
  console.log("\u{1F327} METEOR SHOWER::::::");

let responses = [
  "Call basecamp and ask for assistance, but they are far away",
  "Do nothing, just push through",
  "initiate core thrusters, punch 180degrees into dash-nav and warp away from danger",
  "ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid"
];

// write your code here, use the console log beneath
// console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");

for (let count = 0; count < responses.length; count++) {
  if (responses[count] === responses[2]) {
    console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");
  }
}

}

/*
 4. ALIENS SPACE CRAFT ENCROACHING::::::
    Alien craft approaches its an enemy for sure...you need to shoot it down!!
    a) convert the pseudoscope to real code
       create the required letiables below and fill in the correct values and dataTypes to make
       the if statements pass so that photonLaser fires pew pew pew.
    b)
*/

function alienSpacecraft() {
  console.log("\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::");

// a.
let enemyCraft = true;
let photonLaser = true;
let photonLaserEnabled = true;
let bullets = 700;

/*
  If its an enemyCraft && photonLaser && photonLaserEnabled
      IF bullets is greater than or equal to 100
          shoot 100 photon-lazers by printing this log 100 times:
          console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!"); (use a loop)
        ELSE
          console.log("\u{1F9E8} DEAD \u{1F9E8} ");
*/

if (enemyCraft && photonLaser && photonLaserEnabled) {
  if (bullets >= 100) {
    for (let i = 1; i <= 100; i++) {
      console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!");
    }
  } else {
    console.log("\u{1F9E8} DEAD \u{1F9E8} ");
  }
}

}

/*
 5. LUNAR LANDING:::::
    We got word of an extra terrestrial sighting on the moon... we have been tasked to land on the moon
    to investigate it, we have aboard a NASA lunar module https://en.wikipedia.org/wiki/Apollo_Lunar_Module
    This module will allow to land safely on the moon with the aid of the landing radar which takes inputs.

    Ensure the correct co-ordinates and approach speed are entered into the landing radar.
    It's all automated we just have to ensure that the correct values are input ie. not undefined.

    The lunar radar accepts approach speeds in increments of hundreds only, starting at 0 and maxing out at 700.

    You cannot edit the lunarRadar object directly you have to pass your values in via an interface called letiables.

    tip: letName.keyName (this is how to extract a value from an object)
*/

function lunarLanding() {
  console.log("\u{1F311} LUNAR LANDING:::::");

// start coding here

let lunarRadar = {
  isEnabled: true,
  long: 200,
  lat: 400,
  approachSpeed: 200 // "ft per minute"
};
// Level 1 convert this psuedocode to functioning code.

/*
IF lunar radar is enabled && lat is defined and long is defined
    console.log("\u{1F91F} looking good " + name + " we are making our descent, now entering approach speed");
    IF approach speed is greater than or equal to 200ft per minute and approach speed is less than 299ft per minute
      console.log("\u{269B} well done " + name + " we have touched down safely. Lets get some samples and get heck outta here!");
    ELSE IF approach speed is greater than or equal to 300ft per minute
      console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 400ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 500ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 600ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is less than or equal to 100ft per minute
      console.log("\u{1F47D} hmmm need a bit more heat " + name + " lets increase pitch and we should have a smooth landing");
    ELSE
      console.log('Please enter an approach speed');
ELSE
  console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
*/

if (lunarRadar.isEnabled && lunarRadar.long && lunarRadar.lat) {
  console.log(
    "\u{1F91F} looking good " +
      name +
      " we are making our descent, now entering approach speed"
  );

  if (lunarRadar.approachSpeed >= 200 && lunarRadar.approachSpeed > 299) {
    console.log(
      "\u{269B} well done " +
        name +
        " we have touched down safely. Lets get some samples and get heck outta here!"
    );
  } else if (lunarRadar.approachSpeed >= 300) {
    console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 400) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 500) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 600) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed <= 100) {
    console.log("\u{1F47D} hmmm need a bit more heat " + name + " lets increase pitch and we should have a smooth landing");
  } else {
    console.log("Please enter an approach speed");
  }
} else {
  console.log(
    "\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
}

// Level 2 convert it to a switch statement.
if (lunarRadar.isEnabled && lunarRadar.long && lunarRadar.lat) {
  switch (true) {
  }
}

}

/*
 6. PLANETARY INFO-DASH:::::

 Level 1::::::::::::::
 Given this array of planets using what you know about how to access data in an arrays index log out the:
  - Description,
  - Surface temperature and
  - Mass

  in the console logs bellow.

  tip: pass your letiables into the console.log after comma ,
*/


function planetsDashboard() {
  console.log("\u{1F319} PLANETARY INFO-DASH:::::");

let planets = [
  [ "MERCURY",
    [
      "The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days.",
      "-173 to 427°C",
      "330,104,000,000,000 billion kg (0.055 x Earth)"
    ],
  ],
  [ "JUPITER",
    [
      "Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth.",
      "-108°C",
      "1,898,130,000,000,000,000 billion kg (317.83 x Earth)"
    ],
  ],
  [ "EARTH",
    [
      "Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present.",
      "110 degrees Fahrenheit / 48 degrees Celsius, and the lowest around -126 degrees Fahrenheit / -88 degrees Celsius, maybe even lower",
      "6.6 sextillion tons"
    ],
  ],
  [ "MARS",
    [
      "Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. It is the most widely searched planet for life.",
      "87 to -5 °C",
      "641,693,000,000,000 billion kg (0.107 x Earth)"
    ],
  ],
];

console.group(planets[0][0]); // Mercury.
  console.log("Description:", planets[0][1][0] );
  console.log("Surface temperature:", planets[0][1][1] );
  console.log("Mass:", planets[0][1][2] );
console.groupEnd();

console.group(planets[1][0]); // Jupiter. (please insert the correct array index to add Earth as a string label to the console, as previous done for Mercury)
  console.log("Description:", planets[1][1][0] );
  console.log("Surface temperature:", planets[1][1][1] );
  console.log("Mass:", planets[1][1][2] );
console.groupEnd();

console.group(planets[2][0]); // Earth.
  console.log("Description:", planets[2][1][0] );
  console.log("Surface temperature:", planets[2][1][1] );
  console.log("Mass:", planets[2][1][2] );
console.groupEnd();

console.group(planets[3][0]); // Mars.
  console.log("Description:", planets[3][1][0] );
  console.log("Surface temperature:", planets[3][1][1] );
  console.log("Mass:", planets[3][1][2] );
console.groupEnd();

/*
 Level 2::::::::::::::
 Add 2 New planets of your choosing to the front of the Array : https://nineplanets.org
*/

planets.unshift(
  ["Uranus",
    [
      "Uranus is the seventh planet discovered in the Solar System that also led to the discovery of the last planet, Neptune they are both referred to as ice giants. Officially recognized in 1781 after many observations in the past, it is the third largest planet of the Solar System.",
      "-197 °C",
      "86,810,300,000,000,000 billion kg (14.536 x Earth)"
    ],
  ],

);

console.group(planets[0][0]); // Uranus.
  console.log("Description:", planets[0][1][0] );
  console.log("Surface temperature:", planets[0][1][1] );
  console.log("Mass:", planets[0][1][2] );
console.groupEnd();

planets.unshift(
  ["Neptune",
    [
      "Neptune is the fourth largest and the farthest planet of the Solar System with the most powerful wind speeds out of all the planets. It is the smallest of the gas giants and is the first planet to be discovered by mathematical predictions in 1846. ",
      "-201 °C",
      "102,410,000,000,000,000 billion kg (17.15x Earth)"
    ],
  ],

);

console.group(planets[0][0]); // Uranus.
  console.log("Description:", planets[0][1][0] );
  console.log("Surface temperature:", planets[0][1][1] );
  console.log("Mass:", planets[0][1][2] );
console.groupEnd();
}

/*
  8. REFACTOR Create functions:::::::
  Level 1:::::::::
  Refactor your application to be initialized by a function that will.
*/






/*
  Level 2:::::::::
  Look through your code and find more opportunities to use and call functions and parameters aka arguments.
*/


 /*
    9. REFACTOR Arrow functions
    Level 1:::::::::
    Go through your application and convert all your functions into Arrow functions.
    If you only have one function, please make a few more it is possible to have one function per feature.

    Level 2:::::::::
    Create a few methods on your droid object that will allow you to update your object properties like isAlive, eyeColors etc.
  */
}
