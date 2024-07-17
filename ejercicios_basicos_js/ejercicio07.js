//7. Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
    if(numberOne > numberTwo){
        console.log(numberOne + " es mayor que " + numberTwo);
    } else {
        console.log(numberOne + " es menor que " + numberTwo);
    }
  }

  greaterNumber(4, 8);
  greaterNumber(9, 4);