const data = require('../data/zoo_data');

function isManager(id) {
  const manager = data.employees.some((chefe) => chefe.managers.includes(id));
  return manager;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const gerente = data.employees.filter((lider) => lider.managers.includes(managerId));
  return gerente.map((empregado) => `${empregado.firstName} ${empregado.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
