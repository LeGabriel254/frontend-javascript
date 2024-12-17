// DirectorInterface with 3 expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with 3 expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create an employee based on the salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Type predicate function to check if the employee is a Director
function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: DirectorInterface | TeacherInterface): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Example Usage:
const employee1 = createEmployee(600); 
executeWork(employee1);  

const employee2 = createEmployee(400); 
executeWork(employee2); 
//String Literal type
type Subjects = "Math" | "History"


//define teachclass
function teachClass(todayClass: Subjects): string {
 if(todayClass === "Math"){
  return"Teaching Math";
 } else if(todayClass === "History"){
  return"Teaching History"
 }

};
console.log(teachClass("Math"));
console.log(teachClass("History"));