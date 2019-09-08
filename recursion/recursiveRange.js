function recursiveRange(n){
    return  n === 0 ?  0 :  n + recursiveRange(--n)
}

console.log(recursiveRange(6))