function base() {
  firstStack(); // "second" then "first"
  console.log('base');
}

function firstStack() {
  secondStack(); // "second"
  console.log('first');
}

function secondStack() {
  console.log('second');
}

function anotherFunction() {
  console.log('Chaio');
}

anotherFunction(); // cannot run at the same time as base
base(); // "second" then "first" then "base"
