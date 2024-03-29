function nestedEvenSum (o){
    let s = 0 
    for(let v of Object.values(o)){
        if(Object.prototype.toString.call(v) === '[object Number]' && v % 2 == 0 ) s+= v
        if(v instanceof Object) s += nestedEvenSum(v)
    }
    return s
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)) // 6
console.log(nestedEvenSum(obj2)) // 10