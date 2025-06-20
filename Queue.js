function Queue() {
  this.dataSource = []
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.empty = empty
}

function enqueue(element) {
  this.dataSource.push(element)
}

function dequeue() {
  // 普通
  this.dataSource.shift()
  // 优先
  // let entry = 0
  // for (let i = 0; i < this.dataSource.length; i++) {
  //   if (this.dataSource[i].code < this.dataSource[entry].code) {
  //     entry = i
  //   }
  // }

  return this.dataSource.splice(entry, 1)
}

function front() {
  return this.dataSource[0]
}

function back() {
  return this.dataSource[this.dataSource.length - 1]
}

function toString() {
  let retStr = ""
  for (let i = 0; i < this.dataSource.length; i++) {
    retStr += this.dataSource[i] + "\n"
  }
  return retStr
}

function empty() {
  if (this.dataSource.length === 0) return true
  return false
}

// 测试程序
let q = new Queue()
q.enqueue("1")
q.enqueue("2")
q.enqueue("3")
q.enqueue("4")
console.log(q.toString())
q.dequeue()
console.log(q.toString())
console.log(q.front())
console.log(q.back())