// Time Complexity: O(n+m)
// Space Complexity: O(1)
function isSubsequence(target,source){
    const n1 = target.length
    const n2 = source.length

    if( n1 > n2 ) return false

    let i =0, j= 0
    while(j < n2){
        if(target[i] === source[j] ) i++
        if(i === n1 ) return true
        j++
    }

    return false
}

console.log(isSubsequence('hello' , 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc','abracadabra'))
console.log(isSubsequence('abc','acb'))