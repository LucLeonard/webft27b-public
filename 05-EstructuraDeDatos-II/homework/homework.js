"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {

  this._length = 0;
  this.head = null;                                           
}

function Node(value) {

  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value ) {
  var nodo = new Node (value);      // Guardamos el nodo en una variable
  var nodoActual = this.head;       // Guardamos el nodo actual en una variable para no perder la referencia

  if (!nodoActual){                            // Si la lista esta vacia
    this.head = nodo;                   // Ponemos el nodo en la lista
    this._length++;                     // Aumantamos la longitud de la lista
    return nodo;                         // retornamos el nodo

  }

  if (nodoActual.next){                            // Si el nodo actual tiene un next que no es null
      nodoActual = nodoActual.next;      // Movemos el nodo actual a la siguiente posicion
  }

nodoActual.next = nodo;                   // insertamos el nuevo nodo en el next que tenga null
this._length++;                                 // Aumentamos la longitud de la lista
return nodo;                                      // Retornamos nodo

}

LinkedList.prototype.remove =  function ( ) {

//  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  
var current = this.head;

if (this._length === 0) return null;

if ( this._length === 1 ) {
  let elementRemoved = this.head.value;
  this.head = null;
  this._length--;
  return elementRemoved;
}

while ( current.next.next){
  current = current.next;
}

let elementRemoved = current.next.value;
current.next = null;
this._length--;
return elementRemoved;
}



LinkedList.prototype.search = function ( value) {
      
  let nodoActual = this.head;

  if ( !this.head){
    return null;
  }

// Si la busqueda conicide con un valor que pasaron como parametro

while ( nodoActual ) {

  if ( nodoActual.value === value ) return nodoActual.value;

  if ( typeof value === 'function'){
    if ( value(nodoActual.value)){
      return nodoActual.value;
    }
}
nodoActual = nodoActual.next;

  }
  return null;

}
  

/*
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

function HashTable() {

this.buckets = [];

this.numBuckets = 35;

 }
 HashTable.prototype.hash = function ( key ){ // foo ... hola ... 

  // - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.

  let hash = 0;
  for ( let i = 0; i < key.length ; i++){
    hash += key.charCodeAt(i);
  }
  return hash % this.numBuckets;

 }





 HashTable.prototype.set = function (key, value){
  let indice = this.hash (key);  // Llama al metodo hash para obtener el valor del indice

  if ( typeof key != 'string') {
    throw TypeError('Keys must be strings');
  }
 
if ( this.buckets[indice] === undefined){      // Si el buckets en el indice esta vacio
  this.buckets[indice] = {};                            // Creamos un objeto en el indice
}

this.buckets[indice][key] = value;              // Guardamos en el indice la llave y el valor

  }

  

 


//  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.

HashTable.prototype.get  = function ( key ) {
  let indice = this.hash (key);  // Llama al metodo hash para obtener el valor del indice

  return this.buckets[indice][key];
}


//- hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano)

HashTable.prototype.hasKey = function ( key ) {
  let indice = this.hash (key); 
  
  return this.buckets[indice].hasOwnProperty(key);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
