//10. Calcular un promedio.
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
    let sumTotal = 0;
    for (let i = 0; i < numberList.length; i++) {
      sumTotal += numberList[i];
    }
    return Math.round(sumTotal / numbers.length);
}

console.log(average(numbers));