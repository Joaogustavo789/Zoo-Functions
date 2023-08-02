const data = require('../data/zoo_data');

const dataSpecies = data.species;

function specieSex(animal) {
  const findAnimalCount = dataSpecies.find((specie) => specie.name === animal.specie);

  if (animal.sex === undefined) {
    const countAnimal2 = findAnimalCount.residents.length;

    return countAnimal2;
  }

  const findAnimalSex = findAnimalCount.residents.filter((resident) => resident.sex === animal.sex);

  const countAnimalSex = findAnimalSex.length;

  return countAnimalSex;
}

function countAnimals(animal) {
  if (!animal) {
    const countAnimal = {};

    dataSpecies.forEach((specie) => {
      countAnimal[specie.name] = specie.residents.length;
    });

    return countAnimal;
  }

  const specieSexFunction = specieSex(animal);

  return specieSexFunction;
}

module.exports = countAnimals;
