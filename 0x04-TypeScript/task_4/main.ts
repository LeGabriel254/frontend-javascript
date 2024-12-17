/// <reference path="@/Cpp.ts" />
/// <reference path="./Java.ts" />
/// <reference path="./React.ts" />

// Teacher object
const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// Cpp subject
console.log("C++");
Subjects.cpp.setTeacher = cTeacher;
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

// Java subject
console.log("Java");
Subjects.java.setTeacher = cTeacher;
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

// React subject
console.log("React");
Subjects.react.setTeacher = cTeacher;
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
