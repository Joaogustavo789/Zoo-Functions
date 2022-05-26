const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acumulador, elemento) => {
    if (elemento.age < 18) {
      return {
        ...acumulador,
        child: acumulador.child + 1,
      };
    }
    if (elemento.age >= 18 && elemento.age < 50) {
      return {
        ...acumulador,
        adult: acumulador.adult + 1,
      };
    }
    return {
      ...acumulador,
      senior: acumulador.senior + 1,
    };
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return (prices.child * child) + (prices.adult * adult) + (prices.senior * senior);
}

module.exports = { calculateEntry, countEntrants };
