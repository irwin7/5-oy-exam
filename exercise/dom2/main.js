let elForm = document.querySelector('.form');
let elInput = document.querySelector('.input');
let elSecunds = document.querySelector('.secunds');
let count = 1;

elForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let sec = elInput.value;
  elInput.value = "";
  elSecunds.innerHTML += `<span id="${count}">${sec}</span>`;
  count++;
  inter(sec)
});


function inter(sec){
  let myinter = setInterval(()=>{
    if(sec == 0){
      clearInterval(myinter);
    }
    document.getElementById(`${count - 1}`).innerHTML = sec;
    sec--;
  },1000)
}
