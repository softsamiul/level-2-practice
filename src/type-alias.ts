{
  // type alias
  const std1: {
    name: string;
    age: number;
    id: number;
    contact: number;
  } = {
    name: "X",
    age: 20,
    id: 21,
    contact: 13241342,
  };

  const std2: {
    name: string;
    age: number;
    id: number;
  } = {
    name: "Y",
    age: 32,
    id: 22,
  };

  // instead of declare type everytime we can use type alias like below example

  type Student = {
    name: string;
    age: number;
    id: number;
    contact?: number;
  };

  type UserName = string;
  type IsAdmin = boolean;

  type AddFunctionType = (n1: number, n2: number) => number;

  const std3: Student = {
    name: "Z",
    age: 21,
    id: 34,
  };
  const isadmin: IsAdmin = true;
  const username: UserName = "Mr T";

  const add: AddFunctionType = (n1, n2) => n1 + n2;
}
