function List() {
  this.listSize = 0
  this.pos = 0
  this.dataSource = [] // 初始化一个空数组来保存列表元素
  this.clear = clear
  this.find = find
  this.toString = toString
  this.insert = insert
  this.append = append
  this.remove = remove
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.hasNext = hasNext
  this.hasPrev = hasPrev
  this.length = length
  this.currPos = currPos
  this.moveTo = moveTo
  this.getElement = getElement
  this.contains = contains
}

// 添加元素
function append(element) {
  this.dataSource[this.listSize++] = element
}

// 查找元素是否在 list 中
function find(element) {
  for (let i = 0; i < this.dataSource.length; i++) {
    if (this.dataSource[i] === element) {
      return i
    }
  }

  return -1
}

// 移除元素
function remove(element) {
  const foundAt = this.find(element)
  if (foundAt > -1) {
    this.dataSource.splice(foundAt, 1)
    --this.listSize
    return true
  }

  return false
}

// 获取 list 长度
function length() {
  return this.listSize
}

// 重写 toString 方法
function toString() {
  return this.dataSource
}

// 向 list 中插入元素
function insert(element, after) {
  const insertPos = this.find(after)
  if (insertPos > -1) {
    this.dataSource.splice(insertPos + 1, 0, element)
    ++this.listSize
    return true
  }

  return false
}

// 清空list
function clear() {
  delete this.dataSource
  this.dataSource.length = 0
  this.listSize = this.pos = 0
}

// 是否包含某个元素
function contains(element) {
  for (let i = 0; i < this.dataSource.length; i++) {
    if (this.dataSource[i] === element) {
      return true
    }
  }

  return false
}

function front() {
  this.pos = 0
}

function end() {
  this.pos = this.listSize - 1
}

function prev() {
  --this.pos
}

function next() {
  if (this.pos < this.listSize) {
    ++this.pos
  }
}

function currPos() {
  return this.pos
}

function moveTo(position) {
  this.pos = position
}

function getElement() {
  return this.dataSource[this.pos]
}

function hasNext() {
  return this.pos < this.listSize
}

function hasPrev() {
  return this.pos >= 0
}

let names = new List()
names.append("java")
names.append('c')
names.append('javascript')
names.append('python')
names.append('go')

// names.front()
// console.log(names.getElement())
// names.next()
// console.log(names.getElement())
// console.log(names.hasNext())


for (names.front(); names.hasNext(); names.next()) {
  console.log(names.getElement())
}
console.log("==================")
for (names.end(); names.hasPrev(); names.prev()) {
  console.log(names.getElement())
}

