function minSubArrayLen(arr,n){
    // largest sliding window is the array length
    let tempSum = 0
    let minArray = []

    // find the minimum subarray size starting from 0
    for(let i=0; i < arr.length; i++){
        const num = arr[i]
        let v

        if(tempSum < n){
            minArray.push(num)
            tempSum += num
            continue
        }

        if((v = minArray.shift()) > num){
            minArray.unshift(v)
        }
        else {
            minArray.push(num)
            tempSum = tempSum - v + num
        }
    }

    if(tempSum < n ) return 0

    let i = 0
    let j = minArray.length - 1
    let minArrayLength = minArray.length
    while(true){
        const start = minArray[i]
        const end = minArray[j]

        if(start <= end && tempSum - start >= n) {
            i++
            tempSum -= start
        }else if(start > end && tempSum - end >= n){
            j--
            tempSum -= end
        }else return minArrayLength

        minArrayLength--
    }
}

console.log(minSubArrayLen([2,3,1,2,4,3],7))
console.log(minSubArrayLen([2,1,6,5,4],9))
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55))
console.log(minSubArrayLen([4,3,3,8,1,2,3],11))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95))