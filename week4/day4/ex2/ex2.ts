class Person2 {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string,
    readonly age: number
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Define a subclass Student that extends Person and includes a protected property studentID.

class Student extends Person2 {
  constructor(
    ssn: string,
    firstName: string,
    lastName: string,
    age: number,
    protected studentID: number
  ) {
    super(ssn, firstName, lastName, age);
    this.studentID = studentID;
  }
}
