function cuentaRegresiva(num) {
    for (let i = num ; i >= 0 ; i--) {
        console.log(i);
    }
}
cuentaRegresiva(10);

            //PRIMER EJEMPLO RECURSIÓN


function regresiva (num) {
    console.log(num);
    if (num === 0) {
        return 'fin';
    } else {
        regresiva(num - 1);
    }
    
}

regresiva(10);

            //Número factorial

function factorial (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

factorial(5);

        //suma array

function sumaArray (array) {
    if (array.length === 0) {
        return 0;
    } else {
        let primerNumero = array[0];
        let restoArray = array.slice(1);
        return primerNumero + sumaArray(restoArray);
    }
}
sumaArray([1, 2, 3]);


        // Estructuras de Datos

let persona = {
    nombre: 'Eduard',
    apellido: 'Jimenez'
}

        
        // set

let repetidos = [1, 1, 2, 2, 'hola' , 'hola'];
let noRepetidos = new Set(repetidos);

console.log(noRepetidos);

noRepetidos.add(5);
let nuevosElementos = [10, 11, 12]
for (const elemento of nuevosElementos) {
    noRepetidos.add(elemento);
}

noRepetidos.delete('hola');
console.log(noRepetidos);

        //stack     el primero que entra es el último que sale

let stack = [];

stack.push('Jhorman');
stack.push('Nico');
stack.push('Juli');

console.log(stack);

stack.pop();
console.log(stack);

class Stack {
    constructor() {
        this.pila =[]
    }

    agregarALaPila(valor) {
        return this.pila.push(valor);
    }

    quitarALaPila(valor) {
        return this.pila.pop(elemento);
    }
}

let newStack = new Stack();
newStack.agregarALaPila(1);
newStack.agregarALaPila(2);
newStack.agregarALaPila(3);
console.log(newStack);

function Pila() {
    this.pila1 = [];
}

Pila.prototype.agregar = function(elemento) {
    return this.pila1.push(elemento);
}

Pila.prototype.eliminar = function(elemento) {
    return this.pila1.pop(elemento);
}

let nuevo = new Pila;
nuevo.agregar(1);
nuevo.agregar(2);
nuevo.agregar(3);
console.log(nuevo);
nuevo.eliminar(3);
console.log(nuevo);

        //Queue   tmapoco nativa en js

let queue = [];
queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue);

queue.shift();

console.log(queue);