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
    function helper(parent, children){
        let direction
        if(parent.val > children.val) direction= 'left'
        else if(parent.val < children.val) direction = 'right'
        else return null // returns null if a duplicate value appears
        
        if(parent[direction]) helper(parent[direction], children)
        else parent[direction] = children
        return parent
    }

    let returned
    if(!this.root) this.root = new Node(val)
    else returned = helper(this.root, new Node(val))
        
    return returned === null ? returned : this.root
}

BinarySearchTree.prototype.find = function(val){
    if(!this.root) return false

    function helper(parent, val){
        let direction

        if(parent.val > val) direction = 'left'
        else if(parent.val < val) direction = 'right'
        else return true
        
        if(parent[direction]) return helper(parent[direction], val)
        else return false
        
    }

    return Boolean(helper(this.root, val))
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(12)
tree.insert(8)
tree.insert(2)

console.log(tree.root.left.right)
console.log(tree.find(12))