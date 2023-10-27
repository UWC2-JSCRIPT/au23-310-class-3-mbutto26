// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage

function attack(attackingPlayer, defendingPlayer, baseDamage, variableDamage) {
  const randomDamage = Math.floor(Math.random() * (vd + 1));
  console.log(randomDamage);
  const totalDamage = baseDamage + randomDamage;
  defendingPlayer.health -= totalDamage;
  return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage}damage. ${defender.name} has ${defender.health} remaining.`;
}

console.log(attack(player1, player2, 1, 4));

// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10
const player1 = {
  health: 10,
  name: "Marissa",
};
const player2 = {
  health: 10,
  name: "Chris",
};
// 3. Refactor attack function to an arrow function.  Comment out function above.
const attack = (
  attackingPlayer,
  defendingPlayer,
  baseDamage,
  variableDamage
) => {
  const randomDamage = Math.floor(Math.random() * (vd + 1));
  const totalDamage = baseDamage + randomDamage;
  defendingPlayer.health -= totalDamage;
  return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage}damage. ${defender.name} has ${defender.health} remaining.`;
};
console.log(randomDamage);

// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(attack(attackingPlayer, defendingPlayer, 1, 2));
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);

const logReceipt = (...items) => {
  let total = 0;
  items.forEach((item) => {
    total += item.price;
    console.log(item.descr);
  });
  console.log(total);
};
const object1 = { description: "Burger", price: 11.99 };
const object2 = { description: "Fries", price: 1.99 };
const object3 = { description: "Fish", price: 21.99 };
const object4 = { description: "Falafel", price: 10.99 };
logReceipt(object1, object4, object2);

class Spaceship {
  constructor(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
  }
  accelerate() {
    const { name, topSpeed } = this;
    console.log(`${name}${topSpeed}`);
  }
}

const starLord = new Spaceship("StarLord", "140,000mph");
const lightningMcQueen = new Spaceship("LightningMcQueen", "198mph");

console.log(`starLord${starLord} moving to ${topSpeed}`);
