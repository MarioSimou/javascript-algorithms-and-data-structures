function flatten(arr){
    const s =  []
    function parse(arr){
        for(let i of arr){
            if(i instanceof Array ) parse(i)
            else s.push(i)
        }
        return arr
    }

    parse(arr)
    return s
}

console.log(flatten([1, 2, 3, [4, 5] ]))
console.log(flatten([1, [2, [3, 4], [[5]]]]))
console.log(flatten([[1],[2],[3]]))
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))