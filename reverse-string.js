function reverseString(str){
  let reversedString =""
  for(let i =-1; i > (-1*str.length)-1;i--){
    if(i===-1){
      reversedString += str.slice(i)
    }else{
      reversedString += str.slice(i,i+1)
    }
  }
  return reversedString
}

console.log(reverseString('orange'))