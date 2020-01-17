var droid = [
{
  isAlive = true,
  name = "Vlad-9000",
  suitColor = "pink",
  eyes = 2,
  eyeColor = "green",
  hairColor = "silver",
  head = 1,
  upperBody = 1,
  lowerBody,
  legs = 2,
  arms = 2,
  hands = 2,
  ears = 2,
  height = 210,
  weight = 120,
  age = 10,
  canWalk = true,
  canRun = true,
  canFly = false,
  hasWeapon = true,
  isInGoodMood = false,
  hasJetPack = true,
}
];

console.log("\u{1F916} .-.-. Booting .-.-.");
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
  hasWeapon,
  head,
  upperBody,
  lowerBody,
  height,
  weight,
  age
);

  if (hasJetPack) {
    console.log("JetPack is enabled!!! off I go outside to fix the satellite");
  } else {
    console.log(
      "JetPack NOT enabled, please enable jetPack before doing a space walk"
    );
  }
