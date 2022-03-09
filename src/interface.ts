type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: number;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["S"],
  startDate: 2,
};

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      return animal.flyingSpeed;
    case "horse":
      return animal.runningSpeed;
    default:
      return 0;
  }
}

interface ErrorContainer {
  [prop: string]: string;
}
