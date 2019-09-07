// Frequency Counter Pattern
function areThereDuplicates(...args){
    const o = {}
    for(let arg of args){
        if(!o[arg]) o[arg] = 1
        else return true
    }

    return false
}

console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates('a','b','c','a'))