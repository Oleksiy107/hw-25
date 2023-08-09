function checkString(inputString) {
  const pattern  = /^-?0*[1-9]\d{5}$/;
  return pattern.test(inputString);
}
console.log(checkString('123456'));  
console.log(checkString('-123456')); 
console.log(checkString('-12345'));   
console.log(checkString('023456'));   
console.log(checkString('-000016'));  
 

