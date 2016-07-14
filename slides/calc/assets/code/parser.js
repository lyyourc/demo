module.exports = `const Stack = require('./util/Stack')

const parser = (
  tokens = []
) => {
  const operandStack = new Stack()

  tokens.forEach(token => {
    const { type, value } = token

    if (type === 'number') {
      operandStack.push(token)
    }

    if (type === 'operator') {
      const node = {
        type: 'Expression',
        name: value,
        right: operandStack.pop(),
        left: operandStack.pop(),
      }

      operandStack.push(node)
    }
  })

  return {
    type: 'Program',
    body: operandStack.pop(),
  }
}
`
// module.exports = parser
