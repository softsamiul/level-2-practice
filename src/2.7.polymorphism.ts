{
  // Ploymorphism - OOP
  class Person {
    getSleep() {
      console.log("slleping 8hr a day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("sleeping 6hr a day");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("sleeping 4hr a day");
    }
  }

  const getSleepingHours = (p1: Person) => {
    p1.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea() {
      return this.height * this.width;
    }
  }

  const getShapeArea = (p: Shape) => {
    console.log(p.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(4);
  const shape3 = new Rectangle(10, 8);

  getShapeArea(shape3);
}
