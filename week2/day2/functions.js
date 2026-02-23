const favorite_food = 'Sushi';

function greetUser(greeting = '', username = 'user') {
  const favorite_drink = 'Coke';
  if (greeting) {
    console.log(`${greeting}, ${username}!`);
  } else {
    console.log(`Go away, ${username}`);
  }
  console.log(`My favorite food is ${favorite_food}`);
  console.log(`My favorite drink is ${favorite_drink}`);
}

console.log(favorite_food);
// This is in local scope of the function
// It will break our code
// console.log(favorite_drink);

greetUser('Greetings', 'fred');
greetUser('Shalom');
greetUser('', 'Sydney');
