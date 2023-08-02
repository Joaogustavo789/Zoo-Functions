const data = require('../data/zoo_data');

function isManager(id) {
  const dataEmployee = data.employees;

  const getManager = dataEmployee.some((man) => man.managers.includes(id));

  return getManager;
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);

  const dataEmployee = data.employees;

  if (manager === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  if (manager === true) {
    const filterEmRelated = dataEmployee.filter((em) => em.managers.includes(managerId));

    const emRelated = filterEmRelated.map((emp) => `${emp.firstName} ${emp.lastName}`);

    return emRelated;
  }
}

module.exports = { isManager, getRelatedEmployees };
