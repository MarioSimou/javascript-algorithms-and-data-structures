// Tree Traversal
// Breadth First Search: search all parents before we move to the children


function Queue(){
  this.start = null
  this.last = null
  this.size = 0
}

Queue.prototype.Node = function(val){
  this.val = val
  this.next = null
}

Queue.prototype.enqueue = function(val){
  const node = new this.Node(val)
  if(!this.size) this.start = node
  else this.last.next = node
  
  this.last = node
  return ++this.size
}

Queue.prototype.dequeue = function(){
  if(!this.size) return null
  const node = this.start
  if(this.size === 1){
    this.last = null
    this.start = null
  } else {
    this.start = this.start.next
  }

  this.size--
  return node.val
}

function Node(val){
  this.left = null
  this.right = null
  this.val = val
}

function BinarySearchTree(){
  this.root = null
}

BinarySearchTree.prototype.insert = function(val){
  if(!this.root){
    this.root = new Node(val)
    return true
  }

  function helper(parent,children){
    let direction
    if(parent.val > children.val ) direction = 'left'
    else if(parent.val < children.val) direction = 'right'
    else return false
    
    if(parent[direction]) return helper(parent[direction], children)
    else {
      parent[direction] = children
      return true
    }
  }

  return helper(this.root, new Node(val))
}

BinarySearchTree.prototype.find = function(val){
  if(!this.root) return false
  
  function helper(parent,val){
    let direction
    if(parent.val > val) direction= 'left'
    else if(parent.val < val) direction = 'right'
    else return true

    if(parent[direction]) return helper(parent[direction], val)
    else return false
  }

  return helper(this.root, val)
}

BinarySearchTree.prototype.breathFirstSearch = function(){
  if(!this.root) return []

  const visited = new Queue()
  const queue = new Queue()
  queue.enqueue(this.root) 

  while(queue.size){
    const first = queue.dequeue()
    visited.enqueue(first.val)

    if(first.left){
      queue.enqueue(first.left)
    }
    if(first.right){
      queue.enqueue(first.right)
    }
  }

  const list = []
  let node = visited.start
  while(true){
    list.push(node.val)
    if(!node.next) break
    node = node.next
  }
  return list
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(6)
bst.insert(3)
bst.insert(8)
bst.insert(15)
bst.insert(20)

console.log(bst.breathFirstSearch())