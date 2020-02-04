faridaGetReadyAndroid = function() {
  let faridasAndroid = {
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
      canFly: false,
      makeMeFly: function(flyParam) {
        console.log(this.canFly);
        this.canFly = flyParam;
        console.log(this.canFly);
      }
    }
  };

  console.log(".-.-. Booting .-.-.");
  console.log(
    "...Head...",
    faridasAndroid.head.name,
    faridasAndroid.head.isAlive,
    faridasAndroid.head.eyes,
    faridasAndroid.head.eyeColor,
    faridasAndroid.head.hairColor,
    faridasAndroid.head.isInGoodMood
  );

  console.log(
    "...Upperbody...",
    faridasAndroid.upperBody.arms,
    faridasAndroid.upperBody.hands,
    faridasAndroid.upperBody.hasJetPack,
    faridasAndroid.upperBody.hasWeapon,
    faridasAndroid.upperBody.canFly,
    faridasAndroid.upperBody.suitColor
  );

  console.log(
    ".-.-.Lowerbody.-.-.",
    faridasAndroid.lowerBody.legs,
    faridasAndroid.lowerBody.canRun,
    faridasAndroid.lowerBody.canWalk,
    faridasAndroid.superPowers.mindReading,
    faridasAndroid.superPowers.canFly
  );

  console.log(
    ".-.-.Super Powers.-.-.",
    faridasAndroid.superPowers.mindReading,
    faridasAndroid.superPowers.canFly
  );

  if (faridasAndroid.upperBody.hasJetPack === true) {
    console.log("JetPack is enabled!!! off I go outside to fix the satellite");
  } else {
    console.log(
      "JetPack NOT enabled, please enable jetPack before doing a space walk"
    );
  }

  return faridasAndroid;
};

faridaGetReadyAndroid().superPowers.makeMeFly(true);

meteorShower = () => {
  console.log("\u{1F327} METEOR SHOWER::::::");

  const responses = [
    "Call basecamp and ask for assistance, but they are far away",
    "Do nothing, just push through",
    "initiate core thrusters, punch 180degrees into dash-nav and warp away from danger",
    "ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid"
  ];

  for (let i = 0; i <= responses.length; i++) {
    if (responses[i] === responses[2]) {
      console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");
    }
  }

};

spaceCraft = () => {
  console.log("\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::");

  function shootTobeSafe() {
    let enemyCraft = true;
    let photonLaser = true;
    let photonLaserEnabled = true;
    let bullets = 100;

    if (enemyCraft && photonLaser && photonLaserEnabled) {
      if (bullets >= 100) {
        bullets = i;
        for (let i = 0; i < 100; i++) {
          console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!");
        }
      } else {
        console.log("\u{1F9E8} DEAD \u{1F9E8} ");
      }
    }
  }

};

lunarLanding = () => {
  console.log("\u{1F311} LUNAR LANDING:::::");

  const lunarRadar = {
    isEnabled: undefined,
    long: undefined,
    lat: undefined,
    approachSpeed: undefined // "ft per minute"
  };

  lunarRadar.approachSpeed = 240;
  lunarRadar.lat = 20;
  lunarRadar.long = 10;
  lunarRadar.isEnabled = true;

  if (
    lunarRadar.isEnabled === true &&
    lunarRadar.lat !== undefined &&
    lunarRadar.long !== undefined
  ) {
    console.log(
      "\u{1F91F} looking good " +
        name +
        " we are making our descent, now entering approach speed"
    );
    if (lunarRadar.approachSpeed >= 200 && lunarRadar.approachSpeed < 299) {
      console.log(
        "\u{269B} well done " +
          name +
          " we have touched down safely. Lets get some samples and get heck outta here!"
      );
    } else if (lunarRadar.approachSpeed >= 300) {
      console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
    } else if (lunarRadar.approachSpeed >= 400) {
      console.log(
        "\u{1F627} coming in way too hot " + name + " decrease pitch!"
      );
    } else if (lunarRadar.approachSpeed >= 500) {
      console.log(
        "\u{1F627} coming in way too hot " + name + " decrease pitch!"
      );
    } else if (lunarRadar.approachSpeed >= 600) {
      console.log(
        "\u{1F627} coming in way too hot " + name + " decrease pitch!"
      );
    } else if (lunarRadar.approachSpeed <= 100) {
      console.log(
        "\u{1F47D} hmmm need a bit more heat " +
          name +
          " lets increase pitch and we should have a smooth landing"
      );
    } else {
      console.log(
        "\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " +
          name +
          " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance."
      );
    }
  } else {
    console.log("Please enter an approach speed");
  }

  // if (lunarRadar.isEnabled === true && lunarRadar.lat !== undefined && lunarRadar.long !== undefined) {
  //   console.log("\u{1F91F} looking good " + name + " we are making our descent, now entering approach speed");
  //   switch (lunarRadar.approachSpeed) {
  //     case 200:
  //       console.log("\u{269B} well done " + name + " we have touched down safely. Lets get some samples and get heck outta here!");
  //       break;
  //     case 300:
  //       console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
  //       break;
  //     case 400:
  //       console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  //       break;
  //     case 500:
  //       console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  //       break;
  //     case 600:
  //       console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  //       break;
  //     case 100:
  //       console.log("\u{1F47D} hmmm need a bit more heat " + name + " lets increase pitch and we should have a smooth landing");
  //       break;
  //     default:
  //       console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
  //   }
  // } else {
  //   console.log('Please enter an approach speed');
  // }
};

planetaryInfoDash = () => {
  console.log("\u{1F319} PLANETARY INFO-DASH:::::");

  const planets = [
    {
      name: "Mercury",
      Description:
        "The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days.",
      surfaceTemperature: "-173 to 427°C",
      Mass: "330,104,000,000,000 billion kg (0.055 x Earth)"
    },

    {
      name: "Jupiter",
      Description:
        "Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth.",
      surfaceTemperature: "-108°C",
      Mass: "1,898,130,000,000,000,000 billion kg (317.83 x Earth)"
    },

    {
      name: "Earth",
      Description:
        "Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present.",
      surfaceTemperature:
        "110 degrees Fahrenheit / 48 degrees Celsius, and the lowest around -126 degrees Fahrenheit / -88 degrees Celsius, maybe even lower",
      Mass: "6.6 sextillion tons"
    },

    {
      name: "March",
      Description:
        "Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. It is the most widely searched planet for life.",
      surfaceTemperature: "87 to -5 °C",
      Mass: "641,693,000,000,000 billion kg (0.107 x Earth)"
    }
  ];

  let venus = {
    name: "VENUS",
    Description:
      "Spinning in the opposite direction to most planets, Venus is the hottest planet, and one of the brightest objects in the sky.",
    surfaceTemperature: "462° C",
    Mass: "4,867,320,000,000,000 billion kg (0.815 x Earth)"
  };

  let neptune = {
    name: "NEPTUNE",
    Description:
      "Neptune is now the most distant planet and is a cold and dark world nearly 3 billion miles from the Sun.",
    surfaceTemperature: "-201 °C",
    Mass: "102,410,000,000,000,000 billion kg (17.15x Earth)"
  };

  function newPlanets(arg1, arg2) {
    planets.unshift(arg1, arg2);
  }

  newPlanets(venus, neptune);

  for (let i = 0; i < planets.length; i++) {
    console.group(planets[i].name); // Neptune.
    console.log("Description:", planets[i].Description);
    console.log("Surface temperature:", planets[i].surfaceTemperature);
    console.log("Mass:", planets[i].Mass);
    console.groupEnd();
  }
};

/*
    9. REFACTOR Arrow functions
    Level 1:::::::::
    Go through your application and convert all your functions into Arrow functions.
    If you only have one function, please make a few more it is possible to have one function per feature.

    Level 2:::::::::
    Create a few methods on your droid object that will allow you to update your object properties like isAlive, eyeColors etc.
  */
