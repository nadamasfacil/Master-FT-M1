// let numeroPrimos=[1,2];
// for (let i = 3; i <= 1000; i++){
//   let j=2;
//   let esPrimo=false;
//   let noesPrimo=true;
//   while (j<=i) {
//     if (i/j === Math.floor(i/j))
//       if (i !== j) noesPrimo=false;
//       if (i === j && noesPrimo) esPrimo=true;
//     j++
//   }
//   if (esPrimo === true) numeroPrimos.push(i);
// }
// console.log(numeroPrimos);
// numPrimo=numeroPrimos;
// numIs=[];
// for (let i=1; i<=200; i++) numIs.push(i);
// for (let k = 0; k < numIs.length; k++) {
// let numFact=numIs[k];
// let numFactor=[1];
// let mientras=true;
// let i=1;
// while (mientras && i<=numFact){
//   numP2=numFact/numPrimo[i];
//   if (numP2 === Math.floor(numP2)){
//     numFactor.push(numPrimo[i]);
//     numFact=numP2;
//     i=0;
//     if (numFact === 1) mientras=false;
//   }
//   i++;
// }
// console.log(`numero a factorizar ${numIs[k]} con ${numFactor}`);
// }

// arrayOrder=[];
// for (let i=1; i<=15; i++){
//   arrayOrder.push(Math.floor(Math.random()*100));
// }
// console.log(arrayOrder);
// function bubbleSort(array){
//   let t0=performance.now();
//   let globalChange=false;
//   let arrayLong=array.length;
//   let ind=0;
//   while (!globalChange){
//     if (array[ind] > array[ind+1]){
//       globalChange=true;
//       let indNext=ind;
//       let parcialChange=false;
//       let numChange=0;
//       while (!parcialChange) {
//         if (array[indNext] > array[indNext+1]){
//           numChange=array[indNext+1];
//           array[indNext+1]=array[indNext];
//           array[indNext]=numChange;
//           indNext++;
//           console.log('cambie '+indNext+' por '+(indNext+1));
//           console.log(array);
//         } else parcialChange=true;
//         if(indNext >= arrayLong) parcialChange=true;
//       }
//       ind=0;
//     } else ind++;
//     console.log('i es '+ind);
//     console.log('globalchange es '+globalChange);
//     console.log('largo del arreglo '+arrayLong);
//     if (ind > arrayLong && globalChange === false) globalChange=true;
//     else globalChange=false;
//   }
//   let t1=performance.now();
//   console.log('tiempo 1 '+t0);
//   console.log('tiempo 2 '+t1);
//   console.log('tiempo total '+(t1-t0));

//   return array;
// }
// arrayImp=bubbleSort(arrayOrder);
// console.log('arreglo ordenado '+arrayImp);

arrayOrder=[];
for (let i=1; i<=2000; i++){
  arrayOrder.push(Math.floor(Math.random()*1000));
}
console.log(arrayOrder);
function insertionSort(array){
  if (array.length < 1) return array;
  let t0=performance.now();
  let globalChange=false;
  let arrayLong=array.length;
  let ind=1;
  while (!globalChange){
    if (array[ind-1] > array[ind]){
      globalChange=true;
      let indNext=ind;
      let numChange=array[ind];
      array[indNext]=array[indNext-1];
      console.log('cambie el '+(indNext+1)+' valor '+array[indNext]+' por el '+(indNext)+' para '+array[indNext-1]);
      console.log(array);
      let isChange= false;
      let indTwo=indNext-2;
      while (isChange === false){
        if (array[indTwo] > numChange ){
          console.log('cambio el '+(indTwo+1)+' valor '+array[indTwo+1]+' por el '+(indTwo)+' para '+array[indTwo]);
          array[indTwo+1]=array[indTwo];
          console.log(array);
          indTwo--
        } else isChange=true;
      }  
      array[indTwo+1]=numChange;
      console.log('cambie el '+(indTwo+1)+' por el valor '+numChange);
      console.log(array);
    } else ind++; 
    if (ind > arrayLong && globalChange === false) globalChange=true;
    else globalChange=false; 
  }
  let t1=performance.now();
  console.log('tiempo 1 '+t0);
  console.log('tiempo 2 '+t1);
  console.log('tiempo total '+(t1-t0));
  return array;
}
arrayImp=insertionSort(arrayOrder);
console.log('arreglo ordenado '+arrayImp);

// arrayOrder=[];
// for (let i=1; i<=2000; i++){
//   arrayOrder.push(Math.floor(Math.random()*100));
// }
// console.log(arrayOrder);
// function selectionSort(array){
//   if (array.length < 1) return array;
//   let t0=performance.now();
//   let globalChange=false;
//   let arrayLong=array.length;
//   let arrayExtra=[];
//   let valueInd, indInd=0;
//   while (!globalChange){
//     valueInd=array[0];
//     indInd=0;
//     for (let i=1; i < arrayLong; i++){
//       if (array[i] < valueInd){
//         valueInd=array[i];
//         indInd=i;
//       }
//     }
//     //valueInd=array.reduce((a,b)=>Math.min(a,b));
//     //indInd=array.findIndex((a)=> a === valueInd);
//     console.log('valor minimo '+valueInd);
//     console.log('indice valor minimo '+indInd);
//     arrayExtra.push(valueInd);
//     console.log('arreglo nuevo '+arrayExtra);
//     for (let i=indInd; i < arrayLong-1; i++) array[i]=array[i+1];
//     console.log('arreglo '+array);
//     array.pop();
//     console.log('arreglo con pop '+array);
//     arrayLong=array.length;
//     console.log('nueva dimension en arreglo '+arrayLong);
//     if (arrayLong === 0) globalChange=true;
//   }
//   let t1=performance.now();
//   console.log('tiempo 1 '+t0);
//   console.log('tiempo 2 '+t1);
//   console.log('tiempo total '+(t1-t0));
//   return arrayExtra;
// }
// arrayImp=selectionSort(arrayOrder);
// console.log('arreglo ordenado '+arrayImp);
