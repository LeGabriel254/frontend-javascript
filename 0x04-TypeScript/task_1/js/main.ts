interface Teacher{
  firstName:string,
  fullTimeEmployee:boolean,
  lastName:string,
  location:string,
  contract:false
 }
 
const teacher: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher);

interface Directors{
  firstName:string,
  lastName:string,
  location:string,
  fullTimeEmployee:boolean,
  numberOfReports:number
}

const director: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director);

{
  const printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  console.log(printTeacher("John", "Doe"));
}

// Interface to describe the constructor
interface IStudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface to describe the StudentClass
interface IStudent {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements IStudent {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: IStudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

