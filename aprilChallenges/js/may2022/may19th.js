console.log('May 19th, 2022')

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// prep:
    // p: three paramters - length, width, height  
    // r: return length*width*height
    // e: 
        // 1) 1, 2, 2 = 4
        // 2) 6.3, 2, 5 = 63
    // p: 
        // 1 - take in my parameters. multiply by each other one after another
        // 2 - return the given value


class Kata {
    static getVolumeOfCuboid(length, width, height) {
      const vol = length * width * height
      return vol
    }
  }