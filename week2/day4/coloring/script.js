const palette = document.getElementById('palette');
const canvas = document.getElementById('canvas');

const colors = [
  'darkred',
  'red',
  'darkorange',
  'orange',
  'goldenrod',
  'yellow',
  'darkgreen',
  'green',
  'darkturquoise',
  'turquoise',
  'darkblue',
  'midnightblue',
  'blue',
  'indigo',
  'darkviolet',
  'violet',
  'black',
  'white'
];

let theChosenColor;
let isDown = false;

// create color palette
for (let color of colors) {
  const swatch = document.createElement('div');
  swatch.className = 'color-swatch';
  swatch.style.backgroundColor = color;

  swatch.addEventListener('click', () => {
    theChosenColor = color;
  });

  palette.appendChild(swatch);
}

// calculate the size of the canvas
const width = Math.floor(canvas.clientHeight / 10); // width in px
const height = Math.floor(canvas.offsetWidth / 10); // height in px
// create the canvas
for (let i = 1; i <= height * width; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';

  cell.addEventListener('click', (e) => {
    e.preventDefault();
    cell.style.backgroundColor = theChosenColor;
  });

  cell.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDown = true;
  });

  cell.addEventListener('mouseup', (e) => {
    e.preventDefault();
    isDown = false;
  });

  cell.addEventListener('mouseover', (e) => {
    e.preventDefault();
    if (isDown) {
      cell.style.backgroundColor = theChosenColor;
    }
  });
  canvas.appendChild(cell);
}

const clear = document.getElementById('clearbutton');

const cells = document.querySelectorAll('.cell');

clear.addEventListener('click', (e) => {
  e.preventDefault();
  for (let cell of cells) {
    cell.style.backgroundColor = 'white';
  }
});
