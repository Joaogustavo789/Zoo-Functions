const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animais) => animal === animais.name).residents
    .every((idade) => idade.age > age);
}

module.exports = getAnimalsOlderThan;
