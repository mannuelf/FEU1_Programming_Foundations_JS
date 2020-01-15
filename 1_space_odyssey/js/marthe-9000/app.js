
var isAlive = true;
var name = "Marthe-9000";
var hasJetPack = true;
var suitColor = "white";
var eyes = 2;
var eyeColor = "blue";
var hairColor = "yellow";
var legs = 2;
var arms = 2;
var hands = 2;
var ears = 2;
var canWalk = true;
var canRun = true;
var canFly = true;
var hasWeapon = true;
var isInGoodMood = true;
if (hasJetPack){
    console.log("JetPack is enabled!!! off I go outside to fix the satellite");
}else{
    console.log("JetPack NOT enabled, please enable jetPack before doing a space walk")
}

console.log(".-.-. Booting .-.-.");
console.log(name, isAlive, hasJetPack, eyes, eyeColor, hairColor, legs, arms, hands, ears, canWalk, canFly, hasWeapon);

var responses = [
  "Call basecamp and ask for assistance, but they are far away",
  "Do nothing, just push through",
  "initiate core thrusters, punch 180degrees into dash-nav and warp away from danger",
  "ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid"
];

// write your code here, use the console log beneath
// console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");
for(var i = 0; i > responses.length; i++) {
  if(i === 2){
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

// a.
var isEnemyCraft = true;
var hasPhotonLaser = true;
var photonLaserEnabled = true;
var bullets = 400;

if( (isEnemyCraft) && ( hasPhotonLaser) && (photonLaserEnabled)) {
  if (bullets >= 100) {
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
