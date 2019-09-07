// Frequence Counter Pattern

/* 
    -this pattern uses objects or sets to collect values/frequencies of values
    - usually avoid he need for nested loops O(n^2)
    - used when two inputs are given and you want to compare them
*/

// O(n^2)
function same( arr1, arr2 ){
    const n1 = arr1.length
    const n2 = arr2.length
    // checks if the arrays length match
    if(n1 !== n2 ) return false

    let index
    // iterates over the elements of array1 and checks if exist in target array
    for(let i of arr1){
        if((index = arr2.findIndex(j => j === i**2)) >= 0) arr2.splice(index,1)
        else return false
    }

    return true
}


// Applying Frequence counter pattern
// Time Complexity: O(n)
// Space Complexity: O(n)
function sameFrequencyPattern(arr1, arr2){
    const n1 = arr1.length
    const n2 = arr2.length
    if( n1 !== n2 ) return false

    // calculates the frequencies of each table
    const frequencyCounter1 = arr1.reduce((acc,v) => ({ ...acc, [v]:(acc[v]||0)+1 }),{})
    const frequencyCounter2 = arr2.reduce((acc,v) => ({ ...acc, [v]:(acc[v]||0)+1 }),{})

    for(let key in frequencyCounter1){
        // if a number in array 1 (squared) does not exists in array 2 then return false
        if(!(key ** 2 in frequencyCounter2)) return false
        // if the frequencies between between the values do not match return false
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) return false
    }

    return true
}

console.log(sameFrequencyPattern([1,2,3],[1,4,9]))