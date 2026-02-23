const anObj = {
  key1: 'val1',
  key2: 'val2',
  key3: {
    sandwich: 'pastrami on rye'
  }
  // ...
};

anObj.key1; // val1
anObj.key3; // {sandwich: 'pastrami on rye'}
anObj.key3.sandwich; // pastrami on rye

anObj.key3.sushi = 'salmon';
anObj.key2 = 'baloney';

// {
//   key1: 'val1',
//   key2: 'baloney',
//   key3: {
//     sandwich: 'pastrami on rye',
//     sushi: 'salmon'
//   }
//   // ...
// };
