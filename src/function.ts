{
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
}
