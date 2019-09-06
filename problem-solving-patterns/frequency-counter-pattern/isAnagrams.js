const isAnagram = ( s1, s2) => {
    if(s1.length !== s2.length) return false

    // calculates frequency object for each string
    const s1Frequencies = Array.from(s1).reduce((acc,v)=>({ ...acc, [v]:(acc[v]||0)+1}),{})
    const s2Frequencies = Array.from(s2).reduce((acc,v)=>({ ...acc, [v]:(acc[v]||0)+1}),{})
    
    for(let char of s1){
        // checks if the character exists in target string
        if(!s2Frequencies[char]) return false
        // checks if the number of times that the character appears in both strings is the same
        if(s1Frequencies[char] !== s2Frequencies[char]) return false
    }

    return true
}

console.log(isAnagram('anagram','nagaram'))
console.log(isAnagram('',''))
console.log(isAnagram('aaz','zza'))
console.log(isAnagram('qeywrt','qwerty'))
console.log(isAnagram('rat','car'))