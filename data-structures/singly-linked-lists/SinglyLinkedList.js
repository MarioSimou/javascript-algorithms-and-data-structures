class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val){
    if(!this.head) return this._addToEmptyList(val)

    const oldTail = this.tail
    const newTail = new Node(val)
    oldTail.next = newTail
    this.tail = newTail
    this.length++

    return newTail
  }
  pop(){
    if(!this.tail) return null
    if(this.length === 1 )  return this._resetNode()

    const oldTail = this.tail
    const newTail = this.get(this.length - 2 )
    newTail.next = null
    this.tail = newTail
    this.length--

    return oldTail
  }
  shift(){
    if(!this.head) return null

    const oldHead = this.head
    const newHead = oldHead.next
    this.head = newHead
    this.length--

    return oldHead
  }
  unshift(val){
    if(!this.head) return this._addToEmptyList(val)

    const oldHead = this.head
    const newHead = new Node(val)
    newHead.next = oldHead
    this.head = newHead
    this.length++

    return newHead
  }

  get(index){
    const n = this.length - 1 
    if( index < 0 || index > n) return null
    if(index === 0) return this.head
    if(index === n) return this.tail

    let counter = 0
    let node = this.head
    while(node.next){
      if(counter === index) return node

      counter++
      node = node.next
    }
  }
  insert(index, val){
    const n = this.length - 1
    if(index > n || n < 0) throw new Error('out of bound')
    if(index === 0) return this.unshift(val)

    const node = new Node(val)
    const prevNode = this.get(index -1 )
    const nextNode = this.get(index)
    prevNode.next = node
    node.next = nextNode
    this.length++

    return node
  }

  remove(index){
    const n = this.length - 1
    if( index > n || index < 0) throw new Error('out of bound')
    if( index === 0) return this.shift()
    if(index === n ) return this.pop()

    const prevNode = this.get(index - 1)
    const removed = this.get(index)
    prevNode.next = removed.next
    this.length--

    return removed
  }

  reverse(){
    let node = this.head
    this.head = this.tail
    this.tail = node

    let next
    let prev = null
    for(let i = 0; i < this.length; i++){
      next = node.next
      node.next = prev
      prev = node
      node = next      
    }    

    return this
  }

  _addToEmptyList(val){
    const node = new Node(val)
    this.head = node
    this.tail = node
    this.length++
    return node
  }
  _resetNode(){
      const node = this.head || this.tail
      this.head = null
      this.tail = null
      this.length--
      
      return node
  }

}

const linkedList = new SinglyLinkedList()

linkedList.unshift('today')
linkedList.push('is')
linkedList.push('Friday')
console.log(linkedList.reverse())