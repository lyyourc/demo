class Node {
  constructor(value) {
    this.value = value
    this.prev = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(value = '') {
    if (value === '' || value == null) return null

    const newNode = new Node(value)

    if (this.top != null) newNode.prev = this.top
    this.top = newNode

    return this.top
  }

  pop() {
    const tmp = this.top
    if (tmp != null) this.top = tmp.prev

    return tmp.value
  }
}

module.exports = Stack
