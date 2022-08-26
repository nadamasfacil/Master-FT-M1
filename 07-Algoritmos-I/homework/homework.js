'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let primeNum=[1,2];
  for (let i = 3; i <= 1000; i++){
    let j=2;
    let isPr=false;
    let notPr=true;
    while (j<=i) {
      if (i/j === Math.floor(i/j))
        if (i !== j) notPr=false;
        if (i === j && notPr) isPr=true;
      j++
    }
    if (isPr === true) primeNum.push(i);
  }
  let numFactor=[1];
  let numP2;
  let keep=true;
  let i=1;
  while (keep && i<=num){
    numP2=num/primeNum[i];
    if (numP2 === Math.floor(numP2)){
      numFactor.push(primeNum[i]);
      num=numP2;
      i=0;
      if (num === 1) keep=false;
    }
    i++;
  }
  return numFactor;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let globalChange=false;
  let arrayLong=array.length;
  let ind=0;
  while (!globalChange){
    if (array[ind] > array[ind+1]){
      globalChange=true;
      let indNext=ind;
      let parcialChange=false;
      let numChange=0;
      while (!parcialChange) {
        if (array[indNext] > array[indNext+1]){
          numChange=array[indNext+1];
          array[indNext+1]=array[indNext];
          array[indNext]=numChange;
          indNext++;
        } else parcialChange=true;
        if(indNext >= arrayLong) parcialChange=true;
      }
      ind=0;
    } else ind++;
    if (ind > arrayLong && globalChange === false) globalChange=true;
    else globalChange=false;
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 1) return array;
  let globalChange=false;
  let arrayLong=array.length;
  let ind=1;
  while (!globalChange){
    if (array[ind-1] > array[ind]){
      globalChange=true;
      let indNext=ind;
      let numChange=array[ind];
      array[indNext]=array[indNext-1];
      let isChange= false;
      let indTwo=indNext-2;
      while (isChange === false){
        if (array[indTwo] > numChange ){
          array[indTwo+1]=array[indTwo];
          indTwo--
        } else isChange=true;
      }  
      array[indTwo+1]=numChange;
    } else ind++; 
    if (ind > arrayLong && globalChange === false) globalChange=true;
    else globalChange=false; 
  }
  return array;
}
 
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 1) return array;
  let valueInd;
  let indInd;
  for (let i = 0; i < array.length; i++){
    indInd=i;
    for (let j=indInd+1; j < array.length; j++){ 
      if (array[indInd] > array[j]) {
        indInd=j;
      }
    }
    valueInd=array[indInd];
    for (let j=indInd; j > i; j--){
      array[j]=array[j-1];
    }
    array[i]=valueInd;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
