const Stack = require('./stack')

const OPENERS = ['(', '{', '[']

const validate = (stringInput) => {
    const elements = stringInput.split('')
    const stack = new Stack()

    for (const element of elements) {
        if (OPENERS.includes(element)) {
            stack.push(element)
        }
        if (element === ')' && stack.pop() !== '(') {
            return false
        } else if (element === '}' && stack.pop() !== '{') {
            return false
        } else if (element === ']' && stack.pop() !== '[') {
            return false
        }
    }

    return stack.isEmpty
}

module.exports = {
    validate
}
