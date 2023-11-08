const Stack = require('./stack')

const validate = (stringInput) => {
    const elements = stringInput.split('')

    const stack = new Stack()

    for (const element of elements) {
        if (element === '(') {
            stack.push(element)
        }
        if (element === ')' && stack.pop() != '(') {
          return false
        }
    }

    return stack.empty
  }

  module.exports = {
    validate
  }
