const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const idsFilter = data.species.filter((animal) => ids.includes(animal.id));

  return idsFilter;
}

module.exports = getSpeciesByIds;
