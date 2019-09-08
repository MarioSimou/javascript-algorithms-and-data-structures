function reverse(str){
    return str.length === 0 ? '' : [ str[str.length-1] , ...reverse(str.slice(0,-1))].join('')
}

console.log(reverse('hello'))
console.log(reverse('rithmschool'))