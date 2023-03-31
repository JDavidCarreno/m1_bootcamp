'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}
LinkedList.prototype.add = function(value) {
  let node = new Node(value);
  let current = this.head;

  if (current === null) {
    this.head = node;
    return node;
  }

  while (current.next) {
    current = current.next
  }
  current.next = node;
}

LinkedList.prototype.size = function() {
  let current = this.head;
  let counter = 0;

  if (current === null) {
    return 'Lista vacía';
  }

  while (current !== null) {
    counter++;
    current = current.next;
  }
  return counter;

}

LinkedList.prototype.remove = function() {
  let current = this.head;
  
  if (this.size() === 'Lista vacía') {
    return null;
  }
  if (this.size() === 1) {
    let val = current.value;
    this.head = null
    return val;
  }
  
  while (current.next.next !== null) {
    current = current.next;
  }

  let last = current.next;
  current.next = null;
  return last.value;
}

let nw = new LinkedList();

nw.add('1');
console.log(nw.size())
nw.add('2');
console.log(nw);
console.log(nw.remove());
console.log(nw);

console.log(nw.remove());
console.log(nw);

LinkedList.prototype.search = function(argument) {
  if (typeof argument === 'function') {
    let current = this.head;
    if (current === null) {
      return null;
    }
    while (current.next) {
      if (argument(current.value)) {
        return current;
      } else {
        current = current.next;
      }
    }
    return null;
  } else {
    let current = this.head;
    if (current === null) {
      return null;
    }
    while (current.next) {
      if (current.value === argument) {
        return current;
      } else {
        current = current.next;
      }
    }
    return null;
  }
}
nw.add('2');
nw.add('1');
nw.add('1');
console.log(nw);
console.log(nw.search('1'));


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
