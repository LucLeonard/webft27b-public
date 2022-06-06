'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

let sum = 0;
for ( let i=0; i<num.length; i++){
  sum += num[i] * 2 ** (num.length - 1 - i);

}
return sum;

}

function DecimalABinario(num) {
  // tu codigo aca

let residuo=0;
let numArray=[];

while ( num >= 2) {  // Si el numero dado es mayor o igual a 2
 
  residuo = Math.trunc( num % 2);  // Le asignamos a la variable residuo, el residuo de los numeros enteros con el metodo Math.trunc
  numArray.unshift(residuo);    // Insertamos el residuo al principio del Array
  num /= 2;        // Hacemos division iterativa de 2  del numero dado

}

// Termina el ciclo
numArray.unshift(Math.trunc(num));   // Eliminamos todos los decimales con el metodo Math.trunc y se lo asignamos al principio del array
let result = numArray.join('');        // 

return (result);

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}