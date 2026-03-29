class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(ssn: string, firstName: string, lastName: string, age: number) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public greet(): string {
    return `Hello, ${this.firstName}`;
  }
}

const marc = new Person('123-45-678', 'Marc', 'Soussand', 38);
marc.getFullName(); // returns "Marc Soussand"
console.log(marc.greet());
