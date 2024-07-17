//11. Promedio mezclado.
const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  //Declaramos nuestra variable que contendrá la suma.
  let sum = 0;
  //Recorremos el array.
  for(let i = 0; i < list.length; i++){
  //Si el tipo de dato es un estring, suma su length, si no, lo ignora y suma el entero.
  if(typeof(list[i]) === "string"){
    for(let j = 0; j < list[i].length; j++){
     sum += list.length;
    } 
  } else {
    sum += list[i];
    }
  }
return sum / list.length;  
}


console.log(averageWord(mixedElements));