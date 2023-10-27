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
    console.log(`${name}${topSpeed}`);
  }
}

const starLord = new Spaceship("StarLord", "140,000mph");
const lightningMcQueen = new Spaceship("LightningMcQueen", "198mph");

// 2. Call the constructor with a couple ships,
// and call accelerate on both of them.

console.log(`starLord${starLord} moving to ${topSpeed}`);
