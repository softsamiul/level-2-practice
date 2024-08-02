{
  // access modifier
  /*
  public - by default
  readonly --> not editable
  private - can edit within that class bot editable from outside and also will not inherit to its child class
  protected - this will inherit to it's child and will be editable within the class only 

  */
  class BankAccount {
    readonly id: number;
    name: string;
    // private _balance: number;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    updateBalance(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  //   class StudentsAccount extends BankAccount{
  //     test(){
  //         this.
  //     }
  //   }

  const goribManuserAc = new BankAccount(1, "mr gorib", 12);
  console.log(goribManuserAc);
  goribManuserAc.updateBalance(11);
  console.log(goribManuserAc);
  console.log(goribManuserAc.getBalance());
}
