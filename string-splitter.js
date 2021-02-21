function stringSplitter(str,separator){
  let splitString = []
  while(str.includes(separator)){
    splitString.push(str.slice(0,str.indexOf(separator)))
    str = str.slice(str.indexOf(separator)+1)
  }
  splitString.push(str)
  return splitString;
}

console.log(stringSplitter('02/20/2020','/'))