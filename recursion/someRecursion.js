const isOdd = v => v % 2 !== 0

function someRecursive(arr, cb){
    if(arr.length === 0 ) return false
    return cb(arr[0]) ? true : someRecursive(arr.slice(1), cb )
}

console.log(someRecursive([1,2,3,4], isOdd))
console.log(someRecursive([4,6,8,9], isOdd))
console.log(someRecursive([4,6,8], isOdd))
console.log(someRecursive([4,6,8], v => v > 10 ))

