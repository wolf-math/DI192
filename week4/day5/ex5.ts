// Create a user-defined type guard function isEmployee that checks whether a given argument is an instance of Employee. Then, write another function evaluateRole that:

class Employee {
  isEligibleForPromotion() {
    return true;
  }
}

class Manager {
  isEligibleForBonus() {
    return true;
  }
}

// Uses the isEmployee type guard to check if the given argument is an Employee. If true, return "Employee is eligible for promotion" or "Employee is not eligible" based on an isEligibleForPromotion() method.

type Staff = Employee | Manager;

function isEmployee(person: any): person is Employee {
  return person instanceof Employee;
}

// If the argument is not an Employee, check if it is a Manager. If true, return "Manager is eligible for bonus" or "Manager needs evaluation" based on an isEligibleForBonus() method.

function isEligibleForBonus(person: Staff): string {
  if (isEmployee(person)) {
    if (person.isEligibleForPromotion()) {
      return 'Eligible for promition';
    } else {
      return 'Not eligible for promotion';
    }
  } else {
    if (person.isEligibleForBonus()) {
      return 'eligible for bonus';
    } else {
      return 'not eligible for bonus';
    }
  }
}
