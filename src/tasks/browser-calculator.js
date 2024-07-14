let num1 = parseFloat(prompt("Write your first number"))
let on = true
const operations = {
  1: (a, b) => a + b,
  2: (a, b) => a - b,
  3: (a, b) => a * b,
  4: (a, b) => a / b
}

const calculator = num1 => {
  while (on) {
    let op = parseInt(prompt(`
    Choose the number of the operation:
    1 | Add
    2 | Substract
    3 | Multiply
    4 | Divide
    5 | Out`))
    let num2 = parseFloat(prompt("Write another number"))
    if (op != 5) {
      num1 = operations[op](num1, num2)
      alert(`Result: ${num1}`)
    } else {
      on = false
      return on
    }
  }
}

calculator(num1)