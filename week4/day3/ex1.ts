// type inference
let coolguy = 'Xiao';
coolguy = 'Marc';

// coolguy = 42;

// 1. Type Inference: Create a variable greeting with a string value and let TypeScript infer its type.

let greeting = 'Ahoy!';

// 2. Type Annotations: Create a function subtract that takes two numbers as arguments and returns their difference. Use type annotations for both the parameters and the return type.

function subtract(a: number, b: number): number {
  return a - b;
}

// Bonus: Try changing the inferred type variable to a different type (e.g., assign a number to greeting) and observe the TypeScript error

greeting = 'Salutations!';
// greeting = true
