const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((em) => employeeName === em.firstName || employeeName === em.lastName);
}

module.exports = getEmployeeByName;
