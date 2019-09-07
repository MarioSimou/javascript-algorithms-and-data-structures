// Multiple Pointers Pattern

/* 
    Definition:
        - creating pointers or values that correspond to an index or position
        and move towards the beginning end or middle based on a certain condition
        - very efficient for solving problems with minimal space complexity as well
        - usually used when a single input is given and you want to check its internal structure.

*/

// Naive Solution
// Time Complexity: O(n)
// Space Complexity: O(1)
const sumZero = arr => {
    for(let i of arr){
        for(let j of arr){
            if( i + j === 0) return [i,j]
        }
    }

    return false
}


// Multiple Pointers Solution
// Time Complexity: O(n)
// Space Complexity: O(1)
const sumZeroMultiplePointers = arr => {
    let i = 0, j = arr.length - 1
    
    while(i < j){
        const p1 = arr[i]
        const p2 = arr[j]
        if( p1 + p2 === 0 ) return [p1,p2] // if the sum to zero return the pair
        if( p1 + p2 > 0 ) j -= 1 // if the sum is greater than zero, decrease the index of pointer 2
        if( p1 + p2 < 0 ) i += 1 // if the sum is less than zero, increase the index of pointer 2

    }

    return false
}


console.log(sumZeroMultiplePointers([-4,-3,-2,-1,0,1,3,5]))
