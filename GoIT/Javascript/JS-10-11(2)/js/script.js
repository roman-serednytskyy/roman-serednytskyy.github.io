
function enterName(names){
  var array = [];
  for (var i = 0; i < names; i++) {
    array[i] = prompt('Enter name!');
  }
  return array;
}

var arrNames = enterName(5)
console.log('array names = ', arrNames);

var userName = prompt('Enter user name!');
console.log('userName = ', userName);

//Alternativ #1
if (userName == arrNames[0]){
  alert (arrNames[0] + ' вы успешно вошли!')
} else if (userName == arrNames[1]){
  alert (arrNames[1] + ' вы успешно вошли!')
} else if (userName == arrNames[2]){
  alert (arrNames[2] + ' вы успешно вошли!')
} else if (userName == arrNames[3]){
  alert (arrNames[3] + ' вы успешно вошли!')
} else if (userName == arrNames[4]){
  alert (arrNames[4] + ' вы успешно вошли!')
} else {
  alert ("Ошибка!")
}

//Alternativ #2
//   for (var i = 0; i < arrNames.length; i++){
//     if (userName  == arrNames[i]){
//     alert (arrNames[i] + ' вы успешно вошли!')
//   }
// }
// alert ('Erorr')
