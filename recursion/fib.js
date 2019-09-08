function fib(n){
    return n <= 1 ? n : fib(n-1) + fib(n-2)
}

// Example: x5 = (x4 ==== (x3 === (x2 === x1 + x0) + x1 ) + (x2 === x1 + x0) + (x3 === (x2 === x1 + x0) + x1 )
console.log(fib(14))