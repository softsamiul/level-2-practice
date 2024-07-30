{
  // Ternary operator ---> Optional Chaining ---> Nullish coalescing operator

  const age: number = 20;
  age >= 18 ? console.log("Hi") : console.log("Bye"); // ternary operator

  // nullish coalescing operator
  // if we need to make a decision based on null and undefined values then use it

  const isAuthenticated = null;
  const res1 = isAuthenticated ?? "Guest"; // used nullish coalescing operator here
  console.log(res1);
}
