function Node(element) {
  this.element = element
  this.next = null
  this.previous = null
}

function LList() {
  this.head = new Node("head")
  this.find = find
  this.insert = insert
  this.remove = remove
  this.findPrevious = findPrevious
  this.findLast = findLast
  this.display = display
  this.disReverse = disReverse
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
  newNode.previous = current
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
  let currentNode = this.find(item)
  while (currentNode.next !== null) {
    currentNode.previous.next = currentNode.next
    currentNode.next.previous = currentNode.previous
    currentNode.next = null
    currentNode.previous = null
  }
}

function findLast() {
  let currentNode = this.head
  while (currentNode.next !== null) {
    currentNode = currentNode.next
  }

  return currentNode
}

function disReverse() {
  let currentNode = this.head
  currentNode = this.findLast()
  // console.log('disReverse currentNode ', currentNode)
  while (currentNode.previous !== null) {
    console.log('disReverse ', currentNode.element)
    currentNode = currentNode.previous
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
console.log("-----------")
ll.disReverse()

