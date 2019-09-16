function collectStrings(o){
    let s = []
    for(let v of Object.values(o)){
        if(typeof v === 'string') s.push(v)
        if(v.constructor.name === 'Object') s = [ ...s, ...collectStrings(v)] 
    }

    return s
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])