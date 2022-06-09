
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);

//  La invocacion a la funcion c ingresa al stack, ingresa a la funcion, imprime el la variable x que vale 10, imprimer la variable a que vale 8
// imprime 8 en la variable a porque en la invocacion a la funcion, se le pasa el valor 8 como argumento al parametro a de la funcion.
// luego la invocacion a la funcion f ingresa al stack, ingresa a la funcion, ahora b tiene el valor de a porque se hizo una copia de la variable a,
// imprime el valor de 8, ya que a tiene ese valor en el argumento, luego se crea una variable con el mismo nombre de x, pero se le asigna otro valor, en este caso 5
// imprime el valor de b que tiene el valor de 9 (por argumento)...luego imprime el console.log de b que vale 10, por la variable que se inicio en el principio del codigo, luego imprime el valor de x (mismo caso que el console.log anterior (b) ) ...  Numeros que imprime :  10 \ 8 \ 8 \ 9 \ 10 \ 1 ... El valor 5 de la variable x nunca tuvo alcance ya que se mostro al final del codigo, fuera de la funcion donde estaba inicializada esa variable.

//

```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

// No imprime ya que da error, porque se quiere imprimir algo que no fue asignado con ningun valor aun, los console.log tienen que estar luego de que se asignan los valores de la variable que se quiere imprimir

```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

// Imprime Franco ya que ingresa al IF y como es true imprime la variable asignada dentro del IF, la variable que esta fuera del IF no tiene alcance dentro del statement por eso no se imprime
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);

// Primero imprime Tony, ya que el primer console.log ingresa al stack e imprime la variable instructor que fue asignada al principio del codigo, luego la funcion ingresa al stack, imprime Franco ya que lee el console.log y la variable local instructor tiene ese valor, por ultimo imprime Tony nuevamente, ya que el console.log que esta al final imprime la variable que se declaro al princpio del codigo, no imprime la variable que esta dentro de la funcion porque no se invoco a la funcion 

```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);

// Primero imprime The Flash y luego Reverse Flash ya que el IF ingresa al stack, comprueba que es true e imprime los dos console.log que estan dentro del IF, las variables dentro del IF son locales, no tienen alcance las variables que estan fuera.
// luego imprime Tony y luego Franco, ya que ingresa el console.log del final, y ese console.log tiene asignado esos nombres en las variables que se declararon al inicio del codigo


```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  ==>  // Number 2
"2" * "3"  ==>  // Number 6
4 + 5 + "px"   ==> // String 9px
"$" + 4 + 5  ==>  // String $45
"4" - 2  ==> // Number 2
"4px" - 2  ==>  // NaN
7 / 0  ==>  //  Infinity
{}[0]  ==>  // Array [0]
parseInt("09")  ==> // Number Int (entero) 9
5 && 2  ==>  // Number 2
2 && 5  ==>  // Nuimber 5
5 || 0  ==>  // Number 5
0 || 5  ==> // Number 0
[3]+[3]-[10]  ==>  // Number 23  (concatena 3 y 3 ... luego le resta 10)
3>2>1  ==>  // False
[] == ![]   ==> //
``` 

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();


```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();


// printing entra en el stack
```
