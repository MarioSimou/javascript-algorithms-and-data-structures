function Node(val){
  this.prev = null
  this.val = val
}

function Stack(){
  this.first = null
  this.last = null
  this.length = 0
}

Stack.prototype.push = function(val){
  const node = new Node(val)
  if(!this.length) {
    this.first = node
    this.last = node
  } else {
    node.prev = this.last
    this.last = node
  }
  return ++this.length
}

Stack.prototype.pop = function(){
  if(!this.length) return null
  const last = this.last
  this.length--
  if(this.length === 0){
    this.first = null
    this.last = null
  } else if( this.length === 1){
    this.last = this.last
    this.first = this.last
  } else {
    this.last = this.last.prev
  }
  return last.val
}

const s = new Stack()
s.push(1)
s.push(2)
s.push(3)
console.log(s.last)
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())