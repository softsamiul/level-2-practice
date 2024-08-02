{
  // statics in OOP ---> wont change in memory
  class Counter {
    static count: number = 0;

    static increment() {
      Counter.count = Counter.count + 1;
      return Counter.count;
    }
    decrement() {
      Counter.count = Counter.count - 1;
      return Counter.count;
    }
  }

  const instance1 = new Counter(); // --> memory diff from instance 2
  const instance2 = new Counter(); // --> memory diff from instance 1

  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(instance2.decrement());
  console.log(instance2.decrement());
  console.log(instance2.decrement());
}
