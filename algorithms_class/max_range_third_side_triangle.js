// Create a function that finds the maximum 
// range of a triangle's third edge, 
// where the side lengths are all integers.

const nextEdge = (side1, side2) => {
  if(side1 <= 0 || side2 <= 0){
    console.log(`Not a valid triangle`);
  }
  
  let min_length = (Math.max(side1, side2)) - (Math.min(side1, side2) + 1);
  let max_length = side1 + side2 + 1;
  
  console.log(min_length, max_length);
  return max_length;
}

console.log(nextEdge(10, 15));