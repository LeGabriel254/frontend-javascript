// DirectorInterface with 3 expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;  // Correct method name
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

  workDirectorTasks(): string {  // Correct method name
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

// Example Usage:
const employee1 = createEmployee(600);
console.log(employee1.workFromHome());  // "Working from home"
console.log(employee1.getCoffeeBreak()); // "Getting a coffee break"
console.log(employee1.workDirectorTasks()); // "Getting to director tasks"

const employee2 = createEmployee(400);
console.log(employee2.workFromHome());  // "Cannot work from home"
console.log(employee2.getCoffeeBreak()); // "Cannot have a break"
console.log(employee2.workTeacherTasks()); // "Getting to work"
