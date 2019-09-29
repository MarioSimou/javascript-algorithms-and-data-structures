function Node(val){
    this.val = val
    this.left = null
    this.right = null
}

function BinarySearchTree(){
    if(!(this instanceof BinarySearchTree)){
        return new BinarySearchTree()
    }
    this.root = null // any operation starts from the root node
}

BinarySearchTree.prototype.insert = function(val){
    const newNode = new Node(val)
    if(!this.root) this.root = newNode
    else {
        let parent = this.root
        while(true){
            let direction
            if(parent.val > val) direction = 'left'
            else direction = 'right'
            
            if(parent[direction]){
                if(parent[direction].val === val) return null
                parent = parent[direction]
            } else {
                parent[direction] = newNode
                break
            }
        }        
    }
    return this.root
}

BinarySearchTree.prototype.find = function(val){
    if(!this.root) return false

    let node = this.root
    while(true){
        if(node.val > val) node = node.left
        else if(node.val < val) node = node.right
        else return true

        if(!node) return false
    }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(12)
tree.insert(8)
tree.insert(2)

console.log(tree.root.left.right)
console.log(tree.find(12))