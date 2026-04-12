const greeting = function (name) {
  console.log(`Hello ${name}, welcome to NodeJS`);
};

const food = 'sandwich';

// export as object
module.exports = { greeting, food };

// export inline
module.exports.car = 'Pugeot';
