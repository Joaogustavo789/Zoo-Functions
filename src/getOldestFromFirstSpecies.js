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

/* A função recebe um parâmetro id referente à pessoa colaboradora e a partir desse id

1) Encontre a pessoa colaboradora que possui o id passado por parâmetro;

2) Encontre a primeira espécie de animal que a pessoa colaboradora é responsável;

3) Encontre o animal mais velho daquela espécie;

4) Retorne um array com as informações do animal mais velho daquela espécie. */
