function powerCalculator(base,exponent){
  let product = base;
  let i = 1;
  if (exponent < 0){
    return 'Exponent should be >= 0'
  }
  if (exponent === 0){
    return 1
  }
  while(i<exponent){
    product *= base
    i++
  }
  return product
}

console.log(powerCalculator(10,2))
console.log(powerCalculator(5,3))
console.log(powerCalculator(5,0))
console.log(powerCalculator(10,-2))