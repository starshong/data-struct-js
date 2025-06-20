function Stack() {
  this.dataSource = []
  this.top = 0
  this.push = push
  this.pop = pop
  this.peek = peek
  this.length = length
  this.clear = clear
}

function push(element) {
  this.dataSource[this.top++] = element
}

function pop() {
  return this.dataSource[--this.top]
}

function peek() {
  return this.dataSource[this.top - 1]
}

function length() {
  return this.top
}

function clear() {
  this.top = 0
}


// 回文字符串
function isPalindrome(word) {
  const s = new Stack()
  for (let i = 0; i < word.length; i++) {
    s.push(word[i])
  }

  let rword = ""
  while (s.length() > 0) {
    rword += s.pop()
  }

  if (word === rword) {
    return true
  }

  return false
}


console.log(isPalindrome("12345"))
console.log(isPalindrome("123454321"))

// 进制转换
// function mulBase(num, base) {
//   let s = new Stack()
//   do {
//     s.push(num % base)
//     num = Math.floor(num /= base)
//   } while (num > 0);

//   let convertStr = ""
//   while (s.length() > 0) {
//     convertStr += s.pop()
//   }

//   return convertStr
// }

// console.log("111")
// console.log(mulBase(32, 2))


// var s = new Stack();
// s.push("David");
// s.push("Raymond");
// s.push("Bryan");
// console.log("length: " + s.length());
// console.log(s.peek());
// var popped = s.pop();
// console.log("The popped element is: " + popped);
// console.log(s.peek());
// s.push("Cynthia");
// console.log(s.peek());
// s.clear();
// console.log("length: " + s.length());
// console.log(s.peek());
// s.push("Clayton");
// console.log(s.peek());