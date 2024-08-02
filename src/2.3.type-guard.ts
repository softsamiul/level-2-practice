{
  // type guard

  //type of --> works on runtime
  type Add = string | number;
  const add = (p1: Add, p2: Add): Add => {
    if (typeof p1 === "number" && typeof p2 === "number") {
      return p1 + p2;
    } else {
      return p1.toString() + p2.toString();
    }
  };

  const res1 = add(1, "2");

  // in guard
  type NUser = {
    name: string;
  };
  type AUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NUser | AUser) => {
    if ("role" in user) {
      console.log(`This ${user.name} is ${user.role}`);
    }
  };

  // instance of
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("make sound!");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBurk() {
      console.log("Burking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMewMew() {
      console.log("Mewing");
    }
  }

  const dog = new Dog("Dog bhai", "dog");
  const cat = new Cat("Cat bhai", "cat");

  // smartly we can check instanceof using function
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  // we can class as a type also
  //   const getAnimal = (animal: Animal) => {
  //     if (animal instanceof Dog) {
  //       animal.makeBurk();
  //     } else if (animal instanceof Cat) {
  //       animal.makeMewMew();
  //     } else {
  //       animal.makeSound();
  //     }
  //   };
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBurk();
    } else if (isCat(animal)) {
      animal.makeMewMew();
    } else {
      animal.makeSound();
    }
  };

  getAnimal(cat);
}
