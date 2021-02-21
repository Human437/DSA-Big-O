function countingSheep(num){
  for(let i=num;i>=0;i--){
    if(i !== 0){
      console.log(`${i}: Another sheep jumps over the fence`)
    }else{
      console.log('All sheep jumped over the fence')
    }
  }
}

countingSheep(3)