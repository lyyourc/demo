module.exports = `const tokenizer = (
  input = ''
) => {
  const newInput = input.replace(/\s/g, '')
  const tokens = []
  let current = 0

  while (current < newInput.length) {
    let char = newInput[current]

    if (char === '(' || char === ')') {
      tokens.push({
        type: 'paren',
        value: char,
      })

      current++

      continue
    }

    const OPERATORS = /\+|-|\*|\//
    if (OPERATORS.test(char)) {
      tokens.push({
        type: 'operator',
        value: char,
        priority: /\*|\//.test(char) ? 1 : 0,
      })

      current++

      continue
    }

    const NUMBERS = /\d/
    if (NUMBERS.test(char)) {
      let value = ''
      while (NUMBERS.test(char)) {
        value += char
        char = newInput[++current]
      }

      tokens.push({
        type: 'number',
        value,
      })

      continue
    }

    throw new TypeError('Sorry, I dont know this char :(', char)
  }

  return tokens
}
`

// module.exports = tokenizer
