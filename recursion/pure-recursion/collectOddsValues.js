function collectOddValues(...args){
    if(args.length === 0 ) return []
    
    let s = []
    const start = args[0]

    if(start % 2 !== 0 ) s.push(start)

    return [ ...s, ...collectOddValues(...args.slice(1))]
}

console.log(collectOddValues(1,2,4,5,6))