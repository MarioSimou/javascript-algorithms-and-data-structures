r
// asssumption: arguments need to be sorteda
function areThereDuplicates(...args){
    const n = args.length
    const sorted = args.sort((a,b) => a < b ? -1 : 1)
    let i = 0, j = 1

    while(j < n){
        if(sorted[i] === sorted[j]) return true
        else {
            i++
            j++
        }
    }

    return false
}

console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates('a','b','c','a'))