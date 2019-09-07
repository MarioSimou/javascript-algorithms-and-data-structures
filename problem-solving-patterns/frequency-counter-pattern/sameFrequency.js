function sameFrequency(a, b){
    const findFrequency = s => Array.from(String(s)).reduce((acc,v)=> ({ ...acc, [v]:(acc[v]||0)+1}), {})
    const source = findFrequency(a)
    const target = findFrequency(b)

    for(let k in source){
        if(!target[k]) return false
        if(target[k] !== source[k]) return false
    }
    return true
}

console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578,5879385))
console.log(sameFrequency(22,222))
