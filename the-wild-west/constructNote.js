function constructNode(msg,letters){
    if (msg.length > letters.length ) return false

    const obj1 = [...msg].reduce((acc,char)=>({...acc, [char]:(++acc[char]||1) }),{})
    const obj2 = [...letters].reduce((acc,char)=>({...acc, [char]:(++acc[char]||1) }),{})

    for(let char of msg){
        if(!obj2[char]) return false
        if(obj1[char] > obj2[char]) return false
    }

    return true
}

console.log(constructNode('aa','abc'))
console.log(constructNode('abc','dcba'))
console.log(constructNode('aabbcc','bcabcaddff'))

