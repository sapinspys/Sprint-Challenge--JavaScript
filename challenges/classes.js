// 1. Copy and paste your prototype in here and refactor into class syntax.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMakerES6 that accepts properties for length, width, and height
*/

class CuboidMakerES6 {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
  }
  
  /* == Step 2: Volume Method ==
    Create a method using CuboidMakerES6's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
  
  CuboidMakerES6.prototype.volume = function () {
    return this.length*this.width*this.height
  }
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMakerES6's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
  
  CuboidMakerES6.prototype.surfaceArea = function () {
    return 2*(this.length*this.width+this.length*this.height+this.width*this.height)
  }
  
  /* == Step 4: Create a new object that uses CuboidMakerES6 ==
    Create a cuboid object that uses the new keyword to use our CuboidMakerES6 constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  const cuboidES6 = new CuboidMakerES6({
    length: 4, 
    width: 5,
    height: 5
  });
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboidES6.volume()); // 100
  console.log(cuboidES6.surfaceArea()); // 130
  

// Stretch Task: Extend the base class CuboidMakerES6 with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMakerES6.  Test your work by logging out your volume and surface area.

class CubeMaker {
    constructor(attributes) {
        this.sideLength = attributes.sideLength;
    }
  }
  
  CubeMaker.prototype.volume = function () {
    return this.sideLength**3
  }
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMakerES6's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
  
  CubeMaker.prototype.surfaceArea = function () {
    return 6*this.sideLength**2
  }
  
  /* == Step 4: Create a new object that uses CuboidMakerES6 ==
    Create a cuboid object that uses the new keyword to use our CuboidMakerES6 constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  const cube = new CubeMaker({sideLength: 5});
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cube.volume());
  console.log(cube.surfaceArea()); 

  // DONE