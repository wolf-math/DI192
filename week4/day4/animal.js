class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    super.speak(); // optional: call parent behavior
    console.log(`${this.name} barks`);
  }
}

let phil = new Animal('Philip');
phil.speak();

let ralph = new Dog('Ralph');
ralph.speak();
