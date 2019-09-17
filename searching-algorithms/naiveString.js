function naiveString(str, pattern){
  let i =0, j = 0, n = pattern.length, counter = 0

  while(i < str.length){
    if(str[i] === pattern[j]) j++
    else j = 0

    i++


    if(j === n){
      counter++
      j = 0 
    }
  }

  return counter
}

console.log(searchString("lorie loled", "lol"))