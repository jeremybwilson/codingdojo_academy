// Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4] 
// Use the Rest element 
// const str = `[head, tail] = [1, 2, 3, 4]`;

const numbers = [1, 2, 3, 4];
const nums = [ begin, ...end ] = numbers;

console.log(begin); // should output 1
console.log(end); // should output [2, 3, 4] 

const str = [ head, ...tail ] = [1, 2, 3, 4];

console.log(head); // should output 1
console.log(tail); // should output [2, 3, 4] 