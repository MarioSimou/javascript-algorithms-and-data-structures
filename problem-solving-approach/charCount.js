const charCount = str => {
    // str is iterable and array like - parse to characters and iterate over them
    return Array.from(str).reduce((acc,char)=> {
        // lowercase the characer
        char = char.toLowerCase()
        // include only alphanumeric characters and increase the counter
        const charCode = char.charCodeAt()
        if((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) acc[char] = (acc[char]||0) +1
        return acc
    },{})
}
console.log(charCount('hello World'))