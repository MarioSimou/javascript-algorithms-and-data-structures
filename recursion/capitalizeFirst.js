function capitalizeFirst (arr, stack = []) {
    if(arr.length === 0 ) return stack

    stack.push(arr[0][0].toUpperCase() + arr[0].slice(1))
    return capitalizeFirst(arr.slice(1), stack)
}

console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']