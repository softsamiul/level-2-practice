{
  // oop class
  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`This ${this.species} will sound: ${this.sound}`);
    }
  }

  const dog = new Animal("Dogy", "dog", "Ghew");
  dog.makeSound();

  // using parameter property to use short hand syntax of declaring class
  class Human {
    constructor(public name: string, public age: number, public dob: string) {}

    printAge() {
      console.log(`${this.name} is a humain with age: ${this.age}`);
    }
  }

  const newMan = new Human("mr x", 23, "3/04/2029");

  newMan.printAge();
}
