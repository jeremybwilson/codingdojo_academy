// Fibonacci - Create a function to generate Fibonacci numbers.  
// In this famous mathematical sequence, each number is the sum of the previous two, 
// starting with values 0 and 1.  
// Your function should accept one argument, an index into the sequence 
// (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).
// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), 
// or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  
// Do this without using recursion first.  If you don't know what a recursion is yet, 
// don't worry as we'll be introducing this concept in Part 2 of this assignment.
let countDownFromNum = (num) => {
  if(num === 0) return;
  console.log(num);
  countDownFromNum(num - 1)

}
// Test cases
// countDownFromNum(10);

let categories = [
  {id: 'animals', 'parent': null},
  {id: 'mammals', 'parent': 'animals'},
  {id: 'dogs', 'parent': 'mammals'},
  {id: 'cats', 'parent': 'mammals'},
  {id: 'chihuaha', 'parent': 'dogs'},
  {id: 'labrador', 'parent': 'dogs'},
  {id: 'persian', 'parent': 'cats'},
  {id: 'siamese', 'parent': 'cats'},
  ]

let makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => 
      node[c.id] = makeTree(categories, c.id))
  return node;
}

console.log(
  JSON.stringify(
    makeTree(categories, null), null, 2)
);