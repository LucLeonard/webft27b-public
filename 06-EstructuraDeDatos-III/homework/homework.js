"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value ) {

this.value = value;
this.left = null;
this.right = null;

}

// - insert: agrega un nodo en el lugar correspondiente
BinarySearchTree.prototype.insert = function ( value ) {

  // RAMA DERECHA
// Comparar si el valor que nos mandan es mayor o menor que el valor del nodo actual
if (value > this.value ) {
    
    // Preguntamos si derecha esta libre o ocupado
    if ( this.right !== null ) {

      this.right.insert(value);   // Si esta ocupada, hacemos recursividad para que vuelva al IF y compruebe en el siguiente arbol derecho
    
    }else{

      // La rama esta vacia
       this.right = new BinarySearchTree(value);      // Creo un nuevo arbol y lo inserto en lado derecho 
    }
}

// RAMA IZQUIERDA
if (value < this.value){

  if (this.left !== null){

    this.left.insert(value);
  }else {
    
    this.left = new BinarySearchTree(value);
  }
}

}

//  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
BinarySearchTree.prototype.contains = function (value){

  // Si el valor de la cabeza del arbol es igual al que nos envian, retornamos true
  if ( this.value == value){
    return true;
  }

// Si el valor que nos envian es mayor al valor de la cabeza del arbol, nos vamos para la rama derecha
if ( value > this.value){

    // Preguntamos si hay alguna rama en el lado derecho
    if ( this.right === null){
      return false;

      // Si hay una rama en el lado derecho
    }else{

      // Llamamos recursivamente a la funcion para que haga los mismos pasos sobre la cabeza del arbol 
     return this.right.contains(value);

    }
}

// RAMA IZQUIERDA
  // Si el valor que nos envian es menor al valor que tiene la cabeza del arbol, vamos para la rama izquierda
  if ( value < this.value){
    
      // Preguntamos si en la rama izquierda hay algo
      if (this.left === null){

        return false;
      }else{

        // Si hay algo, llamamos recursivamente a la funcion
        return this.left.contains(value);
      }
  }


  }

// - size: retorna la cantidad total de nodos del árbol
  BinarySearchTree.prototype.size  = function ( ) {

    if ( this.left === null && this.right === null ) return 1;  // Si la rama izquierda no tiene nada y la rama derecha tampoco ... retorna 1
    if (this.left !== null && this.right === null ) return 1 + this.left.size() ;        // Si la rama izquierda tiene algo y la rama derecha no tiene nada .... retorna 1 y se llama recursivamente a la funcion
    if ( this.left === null && this.right !== null ) return 1 + this.right.size() ;
    if ( this.left !== null && this.right !== null ) return 1 + this.left.size() + this.right.size();
  }

//- depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  BinarySearchTree.prototype.depthFirstForEach = function (cb, order){
// PRE-ORDER   ( Raiz - Izquierda - Derecha)
    // POST-ORDER   ( Izquierda - Derecha - Raiz)
  if ( order === "pre-order" ){
cb(this.value);
  if (this.left !== null)  this.left.depthFirstForEach(cb, order);
  if ( this.right !== null) this.right.depthFirstForEach(cb, order);

}else if(order === "post-order") {         
if ( this.left !== null)  this.left.depthFirstForEach(cb, order);
if ( this.right !== null) this.right.depthFirstForEach(cb, order);
cb(this.value);
  
  }else{                           // IN-ORDER  (Izquierda - Raiz - Derecha)
    if ( this.left !== null)  this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if ( this.right !== null) this.right.depthFirstForEach(cb, order);

  }


}
 
//- breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
BinarySearchTree.prototype.breadthFirstForEach = function ( cb, array = [] ){

  if (this.left !== null) {
    // Si en rama izquierda hay algo, guardamos la rama en al array
    array.push(this.left);
  }

  if (this.right !== null) {

    // Si en rama derecha hay algo, guardamos la rama en al array
    array.push(this.right);
  }

  // Invocamos el cb con el valor de la cabeza del arbol
  cb(this.value);

  // Si el array tiene elementos
  if (array.length > 0) {

    // Vamos limpiando el array y hacemos recursividad
    array.shift().breadthFirstForEach(cb, array);
  }

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
