//12. Valores únicos.

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicates(list) {
    // Creamos un nuevo array vacío para almacenar los elementos únicos
    let uniqueArray = [];
  
    // Iteramos sobre el array dado
    for (let i = 0; i < list.length; i++) {
      // Si el elemento actual no está en uniqueArray, lo añadimos
      if (!uniqueArray.includes(list[i])) {
        uniqueArray.push(list[i]);
      }
    }
  
    return uniqueArray;
  }
  
  console.log(removeDuplicates(duplicates)); // Salida: ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'chicken', 'onion rings', 'soda']
  