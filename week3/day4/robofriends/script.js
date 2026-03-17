const robots = [
  {
    id: 1,
    firstName: 'Marc',
    lastName: 'Soussand',
    username: 'MarcS',
    email: 'marc@sou.com',
    image: 'https://robohash.org/Marc%20Soussand?set=set5'
  },
  {
    id: 2,
    firstName: 'Jingwen',
    lastName: 'Peng',
    username: 'JingPeng',
    email: 'Jingwen@Peng.com',
    image: 'https://robohash.org/Jingwen%20Peng?set=set5'
  },
  {
    id: 3,
    firstName: 'Ravite',
    lastName: 'Shemtov',
    username: 'RevvUp',
    email: 'Ravite@Shemtov.com',
    image: 'https://robohash.org/Ravite%20Shemtov?set=set5'
  },
  {
    id: 4,
    firstName: 'Xiao',
    lastName: 'Li',
    username: 'Xiaoooo',
    email: 'Xiao@Li.com',
    image: 'https://robohash.org/Xiao%20Li?set=set5'
  },
  {
    id: 5,
    firstName: 'Chloie',
    lastName: 'Marratche',
    username: 'klowEE',
    email: 'Chloie@Marratche.com',
    image: 'https://robohash.org/Chloie%20Marratche?set=set5'
  },
  {
    id: 6,
    firstName: 'Sydney',
    lastName: 'Hoffman',
    username: 'Hoffstralia',
    email: 'Sydney@Hoffman.com',
    image: 'https://robohash.org/Sydney%20Hoffman?set=set5'
  },
  {
    id: 7,
    firstName: 'Natanel',
    lastName: 'Karp',
    username: 'Absent',
    email: 'Natanel@Karp.com',
    image: 'https://robohash.org/Natanel%20Karp?set=set5'
  },
  {
    id: 8,
    firstName: 'Nikol',
    lastName: 'Torban',
    username: 'Nikol',
    email: 'Nikol@Torban.com',
    image: 'https://robohash.org/Nikol%20Torban?set=set5'
  },
  {
    id: 9,
    firstName: 'Aaron',
    lastName: 'Wolf',
    username: 'WolfCodes',
    email: 'aaron@wolf.com',
    image: 'https://robohash.org/aaron%20wolf?set=set5'
  },
  {
    id: 10,
    firstName: 'Avner',
    lastName: 'Maman',
    username: 'mamamia',
    email: 'Avner@Maman.com',
    image: 'https://robohash.org/Avner%20maman?set=set5'
  }
];

const robotContainer = document.getElementById('robot-container');

function robotCardCreator(robotObj) {
  // create card
  const card = document.createElement('div');
  card.className = 'card';
  card.id = robotObj.id;

  // create image
  const image = document.createElement('img');
  image.className = 'robot-image';
  image.src = robotObj.image;

  // create username
  const username = document.createElement('h2');
  username.innerText = robotObj.username;

  // create full name
  const fullName = document.createElement('h2');
  fullName.innerText = `${robotObj.firstName} ${robotObj.lastName}`;

  // create email
  const email = document.createElement('h3');
  email.innerText = robotObj.email;

  // append elements to card
  card.appendChild(image);
  card.appendChild(username);
  card.appendChild(fullName);
  card.appendChild(email);

  return card;
}

function mapRobots(robotArray) {
  robotContainer.innerHTML = '';

  robotArray.map((robot) => {
    card = robotCardCreator(robot);
    robotContainer.appendChild(card);
  });
}

mapRobots(robots);

function filterBots(query) {
  return robots.filter((robot) => {
    return Object.values(robot).some((value) =>
      String(value).toLowerCase().includes(query.toLowerCase())
    );
  });
}

search = document.getElementById('search');

search.addEventListener('input', (e) => {
  e.preventDefault();
  const filtered = filterBots(e.target.value);
  mapRobots(filtered);
});
