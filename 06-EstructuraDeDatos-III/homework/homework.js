'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.size = function(){
   let counter = 1;
   if (this.left) {
      counter++;
      this.left.size();
   }
   if (this.right) {
    counter++;
    this.right.size();  
   }
   return counter;
}

BinarySearchTree.prototype.insert = function(value){
   if(value > this.value) {
      if (!this.right) {
         this.right = new BinarySearchTree(value);
      } else {
         this.right.insert(value);
      }
   } else {
      if (!this.left) {
         this.left = new BinarySearchTree(value);
      } else {
         this.left.insert(value);
      }
   }
}

BinarySearchTree.prototype.contains = function(value){
   if (this.value === value) {
      return true;
   } else {
      if (value > this.value) {
         if (this.right) {
            return this.right.contains(value);
         } else {
            return false;
         }
      } else {
         if ( value < this.value ) {
            if (this.left) {
               return this.left.contains(value);
            } else {
               return false;
            }
         }
      }
   }
}

BinarySearchTree.prototype.depthFirstForEach = function(order){
   let result = [];
   if (order === 'in-order' || order === null) {
      let result = [];

      if (this.left) {
         result = result.concat(this.left.depthFirstForEach(order));
      }

      result.push(this.value);

      if (this.right) {
         result = result.concat(this.right.depthFirstForEach(order));
      }

      return result;
   }

   if (order === 'pre-order') {
      let result = [];

      result.push(this.value);

      if (this.left) {
         result = result.concat(this.left.depthFirstForEach(order));
      }

      if (this.right) {
         result = result.concat(this.right.depthFirstForEach(order));
      }

      return result;
      
   }

   if (order === '') {
      
   }   

   
}
BinarySearchTree.prototype.breadthFirstForEach = function(){}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
