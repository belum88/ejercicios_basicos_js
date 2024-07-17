

const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M."
  ];
  
  function findLongestWord(stringList) {
    let longestWord = [""];
   
    for (let i = 0; i < stringList.length; i++) {
      
      if (stringList[i].length > longestWord[0].length) {
        //S
        longestWord.splice(0, 1, stringList[i]);
      }
    }
    return longestWord;
  }
  
  console.log(findLongestWord(avengers));