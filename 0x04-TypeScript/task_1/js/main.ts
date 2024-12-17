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

console.log(teacher3);

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
console.log(director1);

{
  const printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  console.log(printTeacher("John", "Doe")); // Output: J. Doe
}
