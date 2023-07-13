
interface TtwoSum {
  num1: number,
  num2: number,
  message?: string
}

export const twoSum = (num1: number, num2: number, message?: string) => {
  return(num1 + num2)
}

//other way to do it
// export const  TwoSum2 = (obj: TtwoSum) => {
//   return console.log(`${obj.message} ${obj.num1 + obj.num2} `)
// }