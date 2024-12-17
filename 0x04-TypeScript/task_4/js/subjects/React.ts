/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration Merging: Add experienceTeachingReact to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Rename the class to ReactSubject
  export class ReactSubject extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
