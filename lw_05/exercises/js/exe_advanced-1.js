function incrementedSalary(person) {
  const peopleToIncrease = person
    .filter((person) => person.pay < 3000)
    .map((person) => {
      return person.name + ": " + person.pay * 1.1;
    });
  return peopleToIncrease;
}

const person = [
  {
    name: "Mario",
    pay: 2500,
  },

  { name: "Anna", pay: 3200 },

  { name: "Luigi", pay: 2800 },

  { name: "Laura", pay: 2900 },
];

const newPerson = incrementedSalary(person);

console.log(newPerson);
