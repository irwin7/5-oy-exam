let user = {
  login : ' 11 ',
  parol : '1245678'
}

user.login = user.login.trim();
user.parol = user.parol.trim();

if(user.login.length < 3 && user.parol.length < 8){
  console.log("Login kamida 3 ta belgidan iborat bo'lishi kerek");
  console.log("Parol kamida 8 ta belgidan iborat bo'lishi kerek");
}else if(user.parol.length < 8){
  console.log("Parol kamida 8 ta belgidan iborat bo'lishi kerek");
}else if(user.login.length < 3){
  console.log("Login kamida 3 ta belgidan iborat bo'lishi kerek");
}else{
  console.log("Siz muvaffaqiyatli ro'yxatdan o'tdingiz", user);
}