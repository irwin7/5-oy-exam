let arr = [3,22,29,18,31];
let primeArr = [];
for(let item of arr){
  let count = 0;
  for(let i = 1; i<=item; i++){
    if(item % i === 0){
      count++;
    }
  }
  if(count <= 2 && item>1){
    primeArr.push(item)
  }
}

console.log(primeArr);