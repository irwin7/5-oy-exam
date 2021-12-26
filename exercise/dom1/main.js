let count = 0;
let elCards = document.querySelectorAll(".card");
let elCard = document.querySelector(".cards");
let body = document.querySelector("body");



function showChar(e){
  if(e.shiftKey == true){
    elCard.classList.add('show')
    if(String.fromCharCode(e.charCode) == '~'){
      if(count > elCards.length - 1){
        count = 0;
      }
      clearRed();
      elCards[count].classList.add('active');
      count++;
    }
  }  
}

function  clearRed() {
  for(let item of elCards){
    item.classList.remove('active')
  }
}

function bgchange(e){
  if(e.shiftKey == false){
    body.classList = elCards[count -1].classList[1];
  }
}