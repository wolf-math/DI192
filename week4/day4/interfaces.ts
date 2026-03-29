// @ts-ignore
function GetFullNameNoTS(person) {
  return `${person.firstName} ${person.lastName}`;
}

function getFullName(person: { firstName: string; lastName: string }): string {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(getFullName(person)); // Output: John Doe
