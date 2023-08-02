const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const countVisits = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((visit) => {
    if (visit.age < 18) {
      countVisits.child += 1;
    }
    if (visit.age >= 18 && visit.age < 50) {
      countVisits.adult += 1;
    }
    if (visit.age >= 50) {
      countVisits.senior += 1;
    }
  });

  return countVisits;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const { prices } = data;

  const allVisists = countEntrants(entrants);

  const totalChild = allVisists.child * prices.child;
  const totalAdult = allVisists.adult * prices.adult;
  const totalSenior = allVisists.senior * prices.senior;

  const totalPrice = totalChild + totalAdult + totalSenior;

  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
