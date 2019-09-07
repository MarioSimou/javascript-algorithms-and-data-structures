
// Sliding Window Pattern
/*
    Definition: 
    - This pattern involves creating a window which can either be an array
    or number from one position to another.
    - depending on a certain condition, the window either increases or closes(and a new window is created)

*/

// Naive
// Time Comlexity: O(n^2)
// Space Complexity: O(n)
// const maxSubarrarySum = (arr = [], n) => {
//     if( n > arr.length ) return false

//     let maxSum = -Infinity
//     for(let i=0; i < arr.length; i++){
//         const sum = arr.slice(i,i+n).reduce((acc,v) => acc+v,0)
//         if( sum > maxSum ) maxSum = sum
//     }
//     return maxSum
// }

// Sliding WIndow Pattern
// Time Complexity: O(n)
// Space Complexity: O(1)
const maxSubarraySum = (arr = [], n) => {
    if(arr.length < n ) return false
    // find the sum until n
    let tempSum = 0, maxSum = 0
    for(let i=0; i < n; i++){
        tempSum += arr[i]
    }

    // iterate for the rests elements
    maxSum = tempSum
    for(let i=n; i < arr.length; i++){
        // substract the number outside of the window size and adds the new one
        tempSum = tempSum - arr[i-n] + arr[i]
        if(tempSum > maxSum) maxSum = tempSum
    }
    
    return maxSum
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2))
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([], 4)) // false