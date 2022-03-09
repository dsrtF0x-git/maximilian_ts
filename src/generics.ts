// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done!");
//   }, 1000);
// });

function merge<T, U>(a: T, b: U) {
  return Object.assign(a, b);
}

const merge1 = merge({ age: 1 }, { name: "12" });
// merge1.

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(el: T): [T, string] {
  let descriptionText = "Got no value!";
  if (el.length > 0) {
    descriptionText = "There are " + el.length + " elements";
  }
  return [el, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

class DataStorage<T extends boolean | string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}
