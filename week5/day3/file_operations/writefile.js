const fs = require('fs');

const content = 'It is just about time for lunch';

fs.writeFile('output2.txt', content, (err) => {
  if (err) {
    console.error('Error', err);
    return;
  }
  console.log('File written successfully!');
});
