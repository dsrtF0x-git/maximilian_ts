// function Logger() {
//   return function (constructor: Function) {
//     console.log("Logging from decorator");
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("From WithTemplate function");
//   return function (constructor: Function) {
//     const hookEl = document.getElementById(hookId);
//     // const p = new constructor();
//     console.log("From WithTemplate");
//     if (hookEl) {
//       hookEl.innerHTML = template;
//     }
//   };
// }

// @WithTemplate("<h1>My person object</h1>", "app")
// class Person {
//   name = "Serhii";

//   constructor() {
//     console.log("Creating person");
//   }
// }

// // const p = new Person();

// // console.log(p);

// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator!");
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Method decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter decorator");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log2
//   setPrice(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price!");
//     }
//   }

//   getPriceWithTax(@Log4 tax: number) {
//     return this._price + 1 * tax;
//   }
// }

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    enumerable: false,
    configurable: true,
    get() {
      return originalMethod.bind(this);
    },
  };

  return adjDescriptor;
}

class Printer {
  message = "Test message to verify Autobind decorator";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.getElementById("main-button");
button?.addEventListener("click", printer.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...registeredValidators[target.constructor.name][propName],
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...registeredValidators[target.constructor.name][propName],
      "positive",
    ],
  };
}

function validate2(obj: any): boolean {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const form = document.querySelector("form")!;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title") as HTMLInputElement;
  const price = document.getElementById("price") as HTMLInputElement;

  const titleValue = title.value;
  const priceValue = +price.value;

  const createdCourse = new Course(titleValue, priceValue);
  if (!validate2(createdCourse)) {
    alert("Invalid input!");
    return;
  }
});
