const droid = {
  isAlive: true,
  name: "Jonmar-9000",
  hasJetPack: true,
  suitColor: "rosa",
  eyes: 2,
  eyeColor: "svart",
  hairColor: "black",
  legs: 2,
  arms: 2,
  hands: 2,
  ears: 2,
  canWalk: true,
  canRun: true,
  canFly: true,
  hasWeapon: true,
  isInGoodMood: true
};

if (droid.hasJetPack) {
  console.log("JetPack is enabled!!! off I go outside to fix the satellite");
} else {
  console.log(
    "JetPack NOT enabled, please enable jetPack before doing a space walk"
  );
}

console.log(".-.-. Booting .-.-.");
console.log(droid);
