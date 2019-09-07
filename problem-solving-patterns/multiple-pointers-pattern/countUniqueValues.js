
// Time Complexity: O(n)
// Space Complexity: O(n)
// const countUniqueValues = arr => {
//     return Object.values(arr.reduce((acc,v) => ({ ...acc, [v]: true }), {})).length
// }

// Assumption: sorted array of integer values
// Time Complexity: O(n)
// Space Complexity: O(1)
const countUniqueValues = (arr = []) => {
    const n = arr.length

    // if size of the array is zero, return 0
    if(!n) return 0

    // add pointers at the beginning of the array and 
    // initializes a counter
    let i = 0, j = 1
    let counter = 1

    // condition: as far as j is less than the array size
    while(j < n){
        const p1 = arr[i]
        const p2 = arr[j]
        if(p1 === p2 ) j += 1 // increase position of j if the values are the same
        else {
            // increase counter if the values differ and alter pointers position
            counter += 1
            i = j
            j += 1
        }
    }

    return counter
}

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))