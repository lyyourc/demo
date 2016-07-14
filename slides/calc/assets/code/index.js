module.exports = `const Stack = require('./util/Stack')
const tokenizer = require('./tokenizer')
const toRPN = require('./toRPN')

const calc = (
  input = ''
) => {
  const tokens = tokenizer(input)
  const rpn = toRPN(tokens)
  const operandStack = new Stack()

  rpn.forEach(token => {
    const { type, value } = token

    if (type === 'number') {
      operandStack.push(value)
      return
    }

    if (type === 'operator') {
      const num2 = Number(operandStack.pop())
      const num1 = Number(operandStack.pop())
      let newNum = 0

      switch (value) {
        case '+':
          newNum = num1 + num2
          break

        case '-':
          newNum = num1 - num2
          break

        case '*':
          newNum = num1 * num2
          break

        case '/':
          newNum = num1 / num2
          break

        default:
      }

      operandStack.push(newNum)
    }
  })

  return operandStack.pop() || NaN
}
`

// module.exports = calc
