let course: string = "Next Level Web Dev";
console.log(course);

// basic Data types
let myName: string = "Samiul Islam";
let roll: number = 12;
let isAdmin: boolean = true;
let x: undefined = undefined;
let y: null = null;

// Array
let friends: string[] = ["samiul", "nasibul"];
let rollNumbers: number[] = [1, 12, 3];

// Tuple - tuple is also a array type with strictly maintaining order and type of values
let stdDetail: [string, number] = ["Samiul", 24];

// Reference Type ---> Object
const user: {
  readonly company: string;
  role: "Software Engineer"; // literal type
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarrid?: boolean;
} = {
  firstName: "Mr X",
  middleName: "Modle",
  lastName: "Persian",
  isMarrid: true,
  role: "Software Engineer",
  company: "MI",
};

user.company = "something"; // return a error Cannot assign to 'company' because it is a read-only property.
