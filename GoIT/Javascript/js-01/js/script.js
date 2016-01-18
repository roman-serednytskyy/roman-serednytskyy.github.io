var base = prompt('Enter the number!',7);
var exponent = prompt('Enter degree!',3);

function pow(base, exponent){
  var result = base;
  for (var i = 1; i < exponent; i++) {
    result = result*base;
  }
  return result;
}
var powResult = pow(base, exponent)
console.log('powResult = ', powResult);
