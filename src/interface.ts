{
  // interface
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string }; // example of intersection

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User1 {
    role: string;
  } // same thing like intersection but in case of interface we have to extends that origin interface which we want to extend

  const user: UserWithRole2 = {
    name: "something",
    age: 1,
    role: "SDE",
  };

  // diff between interface and interface
  // --- we can use type for every type of data like primitive and non-primitive but interface we can use only for non-primitive type data. So Use type of primitive and use interface for non-primitive type data.

  //js --object, array --object, function --object
  type RollNumber = number[];
  interface RollNumber2 {
    [index: number]: number;
  }
  const rollNumber: RollNumber = [1, 2, 3]; // used type alias
  const rollNumber2: RollNumber2 = [1, 2, 3]; // USED INTERFACE

  // defining inteface for function
  interface Add {
    (n1: number, n2: number): number;
  }

  const add: Add = (n1, n2) => {
    return n1 + n2;
  };

  // recomonded: Use type alias for all places except object, for object use interface so your code syntax will be cleaner
}
