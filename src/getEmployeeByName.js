const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const dataEm = data.employees;

  const findEm = dataEm.find((em) => em.firstName === employeeName || em.lastName === employeeName);

  if (findEm === undefined) {
    return {};
  }

  return findEm;
}

module.exports = getEmployeeByName;
