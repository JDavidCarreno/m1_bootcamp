// ESTRUCTURAS DE DATOS 3

//      Arboles
// Aroboles binarios (solo tiene dos o un nodo hijo del root)

//                         A            (Empiezan con un root/raiz) (nivel 0)

//           B                           C       (Nodos: B es 'hijo' de A)  (nivel 1)

//   D              E                  F          (nivel 2)  (F nodo hoja, no tiene hijos)   (D y E son hermanos)

                            //DOM  es un arbol (NO binario)

                            //Arbol binario de busqueda

//                         Root(8)
                //menores          mayores
//                 (3)                (10)
//           (1)         (6)                (14)
//                                   (13)    

//root = raiz
// <  izquerda
// >  derecha
// nodos hijos = 2
//divididos por niveles
// recursion 
// nodo hijo no apunta a nadie, = null

function BinarySearchTree(value) {
    this.value = value;     // nodo raiz
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {   // valor que se inserta
    if (value > this.value) {
        if (this.right === null) { //!this.right
            this.right = new BinarySearchTree(value);
        } else {
            this.right.insert(value);  //recursion
        }
    } else {
        if (!this.left) {
            this.left = new BinarySearchTree(value);
        } else {
            this.left.insert(value);
        }
    }
}

let newTree = new BinarySearchTree(8);
console.log(newTree);

console.log(newTree);
newTree.insert(12);

//Arbol  binario autobalanceado   no permite que este desbalanceado, o sea que no hayan mas de un nivel de diferencia entre las ramas

// Arbol Max Heap     raiz es el mayor, no hay izquierda ni derecha, solo el mayor esta arriba

                    //RECORRIDOS
    // Breadth first search --> buscar de izquiera a derecha, de arriba a abajo

    //Depth first search inorder --> izquierda - nodo - derecha

    //Depth first search preorder --> Arriba - abajo,  izquierda - derecha

    //Depth first search postorder --> izquierda - derecha - raiz

