//13.Buscador de nombre.

const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function nameFinder(nameList, myName) {
    const findedName = nameList.find((element) => element === myName);
    const findIndex=  nameList.indexOf(findedName)
   if(findedName){;
    return [true, findIndex];
   }else{
    return false;
   }
  }

  console.log(nameFinder(names, "Steve"));
  console.log(nameFinder(names, "Peggy"))