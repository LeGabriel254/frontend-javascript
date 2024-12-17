/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    // Attribute 'teacher' implements the Teacher interface
     teacher: Teacher;

    // Setter method to assign a teacher
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
