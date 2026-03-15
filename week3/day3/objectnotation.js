let myObj = {
  key: 'bubbles',
  address: '123 main street',
  isCool: true,
  age: 81,
  money: null,
  car: undefined,
  date: new Date(),

  walk: function () {
    console.log('one step at a time');
  }
};

// myObj.walk(); // "one step at a time"
// console.log(myObj);

// converts JS Object to JSON
myJson = JSON.stringify(myObj, null, 2);

console.log(myJson);

// converts JSON to JS Object
myJsonObj = JSON.parse(myJson);

console.log(myJsonObj);

let myStr =
  '{"key": "bubbles", "address": "123 main street","isCool": true, age: 81, money: null, car: undefined, date: new Date(), }';
myStr.key; // undefined
