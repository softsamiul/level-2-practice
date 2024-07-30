{
  // nullable type | unknown type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("there is nothig to search");
    }
  };
  searchName(null);

  const getSpeedMeterPerSec = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m/s`);
    }
    if (typeof value === "string") {
      const [res, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(res) * 1000) / 3600;
      console.log(res);
      console.log(`The speed is ${convertedSpeed} m/s`);
    } else {
      console.log("wrong input");
    }
  };

  // getSpeedMeterPerSec(`1000 km/hr`);
  getSpeedMeterPerSec(null);

  // never ---> will never return anyting from that function
  const throwError = (msg: string): never => {
    throw Error(msg);
  };
  // throwError("This is custom error");

  //
}
