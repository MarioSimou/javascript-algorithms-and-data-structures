function linearSearch(arr, v){
    for(let i=0; i < arr.length; i++)
        if(arr[i] === v ) return i

    return -1
}

console.log(linearSearch([3,2,23,40,2,30,20,3],40))