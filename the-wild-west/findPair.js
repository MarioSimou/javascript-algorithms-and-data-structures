function findPair(arr,diff){
    const hash = arr.reduce((acc,num) => ({...acc, [num]:num}),{})

    // a - b = diff => a - diff = b
    // iterate over the array and check if the difference exist
    for(let num of arr)
        if(hash[num-diff]) return true

    return false
}

console.log(findPair([6,1,4,10,2,4],2))
console.log(findPair([8,6,2,4,1,0,2,5,13],1))
console.log(findPair([],0))
console.log(findPair([0,1,3,4,6],0))