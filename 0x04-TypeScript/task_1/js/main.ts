interface Teacher{
  firstName:string,
  fullTimeEmployee:boolean,
  lastName:string,
  location:string,
  contract:false
 }
 
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors{
  firstName:string,
  lastName:string,
  location:string,
  fullTimeEmployee:boolean,
  numberOfReports:number
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Define the interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implemented the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe"));

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface for the class methods
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interfaces
class Student implements StudentInterface {
  private firstName: string;
  private lastName: string;


  // Constructor that initializes firstName and lastName
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that returns the string "Currently working"
  workOnHomework(): string {
    return "Currently working";
  }
  // Method that returns the firstName of the student
  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student: StudentInterface = new Student("John", "Doe");

console.log(student.workOnHomework());
console.log(student.displayName());    

