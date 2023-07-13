interface IEmployee {
  id: number
  fName: string
  lName: string
  age: number
  cool?: boolean
  apps?: { appName: string, production: boolean }
}

interface IManager extends IEmployee {
  salaryTier: number
}

let employee1: IEmployee = {
  id: 1,
  fName: "Idan",
  lName: "Fischer",
  age: 19,
  cool: true,
  apps: { appName: "Camlann Games", production: true }
}

let manager1: IManager = {
  id: 2,
  fName: "Placeholder",
  lName: "Man",
  age: 25,
  cool: false,
  apps: { appName: "Camlann Games", production: true },
  salaryTier: 3
}