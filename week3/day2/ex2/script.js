// get the navbar
const myDiv = document.getElementById('navBar');
// change the navbar id
myDiv.setAttribute('id', 'socialNetworkNavigation');

// create new li
const logout = document.createElement('li');
// text is "Logout"
logout.innerText = 'Logout';

// access the ul
const ul = myDiv.firstElementChild;
// add logout to the ul
ul.appendChild(logout);
