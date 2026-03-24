import { API_KEY } from './config.js';

fetch(`https://api.example.com?key=${API_KEY}`)
  .then((res) => res.json())
  .then((data) => console.log(data));
