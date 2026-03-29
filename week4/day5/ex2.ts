// Create two types TypeA and TypeB with different properties. Then create an intersection type of TypeA and TypeB and demonstrate that the order of the types doesn't matter.

type TypeA = {
  name: string;
};

type TypeB = {
  age: number;
};

type TypeAB = TypeA & TypeB;
type TypeBA = TypeB & TypeA;

let person1: TypeAB = {
  age: 35,
  name: 'Jingwen'
};

let person2: TypeBA = {
  name: 'Susan',
  age: 35
};
