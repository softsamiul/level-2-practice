{
  // oop - inheritance
  class Parent {
    constructor(public name: string, public age: number) {}
  }
  class Teacher extends Parent {
    constructor(
      public name: string,
      public age: number,
      public designation: string
    ) {
      super(name, age);
    }
    getSleep(numOfHr: number) {
      console.log(`${this.name} will sleep for ${numOfHr} hour`);
    }
    getDesignation() {
      console.log(`${this.name} is a ${this.designation}`);
    }
  }

  const teacher1 = new Teacher("Mr Teacher", 12, "Teacher");

  class Student extends Parent {
    constructor(name: string, age: number, public roll: number) {
      super(name, age);
    }
  }

  const std = new Student("mrx", 12, 12);
}
