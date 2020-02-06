// Create a function that finds the maximum 
// range of a triangle's third edge, 
// where the side lengths are all integers.

const nextEdge = (side1, side2) => {
  let min_length = (Math.max(side1, side2)) - (Math.min(side1, side2) + 1);
  let max_length = side1 + side2 - 1;
  
  if(side1 <= 0 || side2 <= 0){  // Not a valid triangle 
    console.log(`Not a valid triangle`);
  } else if(min_length > max_length) {  // Not a valid triangle 
    console.log(`Not a valid triangle`);
  }
  
  console.log(min_length, max_length);
  return max_length;
}

console.log(nextEdge(10, 15));