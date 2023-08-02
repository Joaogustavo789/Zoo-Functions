const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const findEmployees = employees.find((employee) => employee.id === id);

  const firstSpecie = findEmployees.responsibleFor[0];

  const findSpecie = species.find((animal) => animal.id === firstSpecie);

  const findOldestAnimal = findSpecie.residents.reduce((olderAge, currentAge) => (
    olderAge.age > currentAge.age ? olderAge : currentAge
  ));

  const oldestAnimal = Object.values(findOldestAnimal);

  return oldestAnimal;
}

module.exports = getOldestFromFirstSpecies;
