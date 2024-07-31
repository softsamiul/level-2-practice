{
  // Asynchronous TS

  // promise
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "null";

      if (data) {
        resolve(data);
      } else {
        reject("Failed To fetch data");
      }
    });
  };

  // calling createP romise function

  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    console.log({ data });
    return data;
  };

  //   showData();

  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const fetchData = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
    return data;
  };

  const todos = fetchData();
}
