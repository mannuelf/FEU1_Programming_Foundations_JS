function initAndroid() {
  // 1st Exercise
  const droid = {
    name: "Jonmar-9000",
    isAlive: true,
    body: {
      head: {
        eyes: 2,
        eyeColor: "black",
        hairColor: "black",
        ears: 2
      },
      upperBody: { arms: 2, hands: 2 },
      lowerBody: { legs: 2 }
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
  //       " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the Mass."
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
        " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the Mass."
    );
  }

  // 6th  Exercise

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

  console.group(planets[0][0]); // Mercury.
  console.log("Description:", planets[0][1][0]);
  console.log("Surface temperature:", planets[0][1][1]);
  console.log("Mass:", planets[0][1][2]);
  console.groupEnd();

  console.group(planets[1][0]); // Jupiter. (please insert the correct array index to add Earth as a string label to the console, as previous done for Mercury)
  console.log("Description:", planets[1][1][0]);
  console.log("Surface temperature:", planets[1][1][1]);
  console.log("Mass:", planets[1][1][2]);
  console.groupEnd();

  console.group(planets[2][0]); // Earth.
  console.log("Description:", planets[2][1][0]);
  console.log("Surface temperature:", planets[2][1][1]);
  console.log("Mass:", planets[2][1][2]);
  console.groupEnd();

  console.group(planets[3][0]); // Mars.
  console.log("Description:", planets[3][1][0]);
  console.log("Surface temperature:", planets[3][1][1]);
  console.log("Mass:", planets[3][1][2]);
  console.groupEnd();

  // Level 2::::::::::::::

  const neptune1 = [
    "NEPTUNE",
    [
      "Neptune is the fourth largest and the farthest planet of the Solar System with the most powerful wind speeds out of all the planets. It is the smallest of the gas giants and is the first planet to be discovered by mathematical predictions in 1846.",
      "−201 °C",
      "102,410,000,000,000,000 billion kg (17.15x Earth)"
    ]
  ];

  const uranus1 = [
    "URANUS",
    [
      "Uranus is the seventh planet discovered in the Solar System that also led to the discovery of the last planet, Neptune they are both referred to as ice giants. Officially recognized in 1781 after many observations in the past, it is the third largest planet of the Solar System.",
      "−197 °C",
      "86,810,300,000,000,000 billion kg (14.536 x Earth)"
    ]
  ];

  planets.unshift(neptune1, uranus1);

  console.table(planets);

  // 7. Android Object REFACTOR:::::

  // Level 1::::::::::::::

  const android = {
    name: "Jonmar-9000",
    isAlive: true,
    body: {
      head: {
        eyes: 2,
        eyeColor: "black",
        hairColor: "black",
        ears: 2
      },
      upperBody: { arms: 2, hands: 2 },
      lowerBody: { legs: 2 }
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

  //Level 2::::::::::::::

  const planetObject = [
    {
      name: "MERCURY",
      description:
        "The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days.",
      surfaceTemp: "-173 to 427°C",
      mass: "330,104,000,000,000 billion kg (0.055 x Earth)"
    },
    {
      name: "JUPITER",
      description:
        "Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth.",
      surfaceTemp: "-108°C",
      mass: "1,898,130,000,000,000,000 billion kg (317.83 x Earth)"
    },
    {
      name: "EARTH",
      description:
        "Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present.",
      surfaceTemp:
        "110 degrees Fahrenheit / 48 degrees Celsius, and the lowest around -126 degrees Fahrenheit / -88 degrees Celsius, maybe even lower",
      mass: "6.6 sextillion tons"
    },
    {
      name: "MARS",
      description:
        "Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. It is the most widely searched planet for life.",
      surfaceTemp: "87 to -5 °C",
      mass: "641,693,000,000,000 billion kg (0.107 x Earth)"
    }
  ];

  function NewPlanet(name, description, surfaceTemp, mass) {
    this.name = name;
    this.description = description;
    this.surfaceTemp = surfaceTemp;
    this.mass = mass;
  }

  const neptune = new NewPlanet(
    "NEPTUNE",
    "Neptune is the fourth largest and the farthest planet of the Solar System with the most powerful wind speeds out of all the planets. It is the smallest of the gas giants and is the first planet to be discovered by mathematical predictions in 1846.",
    "−201 °C",
    "102,410,000,000,000,000 billion kg (17.15x Earth)"
  );

  const uranus = new NewPlanet(
    "URANUS",
    "Uranus is the seventh planet discovered in the Solar System that also led to the discovery of the last planet, Neptune they are both referred to as ice giants. Officially recognized in 1781 after many observations in the past, it is the third largest planet of the Solar System.",
    "−197 °C",
    "86,810,300,000,000,000 billion kg (14.536 x Earth)"
  );

  const newPlanetArray = [neptune, uranus];

  planetObject.unshift(...newPlanetArray);

  console.table(planetObject);
  console.log(planetObject);
}

initAndroid();
