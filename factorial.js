function factorial(num){
  let proudct = 1;
  while(num > 1){
    proudct *= num;
    num--
  }
  return proudct
}

console.log(factorial(5))