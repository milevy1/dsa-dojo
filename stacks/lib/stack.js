class Stack {
  data = []
  
  push(value) {
    this.data.push(value)
  }
  
  pop() {
    return this.data.pop()
  }

  get count() {
    return this.data.length
  }

  get peek() {
    return this.data.at(-1)
  }

  get empty() {
    return this.count === 0
  }
}
  
module.exports = Stack