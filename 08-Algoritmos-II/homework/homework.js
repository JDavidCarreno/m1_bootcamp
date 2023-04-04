'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) {
    return array
  } else {
    const pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    return quickSort(left).concat(pivot, quickSort(right));

  }
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if (array.length < 2) {
    return array;
  } else {
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    left = mergeSort(left);
    right = mergeSort(right);

    array = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        array.push(left.shift());
      } else {
        array.push(right.shift());
      }
    }

    return array.concat(left, right);
  }

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
