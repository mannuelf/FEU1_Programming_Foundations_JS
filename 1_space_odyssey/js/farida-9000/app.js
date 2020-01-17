var faridasAndroid = {
  head: {
    eyes: 2,
    hairColor: "red",
    eyeColor: "green",
    ears: 2,
    isAlive: true,
    name: "farida-9000",
    isInGoodMood: false
  },
  upperBody: {
    hasJetPack: true,
    arms: 2,
    hands: 2,
    hasWeapon: true,
    canFly: true,
    suitColor: "pink"
  },
  lowerBody: {
    canWalk: true,
    canRun: true,
    legs: 2
  },
  superPowers: {
    mindReading: true,
    canFly: true
  }
};

console.log(".-.-. Booting .-.-.");

console.log("...Head...",
  faridasAndroid.head.name,
  faridasAndroid.head.isAlive,
  faridasAndroid.head.eyes,
  faridasAndroid.head.eyeColor,
  faridasAndroid.head.hairColor,
  faridasAndroid.head.isInGoodMood
);

console.log("...Upperbody...",
  faridasAndroid.upperBody.arms,
  faridasAndroid.upperBody.hands,
  faridasAndroid.upperBody.hasJetPack,
  faridasAndroid.upperBody.hasWeapon,
  faridasAndroid.upperBody.canFly,
  faridasAndroid.upperBody.suitColor
);

console.log(".-.-.Lowerbody.-.-.",
  faridasAndroid.lowerBody.legs,
  faridasAndroid.lowerBody.canRun,
  faridasAndroid.lowerBody.canWalk,
  faridasAndroid.superPowers.mindReading,
  faridasAndroid.superPowers.canFly
);

console.log(".-.-.Super Powers.-.-.",
  faridasAndroid.superPowers.mindReading,
  faridasAndroid.superPowers.canFly
);



if (faridasAndroid.upperBody.hasJetPack === true) {
  console.log("JetPack is enabled!!! off I go outside to fix the satellite");
} else {
  console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");
};

/*
 7. Android Object REFACTOR:::::

 Level 1::::::::::::::
 Refactor (change) all the variables you have in place that initializes the android into an android object.
 - Your android needs a head, upperBody, lowerBody & [ anyThingElseYouCanDreamOf ].
 - Feel free to create any new properties that will further describe your android [ anyThingYouCanDreamOf ].
 - next update your application to use this newly refactored code

 tip: the console.log that prints the variables of the android will need to be updated

 3. METEOR SHOWER::::::
    On your way to Jupiter you encounter a massive meteor shower that could damage the ship, you need to redirect the ship to a new safe location.
    a) Using a for loop iterate through the responses array and choose the appropriate response to get out of danger.
      create an if condition in your loop to print only 1 response using a comparison operator.
*/
console.log(
  "\u{1F327} METEOR SHOWER::::::"
);

var responses = [
  "Call basecamp and ask for assistance, but they are far away",
  "Do nothing, just push through",
  "initiate core thrusters, punch 180degrees into dash-nav and warp away from danger",
  "ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid"
];

// write your code here, use the console log beneath
// console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");

for (var i = 0; i <= responses.length; i++) {
  if (responses[i] === responses[2]) {
    console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");
  }
}


/*
 4. ALIENS SPACE CRAFT ENCROACHING::::::
    Alien craft approaches its an enemy for sure...you need to shoot it down!!
    a) convert the pseudoscope to real code
       create the required variables below and fill in the correct values and dataTypes to make
       the if statements pass so that photonLaser fires pew pew pew.
    b)
*/
console.log(
  "\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::"
);


var enemyCraft = true;
var photonLaser = true;
var photonLaserEnabled = true;
var bullets = 100;

if (enemyCraft && photonLaser && photonLaserEnabled) {
  if (bullets >= 100) {
    bullets = i
    for (var i = 0; i < 100; i++) {
      console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!");
    }
  } else {
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

/*
 5. LUNAR LANDING:::::
    We got word of an extra terrestrial sighting on the moon... we have been tasked to land on the moon
    to investigate it, we have aboard a NASA lunar module https://en.wikipedia.org/wiki/Apollo_Lunar_Module
    This module will allow to land safely on the moon with the aid of the landing radar which takes inputs.

    Ensure the correct co-ordinates and approach speed are entered into the landing radar.
    It's all automated we just have to ensure that the correct values are input ie. not undefined.

    The lunar radar accepts approach speeds in increments of hundreds only, starting at 0 and maxing out at 700.

    You cannot edit the lunarRadar object directly you have to pass your values in via an interface called variables.

    tip: varName.keyName (this is how to extract a value from an object)
*/
console.log(
  "\u{1F311} LUNAR LANDING:::::"
);

// start coding here

var lunarRadar = {
  isEnabled: undefined,
  long: undefined,
  lat: undefined,
  approachSpeed: undefined, // "ft per minute"
}

lunarRadar.approachSpeed = 240
lunarRadar.lat = 20
lunarRadar.long = 10
lunarRadar.isEnabled = true


if (lunarRadar.isEnabled === true && lunarRadar.lat !== undefined && lunarRadar.long !== undefined) {
  console.log("\u{1F91F} looking good " + name + " we are making our descent, now entering approach speed");
  if (lunarRadar.approachSpeed >= 200 && lunarRadar.approachSpeed < 299) {
    console.log("\u{269B} well done " + name + " we have touched down safely. Lets get some samples and get heck outta here!");
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
    console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
  }
} else {
  console.log('Please enter an approach speed');
}



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

// Level 2 convert it to a switch statement.

if (lunarRadar.isEnabled === true && lunarRadar.lat !== undefined && lunarRadar.long !== undefined) {
  console.log("\u{1F91F} looking good " + name + " we are making our descent, now entering approach speed");
  switch (lunarRadar.approachSpeed) {
    case 200:
      console.log("\u{269B} well done " + name + " we have touched down safely. Lets get some samples and get heck outta here!");
      break;
    case 300:
      console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
      break;
    case 400:
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
      break;
    case 500:
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
      break;
    case 600:
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
      break;
    case 100:
      console.log("\u{1F47D} hmmm need a bit more heat " + name + " lets increase pitch and we should have a smooth landing");
      break;
    default:
      console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
  }
} else {
  console.log('Please enter an approach speed');
}


console.log("\u{1F319} PLANETARY INFO-DASH:::::");

var planets = [

  {
    name: "Mercury",
    Description: "The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days.",
    surfaceTemperature: "-173 to 427°C",
    Mass: "330,104,000,000,000 billion kg (0.055 x Earth)"
  },


  {
    name: "Jupiter",
    Description: "Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth.",
    surfaceTemperature: "-108°C",
    Mass: "1,898,130,000,000,000,000 billion kg (317.83 x Earth)"
  },


  {
    name: "Earth",
    Description: "Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present.",
    surfaceTemperature: "110 degrees Fahrenheit / 48 degrees Celsius, and the lowest around -126 degrees Fahrenheit / -88 degrees Celsius, maybe even lower",
    Mass: "6.6 sextillion tons"
  },

  {
    name: "March",
    Description: "Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. It is the most widely searched planet for life.",
    surfaceTemperature: "87 to -5 °C",
    Mass: "641,693,000,000,000 billion kg (0.107 x Earth)"
  }
];


var venus = {

    name: "VENUS",
    Description: "Spinning in the opposite direction to most planets, Venus is the hottest planet, and one of the brightest objects in the sky.",
    surfaceTemperature: "462° C",
    Mass: "4,867,320,000,000,000 billion kg (0.815 x Earth)"

};

var neptune = {

    name: "NEPTUNE",
    Description: "Neptune is now the most distant planet and is a cold and dark world nearly 3 billion miles from the Sun.",
    surfaceTemperature: "-201 °C",
    Mass: "102,410,000,000,000,000 billion kg (17.15x Earth)"

};

planets.unshift(venus);
planets.unshift(neptune);

for (var i = 0; i < planets.length; i++) {
  console.group(planets[i].name); // Neptune.
  console.log("Description:", planets[i].Description);
  console.log("Surface temperature:", planets[i].surfaceTemperature);
  console.log("Mass:", planets[i].Mass);
  console.groupEnd();
}

