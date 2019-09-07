// assumption: sorted array of integers
function averagePair(arr, avg){
    const n = arr.length - 1
    let i = 0, j = 1
    const mean = (...args) => args.reduce((acc,v) => acc + v/args.length ,0)
    
    while(i < n){
        if(j > n) {
            i++
            j = i + 1
        }

        const m = mean(arr[i],arr[j])
        if(m === avg ) return true
        else if(m < avg) j++
        else if(m > avg){
            i++
            j = i + 1
        }
    }

    return false
}

console.log(averagePair([1,2,3], 2.5))
console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
console.log(averagePair([-1,0,3,4,5,6],4.1))
console.log(averagePair([],4))