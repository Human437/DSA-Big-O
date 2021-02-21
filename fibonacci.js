function fibonacci(num){
  let sequence = [1,1]
  if (num === 1){
    return sequence[0]
  }
  if (num === 2){
    return sequence.toString()
  }
  let i =2;
  while(i<num){
    sequence.push(sequence[i-1]+sequence[i-2])
    i++
  }
  return sequence.toString()
}

console.log(fibonacci(7))