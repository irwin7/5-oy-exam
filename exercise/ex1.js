let arr = [-5,1,3,5,8,9];
for(let j = 0;j<arr.length; j++){
  for(let i = 0;i<arr.length;i++){
    if(arr[i] > arr[i+1]){
      let a = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = a;
    }
  }
}

console.log(arr);