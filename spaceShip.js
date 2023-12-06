// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console
//   `${name} moving to ${topSpeed}`
class Spaceship {
  constructor(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
  }
  accelerate() {
    const { name, topSpeed } = this;
    console.log(`${name} moving to ${topSpeed}`);
  }
}

const starLord = new Spaceship("StarLord", "Light Speed");
const lightningMcQueen = new Spaceship("LightningMcQueen", "198mph");

// 2. Call the constructor with a couple ships,
// and call accelerate on both of them.

console.log(`starLord${starLord} moving to ${topSpeed}`);
console.log(`lightningMcQueen${LightningMcQueen} moving to ${topSpeed}`);
