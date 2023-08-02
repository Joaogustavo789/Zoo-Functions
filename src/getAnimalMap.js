const data = require('../data/zoo_data');

const { species } = data;

function animalsByNameSexSorted(sex, sorted) {
  const animalName = {};

  species.forEach((animal) => {
    if (!animalName[animal.location]) {
      animalName[animal.location] = [];
    }

    const speciesObj = {};
    speciesObj[animal.name] = animal.residents.map((resident) => resident.name);
    if (sex) {
      speciesObj[animal.name] = animal.residents.filter((resi) => resi.sex === sex)
        .map((aniName) => aniName.name);
    }
    if (sorted) speciesObj[animal.name].sort();
    animalName[animal.location].push(speciesObj);
  });

  return animalName;
}

function animalsByLocation() {
  const animalLoc = {};

  const locationsAnimals = species.map((animal) => animal.location);

  locationsAnimals.forEach((location) => {
    const filterAnimalLoc = species.filter((animal) => animal.location === location);
    const mapAnimalLoc = filterAnimalLoc.map((animal) => animal.name);

    animalLoc[location] = mapAnimalLoc;
  });

  return animalLoc;
}

function getAnimalMap(options) {
  if (options === undefined) {
    return animalsByLocation();
  }

  const { includeNames, sorted, sex } = options;

  if (!includeNames) {
    return animalsByLocation();
  }

  return animalsByNameSexSorted(sex, sorted);
}

module.exports = getAnimalMap;
