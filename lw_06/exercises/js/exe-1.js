function calculateAverage(arrNumbers) {
  let sum = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    sum += arrNumbers[i];
  }
  return sum / arrNumbers.length;
}

const arrNumbers = [5, 12, 3, 8, 20, 17, 9];
const average = calculateAverage(arrNumbers);

console.log(average);
