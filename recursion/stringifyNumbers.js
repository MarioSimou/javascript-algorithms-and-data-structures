function stringifyNumbers(o){
    let oo = {}

    for(let [k,v] of Object.entries(o)){
        if(Object.prototype.toString.call(v) === '[object Number]') oo[k] = `${v}`
        else if(v.constructor.name === 'Object') oo[k] = stringifyNumbers(v)
        else oo[k] = v
    }
    return oo
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))
