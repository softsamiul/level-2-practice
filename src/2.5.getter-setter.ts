{
  // getter - setter
  class BankAccount {
    readonly id: number;
    name: string;
    // private balance: number;
    balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    // updateBalance(amount: number) {
    //   this.balance = this.balance + amount;
    // }
    // getBalance() {
    //   return this.balance;
    // }

    // getter
    get getBalance() {
      return this.balance;
    }

    // setter
    set deposit(amount: number) {
      this.balance = this.balance + amount;
    }
  }

  const goribManuserAc = new BankAccount(1, "mr gorib", 12);
  //   console.log(goribManuserAc);
  //   goribManuserAc.updateBalance(11);
  //   console.log(goribManuserAc);
  //   console.log(goribManuserAc.getBalance());
  goribManuserAc.deposit = 20;
  const myBalance = goribManuserAc.balance;

  console.log(myBalance);
}
