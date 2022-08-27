'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let arrayLength=array.length;
  let pivote=Math.floor(Math.random()*arrayLength);
  let arrayPivote=array[pivote];
  let arrayLeft=[];
  let arrayRight=[];
  for (let i=0; i < arrayLength; i++)
    if (i !== pivote){
        if (array[i] <= arrayPivote) arrayLeft.push(array[i]);
        else arrayRight.push(array[i]);
  }
  arrayLeft=quickSort(arrayLeft);
  arrayRight=quickSort(arrayRight);
  array=[];
  array=array.concat(arrayLeft);
  array.push(arrayPivote);
  array=array.concat(arrayRight);
  return array;

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let arrayLeft=[];
  let arrayRight=[];
  let arrayLength=array.length;
  let temp=0, indInd=0;
  let numMid=Math.floor(arrayLength/2)-1;
  for (let i=0; i < arrayLength; i++){
      if (i <= numMid) arrayLeft.push(array[i]);
      else arrayRight.push(array[i]);
  }
  arrayLeft=mergeSort(arrayLeft);
  arrayRight=mergeSort(arrayRight);
  for (let i = 0; i < arrayRight.length; i++){
      arrayLeft.push(arrayRight[i]);
      indInd=arrayLeft.length;
      while (indInd > 0){   
        if (arrayLeft[indInd-1] > arrayLeft[indInd]){
            temp=arrayLeft[indInd-1];
            arrayLeft[indInd-1]=arrayLeft[indInd];
            arrayLeft[indInd]=temp;
        }
        indInd--  
      }
  }
  array=arrayLeft;
  return array;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
