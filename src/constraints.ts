{
  // constraints -----------

  // Function with Generic
  const addCourse = <T extends { id: number; name: string; dept: string }>(
    student: T
  ) => {
    const course = "Next Level";
    return {
      ...student,
      course,
    };
  };

  const studentObj = {
    id: 123,
    name: "Mr x",
    dept: "CSE",
  };

  const studentWithCourse = addCourse<{
    id: number;
    name: string;
    dept: string;
  }>(studentObj);

  //   const std = addCourse({name:'x'}) // - will return a error coz we constraints this like we have to send at least that three type , we can't send any random object as student

  type Fruits = {
    name: string;
    season: string;
  };

  type Owner = "name" | "season";
  type Owner2 = keyof Fruits; // creating union type with they keys of that object fruits

  const res: Owner = "name";
  const res2: Owner2 = "season";

  const student = {
    id: 2,
    name: "Mr X",
  };

  const getPropertyValue = <T, X extends keyof T>(obj: T, key: X) => {
    return obj[key];
  };

  const resx = getPropertyValue(student, "id");
}
