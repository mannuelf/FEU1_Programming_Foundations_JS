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

droid.hasJetPack
  ? console.log("JetPack is enabled!!! off I go outside to fix the satellite")
  : console.log(
      "JetPack NOT enabled, please enable jetPack before doing a space walk"
    );

console.log(".-.-. Booting .-.-.");
console.log(droid);
