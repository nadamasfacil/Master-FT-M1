"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function(){
  let count = 1; 
  count += this.left ? this.left.size() : 0;
  count += this.right ? this.right.size() : 0;
  return count;
}

BinarySearchTree.prototype.insert = function(data){
  if (data <= this.value) 
    if (!this.left)
      this.left = new BinarySearchTree(data);
    else this.left.insert(data);
  else 
    if (!this.right)
      this.right = new BinarySearchTree(data);
    else this.right.insert(data);
}

BinarySearchTree.prototype.contains = function(data){
  if (data === this.value) return true;
  let found = false;
  if (data <= this.value) found = this.left && found === false ? this.left.contains(data) : false;
  else   found = this.right && found === false ? this.right.contains(data) : false;
  return found;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, method){
  if (!this) return;

  if (!method || method === 'in-order') {
    if (this.left) 
       this.left.depthFirstForEach(cb, method);
    cb(this.value);
    if (this.right) 
      this.right.depthFirstForEach(cb, method);
  }

  if (method === 'pre-order') {
    cb(this.value);
    if (this.left) 
       this.left.depthFirstForEach(cb, method);
    if (this.right) 
      this.right.depthFirstForEach(cb, method);
  }

  if (method === 'post-order') {
    if (!this.left && !this.right) {
      cb(this.value);
      return;
    }
    if (this.left) 
       this.left.depthFirstForEach(cb, method);
    if (this.right) 
       this.right.depthFirstForEach(cb, method);
     cb(this.value);
  }
  return;
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue){
  if (!queue) queue=[];
  if (this.left !== null) queue.push(this.left);
  if (this.right !== null) queue.push(this.right);
  cb(this.value);
  if (queue.length > 0) {
    queue.shift().breadthFirstForEach(cb, queue);
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
