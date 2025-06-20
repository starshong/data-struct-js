function Node(element) {
  this.element = element
  this.next = null
}

function LList() {
  this.head = new Node("head")
  this.find = find
  this.insert = insert
  this.remove = remove
  this.findPrevious = findPrevious
  this.display = display
}

function find(item) {
  let currentNode = this.head
  while (currentNode.element !== item) {
    currentNode = currentNode.next
  }

  return currentNode
}

function insert(newElement, item) {
  let newNode = new Node(newElement)
  let current = this.find(item)
  newNode.next = current.next
  current.next = newNode
}

function display() {
  let currentNode = this.head
  while (currentNode.next !== null) {
    console.log('node ', currentNode.next.element)
    currentNode = currentNode.next
  }
}

function findPrevious(item) {
  let currentNode = this.head
  while (currentNode.next !== null && currentNode.next.element !== item) {
    currentNode = currentNode.next
  }

  return currentNode
}

function remove(item) {
  let prevNode = this.findPrevious(item)
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next
  }
}

let ll = new LList()

ll.insert("Conway", "head")
ll.insert("Russellville", "Conway")
ll.insert("Carlisle", "Russellville")
ll.insert("Alma", "Carlisle")

ll.display()
console.log("===========")
ll.remove('Carlisle')
ll.display()

