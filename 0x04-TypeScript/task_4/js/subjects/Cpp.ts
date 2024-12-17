/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration Merging: Add experienceTeachingC to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Cpp class extending Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
    }
  
}