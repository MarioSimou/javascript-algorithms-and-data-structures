function Node(val){
  this.val = val
  this.prev = null
  this.next = null
}

function DoublyLinkedList(){
  this.tail = null
  this.head = null
  this.length = 0
}

DoublyLinkedList.prototype.push = function(val){
  const newTail = new Node(val)
  if(!this.length){
    this.tail = newTail
    this.head = newTail
  } else {
    this.tail.next = newTail
    newTail.prev = this.tail
    this.tail = newTail
  }

  this.length++
  return this
}

DoublyLinkedList.prototype.unshift = function(val){
  const newHead = new Node(val)
  if(!this.length){
    this.head = newHead
    this.tail = newHead
  } else {
    this.head.prev = newHead
    newHead.next = this.head
    this.head = newHead
  }
  
  this.length++
  return this
}

DoublyLinkedList.prototype.shift = function(){
  if(!this.length) return undefined
  
  const removedNode = this.head
  if(this.length === 1 ){
    this.head = null
    this.tail = null
  } else {
    this.head = removedNode.next
    this.head.prev = null
  }

  removedNode.next = null
  this.length--
  return removedNode
}

DoublyLinkedList.prototype.get = function(index){
  if(!this.length) return undefined
  const  n = this.length-  1
  if(index < 0 || index > n) return null
  if( index === 0 ) return this.head
  if(n === index ) return this.tail

  const mid = Math.floor(this.length / 2)
  if( index > mid ){
    let node = this.tail, counter = n
    while( node.prev ){
      if( index === counter ){
        return node
      }
      node = node.prev
      counter--
    }
  }else {
    let node = this.head, counter = 0
    while( node.next ){
      if( index === counter ){
        return node
      }
      node = node.next
      counter++
    }
  }
}

DoublyLinkedList.prototype.set = function(index,val){
  if(this.length === 0 ) return false
  if(index < 0 || index > (this.length - 1 ) ) return false
  
  this.get(index).val = val
  return true
}

DoublyLinkedList.prototype.pop = function(){
  if(!this.length) return undefined
  const node = this.tail
  if(this.length === 1 ){
    this.head = null
    this.tail = null
  } else {
    this.tail = node.prev
    this.tail.next = null
  }

  node.prev = null
  this.length--
  return node
}

DoublyLinkedList.prototype.remove = function(index){
  if(!this.length) return undefined
  const n = this.length - 1
  if( index < 0 || index > n ) return undefined
  const node = this.get(index)
  node.prev.next = node.next
  node.next.prev = node.prev
  node.next = null
  node.prev = null
  this.length--
  return node
}

DoublyLinkedList.prototype.insert = function(index,val){
  if(!this.length) return undefined
  const node = this.get(index)
  if(!node) return false

  const newNode = new Node(val)
  node.prev.next = newNode
  newNode.prev = node.prev.next
  newNode.next = node
  node.prev = newNode
  this.length++

  return true
}