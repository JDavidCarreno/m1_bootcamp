'use strict';

function BinarioADecimal(num) {
   let suma = 0;
   let array = num.split('').reverse().map(function(elemento) {
      return parseInt(elemento);
   });
   for (let i = 0; i < array.length; i++) {
      suma = suma + (Math.pow(2, i) * array[i]);
   }
   return suma;
}

// return num.toString(2)  --> al poner en el toString valor 2, se le indica la base

function DecimalABinario(num) {
   let arr = [];
   do {
      arr.unshift(num % 2);
      num = Math.floor(num / 2);
   } while (num > 0);
   return arr.map(function (elemento) {
      return elemento.toString();
   }).join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
