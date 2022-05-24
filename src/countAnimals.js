const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acumulador, { name, residents }) => (
      { ...acumulador, [name]: residents.length }
    ), {});
  }
  const { specie, sex } = animal;
  if (sex) {
    return data.species.find(({ name }) => name === specie)
      .residents.filter(({ sex: sexo }) => sexo === sex).length;
  }
  return data.species.find(({ name }) => name === specie).residents.length;
}

module.exports = countAnimals;
