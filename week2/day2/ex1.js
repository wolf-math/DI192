// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

function personAge(myAge) {
  const mumAge = myAge * 2;
  const dadAge = mumAge * 1.2;
  console.log(`My mum is ${mumAge}`);
  console.log(`My dad is ${dadAge}`);
}

const userage = prompt('How old are you?');
personAge(userage);

// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. In the global scope, console.log the result of the function

function personAge2(myAge) {
  return `My mum is ${myAge * 2}`;
}

const userage2 = prompt('How old are you?');
console.log(personAge2(userage2));
