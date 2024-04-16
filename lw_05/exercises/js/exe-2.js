function highValue(numbers) {
  //Ho creato una costante per trovare il valore massimo dell'array//
  const filterValue = Math.max(...numbers);

  //Ho filtrato l'array inserendo solo il valore massimo//
  const result = numbers.filter((num) => num === filterValue);

  //Ho restituito l'array filtrato con il valore massimo//
  return result;
}

const numbers = [5, 17, 11, 22, 23];

console.log("Il valore più alto dell'array è:", highValue(numbers));
