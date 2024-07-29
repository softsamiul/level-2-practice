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

//user.company = "something"; // return a error Cannot assign to 'company' because it is a read-only property.

// -------- Learning Function --------
// Normal function
// Arrow function

function add(n1: number, n2: number): number {
  return n1 + n2;
}
add(1, 2);

const arrFunction = (n1: number, n2: number): number => {
  return n1 + n2;
};
arrFunction(2, 4);

//---- object ---> Function ---> method
const dummyUser = {
  name: "Mr X",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};
// array map with type
const arrN: number[] = [1, 2];
const newArrN: number[] = arrN.map((elem: number): number => elem * elem);

// --------- Spread and Rest Operator ---------
