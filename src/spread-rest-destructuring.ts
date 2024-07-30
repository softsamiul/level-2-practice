{
  // --------- Spread and Rest Operator and destructuring ---------
  const bros: string[] = ["Mr X", "Mr Y", "Mr Z"];
  const bros2: string[] = ["Mr A", "Mr B", "Mr C"];
  // bros.push(bros2) return a error Argument of type 'string[]' is not assignable to parameter of type 'string'
  bros.push(...bros2); // will return a new array with both array string

  const mentors1 = {
    frontend: "Sam",
  };
  const mentor2 = {
    backend: "Sun",
  };
  // spread
  const mentors = { ...mentors1, ...mentor2 };
  // rest
  const greet = (...participiants: string[]) => {
    participiants.forEach((p: string) => console.log(`Hi ${p}`));
  };

  // object destructuring
  const info: {
    nameInfo: string;
    job_detail: {
      role: "SDE";
      company: string;
    };
    age: number;
  } = {
    nameInfo: "Mr T",
    job_detail: {
      role: "SDE",
      company: "X",
    },
    age: 25,
  };

  const {
    nameInfo,
    age,
    job_detail: { role },
  } = info;

  // array destructring
  const myFds: string[] = ["X", "Y", "Z"];

  const [a, b, bestfriend] = myFds; // here Z will be bestfrind
}
