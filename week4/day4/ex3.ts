// Define a Car Interface

// Task: Create an interface Car with properties make, model, and year (all strings). Then, write a function getCarInfo that takes a Car object and returns a formatted string with the car's details.

interface Car {
  make: string;
  model: string;
  year: number;
  heatedSeats?: boolean;
}

function getCarInfo(car: Car): string {
  return `${car.make} ${car.model} ${car.year} ${car?.heatedSeats}`;
}

let jCar = {
  make: 'BMW',
  model: 'x7',
  year: 2025,
  heatedSeats: true
};

let aCar = {
  make: 'Ford',
  model: 'Taurus',
  year: 2003
};

getCarInfo(jCar); // BMW x7 2025 true
getCarInfo(aCar); // Ford Taurus 2003
