class Node {
    constructor( val ){
        this.val = val
        this.next = null
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    unshift(val){
        const node = new Node(val)

        if(this.length)  node.next = this.head
        else this.tail = node

        this.head = node
        this.length++

        return node
    }

    push(val){
        const node = new Node(val)

        if(this.length) this.tail.next = node
        else this.head = node

        this.tail = node
        this.length++

        return node
    }

    set(val,index){
        if(index > this.length ) throw new Error('index out of bound')
        if(index === 0) return this.addHead(val)
        
        let node = this.head
        let counter = 1
        while( node.next ){
            console.log(counter)
            if( counter === index ){
                console.log(counter)
                const newNode = new Node(val)
                newNode.next = node.next
                node.next = newNode
                this.length++
                return
            }

            counter++
            node = node.next
        }
    }

    search(index){
        if( index > this.length ) throw new Error('index out of bound')
        if( index === 0 ) return this.head

        let node = this.head
        let counter = 1
        while(node.next){
            if(index === counter ) return node.next

            counter++
            node = node.next
        }
    }

    pop(){
        if(!this.length) throw new Error('no existing nodes')

        const node = this.search(this.length - 2) // one before the end
        console.log(node)
        node.next = null

        const tail = this.tail
        this.tail = node
        this.length--
        return tail
    }
    shift(){
        if(!this.length) throw new Error('no existing nodes')
        const head = this.head
        this.head = head.next
        this.length--
        return head
    }

    get node(){
        return this.head
    }
}

const list = new SinglyLinkedList()
list.push('john')
list.push('some')
list.unshift('bye')
list.push('moorning')
list.set('test',1)

console.log(list.head)
console.log(list.tail)
console.log(list.length)
console.log(list.head.next.next)

console.log(list.pop())
console.log(list.tail)
console.log(list.length)