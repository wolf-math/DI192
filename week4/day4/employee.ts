abstract class Person3 {
  constructor(
    private firstName: string,
    private lastName: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Employee extends Person3 {
  static headcount: number = 0;
  constructor(
    firstName: string,
    lastName: string,
    private jobTitle: string
  ) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
    Employee.headcount++;
  }

  describe(): string {
    return super.describe() + ` I'm a ${this.jobTitle}.`;
  }
}

let john = new Employee('John', 'Doe', 'Full Stack Developer');
console.log(john.describe()); // This is John Doe. I'm a Full Stack Developer

// Define a subclass Manager that extends Employee and includes a private property department.

class Manager extends Employee {
  static departmentCount = 0;
  constructor(
    firstName: string,
    lastName: string,
    jobTitle: string,
    private department: string
  ) {
    super(firstName, lastName, jobTitle);
    this.department = department;
    Manager.departmentCount++;
  }

  describe(): string {
    return super.describe() + ` From the ${this.department} department.`;
  }

  public static getDepartmentCount(): number {
    return Manager.departmentCount;
  }
}

// firstName, lastName, jobTitle, department belongs to the instance
// headcount belongs to Employee & is shared to all instances
let ravite = new Manager('Ravite', 'ShemTov', 'Manager', 'database');
console.log(Employee.headcount); // 2

let aaron = new Manager('Aaron', 'Wolf', 'Teacher', 'Full Stack');
console.log(Employee.headcount); // 3
console.log(Manager.departmentCount); // 2

let xiao = new Employee('Xiao', 'Li', 'Student');
console.log(Employee.headcount); // 4
console.log(Manager.departmentCount); // 2

// let jingwen = new Person3('Jingwen', 'Peng')

// =================================

Math.PI; // static attribute on Math (3.14...)
Math.abs(44); // static method on Math (makes a number positive)
