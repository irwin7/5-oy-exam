let n = 1000;
let mainCount = 0;
for(let i = 1;i<=n;i++){
  let count = 0;
  for(let j = 1; j<=i; j++){
    if(i % j === 0){
      count++;
    }
  }
  if(count <= 2 && i>1){
    mainCount++;
  }
}

console.log(mainCount);