{
  // mapped types
  const arrOfNums: number[] = [1, 2];

  const arrOfStr: string[] = arrOfNums.map((item) => item.toString());

  type AreaNums = {
    width: number;
    height: number;
  };

  // look up type
  type Height = AreaNums["height"];

  // Making type using mapping
  //   type AreaString = {
  //    [key in keyof AreaNums]: string;
  //   };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "10",
    width: 50,
  };
}
