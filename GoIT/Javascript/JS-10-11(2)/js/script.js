
function enterName(numberOfNames){
  var arrNames = [];
  for (var i = 0; i < numberOfNames; i++) {
    arrNames[i] = prompt('Enter name!');
    arrNames[i] = arrNames[i].toUpperCase();
  }
  return arrNames;
}

var arrNames = enterName(5)
console.log('array names = ', arrNames);

var userName = prompt('Enter user name!');
userName = userName.toUpperCase();
console.log('user name = ', userName);

//Alternativ #1

// if (userName == arrNames[0]){
//   alert (arrNames[0] + ' вы успешно вошли!')
// } else if (userName == arrNames[1]){
//   alert (arrNames[1] + ' вы успешно вошли!')
// } else if (userName == arrNames[2]){
//   alert (arrNames[2] + ' вы успешно вошли!')
// } else if (userName == arrNames[3]){
//   alert (arrNames[3] + ' вы успешно вошли!')
// } else if (userName == arrNames[4]){
//   alert (arrNames[4] + ' вы успешно вошли!')
// } else {
//   alert ("Ошибка!")
// }

// Alternativ #2
  for (var i = 0; i < arrNames.length; i++){
    if (userName  == arrNames[i]){
      var user = arrNames[i];
    alert(user + ' вы успешно вошли!');
  }
}
    if (user  == undefined){
     alert('Ошибка!');
  }
