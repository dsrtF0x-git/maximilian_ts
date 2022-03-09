// abstract class Department {
//   protected employees: string[] = [];
//   private m: string;

//   constructor(private id: string, private name: string) {
//     this.m = "14";
//   }

//   describe(this: Department) {
//     console.log("Department: " + this.name);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInfo() {
//     console.log(this.employees);
//   }
// }

// class ITDepartment {
//   private instance: ITDepartment;
//   private constructor() {}

//   static getInstance(): ITDepartment {
//     if (!ITDepartment.instance) {
//       ITDepartment.instance = new ITDepartment();
//     }
//     return ITDepartment.instance;
//   }
// }
// acc.printEmployeeInfo();
// acc.employees = [];
// acc.printEmployeeInfo();

// const itDep = new ITDepartment("2", "12");
// itDep.printEmployeeInfo();
