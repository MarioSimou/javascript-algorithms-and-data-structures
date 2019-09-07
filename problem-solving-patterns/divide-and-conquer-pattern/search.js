// Divide and Conquer Pattern

/*
    Definition:
        - this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
        - this pattern can tremendously decrease time complexity
*/

// Naive
// Time Complexity: O(n)
// Space Complexity: O(1)
// const search = (arr=[], n) => {
//     for(let i=0; i< arr.length; i++){
//         if(arr[i] === n ) return i
//     }
//     return -1
// }

// Assumption: sorted array
// Time Complexity: 0(log(n))
// Space Complexity: O(1)
// const search = (arr = [], num) => {
//     const n = arr.length
//     let nHalf = Math.floor(n/2)
//     let match = -1

//     if(arr[nHalf] === num ) return nHalf
//     if(arr[nHalf] > num){
//         return search(arr.slice(0,nHalf),num)
//     } 
//     if(arr[nHalf] < num){
//         match = search(arr.slice(nHalf+1),num)
//         if( match > -1 ) return nHalf + 1 + match
//     }
    
//     return match
// }

// Binary Search
// Time Complexity: O(logn)
const search = (arr = [], n) => {
    const n = arr.length
    let left = 0,  right = n - 1

    while(left <= right){
        // finds the middle
        let mid = Math.floor((left+right) / 2)

        if(arr[mid] < n){
            // if the element in the middle is less than the left pointer is set to middle+1
            left = mid + 1
        } else if(arr[mid] > n){
            //  if the element is greater than n, then the right pointer is moved to the middle - 1 
            right = mid - 1
        } else {
            // return the match
            // all matches are narrowed to be returned from this logic
            return mid
        }
    }

    return -1
}

console.log(search([1,2,3,4,5,6,47,49,100,110],110))

console.log(search([1,2,3,4,5,6],4))
console.log(search([1,2,3,4,5,6],6))
console.log(search([1,2,3,4,5,6],11))