'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let cadena =  num.toString();
  let largoCadena = cadena.length - 1;
  let numeroResultado = 0;
  let numeroAplicado = 0;

  for ( let i = 0; i <= largoCadena; i++) {
    numeroAplicado = parseInt(cadena[i]);
    numeroResultado += ( 2 ** ( largoCadena - i ) ) * numeroAplicado;
  }
  
  return numeroResultado;
}

function DecimalABinario(num) {
  // tu codigo aca

  let cadena = "";
  let cadenaInvertida = "";
  let seguir = true;
  let numeroProcesado = num;
  let numeroRestante = 0;

  while ( seguir ) {
    numeroRestante = numeroProcesado % 2;
    numeroProcesado = Math.floor ( numeroProcesado / 2 );
    if ( numeroRestante == 0 ) { cadena += '0'; 
    } else cadena += '1';
    
    if ( numeroProcesado == 0 ) seguir = false;
  }

  for ( let i = cadena.length-1; i >= 0; i--) cadenaInvertida += cadena[i];

  return cadenaInvertida;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}