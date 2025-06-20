function Dictionary() {
  this.dataSource = new Array()
  this.add = add
  this.find = find
  this.remove = remove
  this.showAll = showAll
}

function add(key, value) {
  this.dataSource[key] = value
}

function find(key) {
  return this.dataSource[key]
}

function remove(key) {
  delete this.dataSource[key]
}

function showAll() {
  let dataKeys = Object.keys(this.dataSource)
  console.log('dataSource ', this.dataSource,)
  for (let key in dataKeys.sort()) {
    console.log(dataKeys[key] + " -> " + this.dataSource[dataKeys[key]])
  }
}

function count() {
  return Object.keys(this.dataSource).length
}

function clear() {
  for (let key in Object.keys(this.dataSource)) {
    delete this.dataSource[key]
  }
}

let pbook = new Dictionary()

pbook.add("Mike", "123")
pbook.add("Divid", "345")
pbook.add("Cynthia", "456")

pbook.showAll()