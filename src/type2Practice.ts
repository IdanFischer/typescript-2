interface TtwoSum {
  num1: number,
  num2: number,
  message?: string
}

export const twoSum = ({num1, num2, message}: TtwoSum) => {
  return console.log(`${message} ${num1 + num2}`)
}

