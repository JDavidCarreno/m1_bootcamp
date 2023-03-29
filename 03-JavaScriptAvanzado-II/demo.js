
//Closures
function crearSaludo (saludo) {
    return function(nombre) {
        console.log(saludo, nombre);
    }
}

var saludarHola = crearSaludo('Hola');

saludarHola('Juan');


function crearContador () {
    var counter = 0;
    return function() {
        counter++;
        return counter;
    }
}

var contador = crearContador();

console.log(contador());
console.log(contador());
console.log(contador());

function mascota(tipoDeMascota) {
   //var tipoDeMascota ='perro'
    return function(nombreMascota) {
        //var nombreMascota = 'Napoleon';
        console.log(`Yo tengo un ${tipoDeMascota} que se llama ${nombreMascota}`);
    }
}

var miMascota = mascota('perro');
miMascota('Napoleon');

//

var creaFuncion = function () {
    var arreglo = [];
    for (let i = 0; i < 3; i++) {  // si se deja con var, se pisa el i, mientras que con let, no pasa eso
        arreglo.push(function(){
            console.log(i);
        });
    }
    return arreglo;
}

var arr = creaFuncion();
arr[0]();
arr[1]();
arr[2]();  

                            // BIND

var persona = {
    nombre: 'Juan',
    apellido: 'Pablo'
}

var mascota1 = {
    nombre: 'Napoleon',
    edad: 8
}

var logNombre = function () {
    console.log(this.nombre);
}

var logNombrePersona = logNombre.bind(persona);
var logNombreMacosta = logNombre.bind(mascota1);

logNombrePersona();
logNombreMacosta();

//

const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    description: function() {
        return this.marca;
    }
}

const newDescription = auto.description;

console.log(newDescription());

const bindedDescription = auto.description.bind(auto);

console.log(bindedDescription());

            //

function multiplica(a, b) {
    return a * b;
}

var multiplicaPorDos = multiplica.bind(this, 2);  // deja fijo el valor de 2 en 'multiplica'

console.log(multiplica(2, 3)); 

console.log(multiplicaPorDos(3));;
console.log(multiplicaPorDos(5));;

            //

var persona = {
    nombre: 'Nacho',
    apellido: 'Romero'
}

var masco = {
    nombre : 'Napo',
    edad : 6
}

var logNom = function(edad) {
    console.log(this.nombre, 'tengo' , edad)
}

logNom.call(persona, 31)
logNom.call(masco, 12)