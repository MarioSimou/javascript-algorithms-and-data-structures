function isPalindrome(string){
    function reverse(string){
        return string.length === 0 ? '' : [ string[string.length - 1] , ...reverse(string.slice(0,-1)) ].join('')
    }

    return reverse(string) === string ? true : false
}

console.log(isPalindrome('awesome'))
console.log(isPalindrome('foobar'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
