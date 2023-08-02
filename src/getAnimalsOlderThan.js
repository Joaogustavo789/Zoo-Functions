const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((animals) => animals.name === animal);

  const verifyAnimalAge = findAnimal.residents.every((ages) => ages.age >= age);

  return verifyAnimalAge;
}

module.exports = getAnimalsOlderThan;
