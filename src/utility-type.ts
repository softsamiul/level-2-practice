{
  // utility types

  // pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contact: number;
  };

  type name = Pick<Person, "name">; // picking name type from Person
  type nameAge = Pick<Person, "name" | "age">;

  // Omit
  type Contact = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PartialPerson = Partial<Person>;

  // read only
  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "mr x",
    age: 22,
    contact: 123231,
  };

  //person1.name = ad // return a error

  // record
  type Obj = {
    a: string;
    b: string;
  };

  type MyObj = Record<string, string>;
  const emptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    name: "ae",
    ds: "qwerw",
  };
}
