class Parent {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Child extends Parent {
  constructor(ssn: string, firstName: string, lastName: string) {
    super(ssn, firstName, lastName);
  }
}
