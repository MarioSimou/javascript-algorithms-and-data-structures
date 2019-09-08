// Iterative Approach
function factorialIteratively(num){
    let r = 1
    for(let i=1; i <= num; i++){
        r *= i
    }
    return r
}

// Recursive Approach
function factorialRecursively(num){
    return num <= 1 ? num : num * factorialRecursively(--num)
}

console.log(factorialIteratively(5))
console.log(factorialRecursively(5))