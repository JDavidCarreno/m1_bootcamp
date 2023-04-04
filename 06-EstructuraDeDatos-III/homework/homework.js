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
      counter += this.left.size();
   }
   if (this.right) {
    counter += this.right.size();
   }
   return counter;

   // if(this.right === null && this.left === null) return 1;

   // if(this.left !== null && this.right === null) return 1 + this.left.size();

   // if(this.left === null && this.right !== null) return 1 + this.right.size();

   // if(this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();
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

let nw = new BinarySearchTree(20);
nw.insert(1);
nw.insert(5);
nw.insert(25);
nw.insert(110);

console.log(nw.size());

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

BinarySearchTree.prototype.depthFirstForEach = function(cb,order = 'in-order'){
      // let array = [];
      // switch(order) {
      //    case  'post-order':
      //       if (this.left) {
      //          array = this.left.depthFirstForEach(cb,order).concat(array);
      //       }
      //       if (this.right) {
      //          array = this.right.depthFirstForEach(cb,order).concat(array);
      //       }
      //       cb(this.value);
      //       break;

      //    case 'pre-order':
      //       cb(this.value);
      //       if (this.left) {
      //          array = this.left.depthFirstForEach(cb,order).concat(array);
      //       }
      //       if (this.right) {
      //          array = this.right.depthFirstForEach(cb,order).concat(array);
      //       }
      //       break;
      //    default:
      //       if (this.left) {
      //          array = this.left.depthFirstForEach(cb,order).concat(array);
      //       }
      //       cb(this.value);
      //       if (this.right) {
      //          array = this.right.depthFirstForEach(cb,order).concat(array);
      //       }
      //       break;
      // }

   // in order = left root right
   if(!order || order === 'in-order') {
      if(this.left) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb, order);
      //post left - right -root
   } else if (order === 'post-order') {
      if(this.left) this.left.depthFirstForEach(cb, order);
      if(this.right) this.right.depthFirstForEach(cb, order);
      cb(this.value);
       //pre order  root left right
   } else {
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb, order);
      if(this.right) this.right.depthFirstForEach(cb, order);
   }
}

// recorrido por niveles
BinarySearchTree.prototype.breadthFirstForEach = function (cb, depth){
   if(!depth) {
      var depth = [];
   }
   cb(this.value)

   this.left && depth.push(this.left)
   this.right && depth.push(this.right)

   if (depth.length > 0) {
      depth.shift().breadthFirstForEach(cb, depth);
   }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
