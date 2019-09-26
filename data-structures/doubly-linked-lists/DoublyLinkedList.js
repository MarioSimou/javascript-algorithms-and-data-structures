class Node { 
  constructor(val){
    this.next = null
    this.prev = null
    this.val = val
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val){
    const newTail = new Node(val)

    if(!this.length){
      this.head = newTail
      this.tail = newTail
    }else {
      newTail.prev = this.tail
      this.tail.next = newTail
      this.tail = newTail
    }

    this.length++
    return newTail
  }

  pop(){
    if(!this.length) return null
    const oldTail = this.tail
    
    if(this.length === 1 ){
      this.head = null
      this.tail = null
    } else {
      const newTail = oldTail.prev
      newTail.next = null
      this.tail = newTail  
    }

    this.length--
    oldTail.prev = null // resets the values from old tail
    return oldTail
  }
  
  shift(){
    if(!this.length) return null
    const oldHead = this.head
    if(this.length === 1 ){
      this.head = null
      this.tail = null
    } else {
      const newHead = oldHead.next
      newHead.prev = null
      this.head = newHead
    }

    oldHead.next = null
    this.length--
    return oldHead
  }
  unshift(val){
    let newHead = new Node(val)
    
    if(!this.length) {
      this.tail = newHead
      this.head = newHead
    } else {
      this.head.prev = newHead
      newHead.next = this.head
      this.head = newHead
    }

    this.length++
    return newHead
  }

  get(index){
    const n = this.length - 1 
    if(index < 0 || index > n ) return null
    if(index === 0 ) return this.head
    if(index === n) return this.tail
    if( index <= Math.floor(this.length / 2)){
      let node = this.head
      let counter = 0 
      while(node.next){
        if( counter === index ){
          return node
        }
        node = node.next
        counter++
      }  
    } else {
      let node = this.tail
      let counter = n
      while(node.prev){
        if(counter === index ){
          return node
        }
        node = node.prev
        counter--
      }
    }
  }
  set(index,val){
    if(index === 0 ) return this.unshift(val)

    const oldNode = this.get(index)
    if(!oldNode) return null

    oldNode.val = val
    return oldNode
  }

  insert(index,val){
    if(index === 0 ) return this.unshift(val)

    const oldNode = this.get(index)
    if(!oldNode) return null

    const newNode = new Node(val)
    oldNode.prev.next = newNode
    newNode.prev = oldNode.prev
    oldNode.prev = newNode
    newNode.next = oldNode
    this.length++

    return newNode
  }

  remove(index){
    const n = this.length - 1
    if(index === 0 ) return this.shift()
    if(index === n) return this.pop()

    const removedNode = this.get(index)
    if(!removedNode) return null

    const prevNode = removedNode.prev
    const nextNode = removedNode.next
    prevNode.next = nextNode
    nextNode.prev = prevNode

    this.length--
    return removedNode
  }
}

const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.push(2)
doublyLinkedList.push(3)
doublyLinkedList.push(1)
doublyLinkedList.unshift(55)
// doublyLinkedList.push(3)
// doublyLinkedList.pop()

// 55 - 2 - 3 - 1 
doublyLinkedList.insert(1,10)
// 55 - 10 - 2 - 3 - 1
doublyLinkedList.set(1,9)

doublyLinkedList.remove(1)