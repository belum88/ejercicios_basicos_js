const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  
  function repeatCounter(wordList) {
    let arrayCount = [];
  
    for (let word of wordList) {
      if (arrayCount[word]) {
        arrayCount[word]++;
      } else {
        arrayCount[word] = 1;
      }
    }
    return arrayCount;
  }
  
  console.log(repeatCounter(words));
  