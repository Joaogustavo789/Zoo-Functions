const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const colaborador = employees.find((empregado) => empregado.id === id).responsibleFor[0];
  return Object.values(species.find((animalVelho) => animalVelho.id === colaborador).residents
    .reduce((acc, curr) => {
      if (acc.age > curr.age) {
        return acc;
      }
      return curr;
    }));
}

module.exports = getOldestFromFirstSpecies;
