// Recursion Helper Design Pattern

function collectOddsValues(...args){
    const values = []

    function collect(arr){
        if(arr.length === 0 ) return

        const last = arr.pop()
        if(last %2 !== 0) values.push(last)

        collect(arr)
    }

    collect(args)

    return values.reverse()
} 


console.log(collectOddsValues(1,2,3,4,5,6,7,8,10,24,13))