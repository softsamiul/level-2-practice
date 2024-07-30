{
  // type assertion
  let anything: any;
  anything = "Next l D";
  anything = 2;
  // (anything as number)  // --->this is called as type assertion

  const kgToGm = (value: number | string): string | number | undefined => {
    if (typeof value === "string") {
      const convertedval = parseFloat(value) * 1000;
      return `The result is ${convertedval}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const res1 = kgToGm(1) as number;
  const res2 = kgToGm("1") as string;

  console.log({ res1 });
  console.log({ res2 });

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
