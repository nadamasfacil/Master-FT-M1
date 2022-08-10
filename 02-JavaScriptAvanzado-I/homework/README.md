
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

Respuesta: Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.

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
// imprime 10 para x en c variable en c
// imprime 8 para a en c parámetro en c
// imprime 8 para b en f  parámetro en f
// imprime 9 para b en c  -> me equivoque puse antes 10 parámetro en c
console.log(b);
// imprime 10 para b en el contexto principal variable global
console.log(x);
// imprime 1 para x en el contexto principal variable global
```

```javascript
console.log(bar);
// bar is not defined ---->>> se rompio la ejecucion aqui crash
console.log(baz);
// bar is not defined
foo();
// 'Hola!'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
// imprime Tony
```

```javascript
var instructor = "Tony";
console.log(instructor); // imprime Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // imprime Franco
   }
})();
console.log(instructor); // imprime Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // imprime The Flash
    console.log(pm); // imprime Reverse Flash
}
console.log(instructor); // imprime The Flash   -> me equivoque puse Tony antes
console.log(pm); // imprime Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3"  // 6
4 + 5 + "px" // 9px -> me equivoque puse 45px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity -> me equivoque puse error division entre 0
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2  -> me equivoque puse true
2 && 5 // 5  -> me equivoque puse true
5 || 0 // 5  -> me equivoque puse true
0 || 5 // 5  -> me equivoque puse true
[3]+[3]-[10] // 23  -> me equivoque puse [-6]
3>2>1 // false
[] == ![] // true  -> me equivoque puse false
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
// undefined para a en console.log y regresa el valor 2 en foo()
// -> me equivoque puse se rompe el código porque la variable a no esta definida en el console.log
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

// retorna Meow Mix
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

console.log(obj.prop.getFullname()); // Aurelio De Rosa  -> me equivoque puse Natalia Nerea
                                     // Aqui regresa el valor de obj.prop.fullname que es diferente a obj.fullname
var test = obj.prop.getFullname; // Hace referencia a la funcion getFullname en obj.prop

console.log(test()); // Undefined  -> me equivoque puse Aurelio de Rosa
                     // Aqui el this no apunta al objeto obj si no al objeto global
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
// primero la funcion printing
// después el console.log(1)
// se hace un setTimeout de 1000 pero no se ejecuta
// se hace un setTimeout de 0 pero no se ejecuta
// después el console.log(4)
// después el setTimeout de 0
// después el SetTimeout de 1000
// esto es porque primero se ejecuta el código sincrónico y después el asincrónico
```
