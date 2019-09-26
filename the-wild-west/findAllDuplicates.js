function findAllDuplicates(nums){
    const freqObj = nums.reduce((acc,num) =>({...acc, [String(num).toString()]:(++acc[num]||1)}), {})

    return Object.entries(freqObj).reduce((acc,[num,freq]) => {
        if(freq > 1) acc.push(+num)
        return acc
    },[])
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1]))
console.log(findAllDuplicates([4,3,2,1,0]))
console.log(findAllDuplicates([4,3,2,1,0,1,2,3]))