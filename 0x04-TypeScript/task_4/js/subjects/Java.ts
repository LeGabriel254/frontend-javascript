/// <reference path="./Subject.ts" />

namespace Subjects{
    // Declaration Merging: Add experienceTeachingJava to Teacher interface
  export interface Teacher{
    experienceTeachingJava?:number
  }
  // Java class extending Subject
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}