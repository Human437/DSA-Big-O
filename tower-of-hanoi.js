let counter = 0;
function towerOfHanoi(height, src, to, buffer) {
  if (height >= 1) {
    towerOfHanoi(height - 1, src, buffer, to);
    counter += 1;
    console.log(`${counter}. Move disk from Tower ${src} to Tower ${to}`);       
    towerOfHanoi(height - 1, buffer, to, src);
  }
  
  return;
}

// towerOfHanoi(3,'A','B','C')
// towerOfHanoi(5,'A','B','C')
towerOfHanoi(4,'A','B','C')