function findLongestSubstring(str){
    const n = str.length
    if(!n) return 0

    let i = 0, j = 1, l = 1
    let o = { [str[i]]: i}
    while(j < n){
        const p2 = str[j]

        if(!o[p2]) {
            o[p2] = j
            j++
        }
        else {
            i = o[p2] + 1
            j = i + 1
            const n = Object.values(o).length
            if(n > l) l = n
            o = { [str[i]]: i}
        }
    }

    return l > Object.values(o).length ? l : Object.values(o).length
}

console.log(findLongestSubstring(''))
console.log(findLongestSubstring('rithmschool'))
console.log(findLongestSubstring('thisisawesome'))
console.log(findLongestSubstring('thecatinthehat'))
console.log(findLongestSubstring('bbbbbb'))
console.log(findLongestSubstring('longestsubstring'))
console.log(findLongestSubstring('thisishowwedoit'))

