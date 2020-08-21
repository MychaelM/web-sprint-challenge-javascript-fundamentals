// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    let lw = this.length * this.width;
    let lh = this.length * this.height;
    let wh = this.width * this.height;

    return 2 * (lw + lh + wh);
  }
}

const cuboid = new CuboidMaker(4, 5, 5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(length, width, height) {
    super(length, width, height);
  }
  volume(){
    return Math.pow(this.length, 3);
  }
  surfaceArea() {
    return 6 * (this.length * this.length);
  }

}

const cube = new CubeMaker(5, 5, 5);

 console.log(cube.volume()); // 125
 console.log(cube.surfaceArea()); // 150