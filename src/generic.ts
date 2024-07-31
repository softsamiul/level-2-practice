{
  // generic

  //  Normal type alias
  const rollNumbers: number[] = [1, 2, 3, 4];
  const mentors: string[] = ["Mr X", "Mr Y"];
  const boolArray: boolean[] = [true, false, true];

  // generic types
  const rollNumbers2: Array<number> = [1, 2, 3, 4];
  const mentors2: Array<string> = ["mr x"];
  const boolArr: Array<boolean> = [true];

  // reusable generic type
  type GenericArraay<T> = Array<T>;
  const roolNumber: GenericArraay<number> = [1, 2, 3];
  const mentors3: GenericArraay<string> = ["Mr x"];
  const boolAr: GenericArraay<boolean> = [true];

  // generic array of object
  const testArrObj: GenericArraay<{ name: string; age: number }> = [
    {
      name: "Mr X",
      age: 3,
    },
    {
      name: "Mr y",
      age: 2,
    },
  ];

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const tupleArr: GenericTuple<string, string> = ["Mr X", "Mrs Y"];

  const dummyTuple: GenericTuple<
    number,
    { name: string; gender: "male" | "female" }
  > = [1234, { name: "Mr X", gender: "male" }];
}
