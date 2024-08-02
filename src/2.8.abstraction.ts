{
  // Abstraction - OOP

  interface vechile {
    startEngine(): void;
    move(): void;
    stopEngine(): void;
  }

  class Car implements vechile {
    startEngine() {
      console.log("Engine started!");
    }
    move() {
      console.log("Engine started moving...");
    }
    stopEngine(): void {
      console.log("Engine stopped!");
    }
  }

  // const toyota = new Car  ---> here we can't create any instance from a abstract class
  //   class Toyota extends Car {
  //   startEngine() {
  //     console.log("Engine started!");
  //   }
  //   move() {
  //     console.log("Engine started moving...");
  //   }
  //   stopEngine(): void {
  //     console.log("Engine stopped!");
  //   }
  //   }

  const toyota = new Car();

  //   console.log(toyota.startEngine());

  abstract class Car2 {
    abstract startEngine(): void;
    abstract move(): void;
    abstract stopEngine(): void;
  }

  class CarInstance extends Car2 {
    startEngine() {
      console.log("Engine started!");
    }
    move() {
      console.log("Engine started moving...");
    }
    stopEngine(): void {
      console.log("Engine stopped!");
    }
  }

  const honda = new CarInstance();
  honda.startEngine();
  honda.move();
  honda.stopEngine();
}
