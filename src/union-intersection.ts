{
  // union type: It defines or with this symbole |
  type Frontend = "FrontEnd";
  type Backend = "Backend";
  type Developer = Frontend | Backend; // Used union type here acts like || in JS

  let developer: Developer = "FrontEnd";

  type FdDetail = {
    skills: string[];
    role: Frontend;
  };

  type BDetail = {
    skills: string[];
    role2: Backend;
  };

  type FullStacDev = FdDetail & BDetail; // used intersection type here act like && in JS

  const fullStacdDev: FullStacDev = {
    skills: ["HTML", "CSS", "Node"],
    role: "FrontEnd",
    role2: "Backend",
  };
}
