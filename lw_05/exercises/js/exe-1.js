function countVocal(name) {
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (
      name[i] === "a" ||
      name[i] === "e" ||
      name[i] === "i" ||
      name[i] === "o" ||
      name[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
const vocals = ["a", "e", "i", "o", "u"];

const welcomeUtent = prompt("Benvenuto in questa nuova avventura!");

const name = "Doriana";

const numbersVocal = countVocal(name);

console.log("Il numero totale di vocali nella stringa è:", numbersVocal);
