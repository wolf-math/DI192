function getRandomElement<T>(items: T[]): T {
  // <T> declares a generic type parameter.
  // It acts as a placeholder for whatever type the function is called with.

  // items: T[] means "an array of type T"
  // If you pass number[], then T becomes number
  // If you pass string[], then T becomes string
  // TypeScript infers T automatically based on the argument

  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

const numberArray: number[] = [42, 2701, 3.14];
// explicit generic
const explicitRes = getRandomElement<number>(numberArray);
// implicit generic
const implicitRes = getRandomElement(numberArray);

// Mixed types
const mixedArray: (string | boolean)[] = [true, 'hi', false, 'ahoy'];

const explicitMixRes = getRandomElement<string | boolean>(mixedArray);
const implicitMixRes = getRandomElement(mixedArray);

// Doesn't work because booleans are in the array
// const noGo = getRandomElement<string>(mixedArray);
