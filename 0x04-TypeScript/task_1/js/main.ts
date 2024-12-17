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