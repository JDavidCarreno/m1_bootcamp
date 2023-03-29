x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);
   console.log(a);
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);

var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);

var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);

var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);

6 / "3"    //hacer la operacion
"2" * "3"          // hace la operación
4 + 5 + "px"    // lee de izquierda a derecha, entonces realiza la suma y luego concatena con el string 

"$" + 4 + 5     // concatena todo, lo toma como concatenación de todo
"4" - 2     //hace la operación 
"4px" - 2   // NaN, - es con numero, entonces devuelve que no es un número
7 / 0       // Infinity   ---> ? 
{}[0]       //undefined
parseInt("09")  // 9 
5 && 2      // devulve 2
2 && 5        // devuelve 5         parace que devuelve el último
5 || 0      // devuelve 5,        parace que devuelve el primero  0 es false en JS
0 || 5          // devuelve 5 
[3]+[3]-[10]   // como son arreglo, + los concatena en un string 
                //  ejemplo [2, 3, 3] + [1, 2, 3] --> "2, 3, 31, 2, 3"
                // luego: [3] + [3] --> "33", y ahora "33" - 10 --> 23
3>2>1       //false 
// Cuando se compara un valor booleano (verdadero o falso) con un número, JavaScript convierte el valor booleano en un número utilizando la siguiente regla: verdadero se convierte en 1, y falso se convierte en 0.

// luego primero interpreta 3 > 2, que es true, y luego como queda  
// true > 1, por lo anterior lo convierte en, 1 > 1, que es false.
//[] == ![]  // true   [] se vuelve una cadena de texto vacía, que se convierte en 0.
            //         ![] es una negación, entonces toma valor booleano, y todo objeto en js, es truthy, entonces se convierte en false, o sea en 0.
            // Así entonces queda 0 == 0 que es true.

function test() {
    console.log(a);
    console.log(foo());
             
    var a = 1;
        function foo() {
            return 2;
        }
}
             
test();

var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   console.log(snack);
   return snack;
}

getFood(false);   // devuelve 'undefined' porque dentro de la funcion no queda definida snack con false.

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;  //aquí se pierde la referencia del objeto

console.log(test());

function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing();