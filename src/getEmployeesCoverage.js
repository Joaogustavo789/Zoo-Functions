const data = require('../data/zoo_data');

const { employees, species } = data;

function employeesByZoo(employee) {
  const empValue = Object.values(employee);

  const findEmployee = employees.find((emp) => (
    emp.firstName === empValue[0] || emp.lastName === empValue[0] || emp.id === empValue[0]
  ));

  if (empValue[0] === 'Id inválido' || !findEmployee.firstName || !findEmployee.lastName) {
    throw new Error('Informações inválidas');
  }

  return findEmployee;
}

function speciesByZoo(param) {
  const getResponsibleByEmp = employeesByZoo(param).responsibleFor;

  const findAnimals = species.filter((animal) => getResponsibleByEmp.includes(animal.id));

  return findAnimals;
}

function employeesForZoo() {
  const employeeById = employees.map((emp) => emp.id);
  const allEmployees = [];

  employeeById.forEach((emplo) => {
    const getEmployeeById = employeesByZoo({ id: emplo });
    const getSpeciesByZoo = speciesByZoo({ id: emplo });

    const objEmplo = {
      id: emplo,
      fullName: `${getEmployeeById.firstName} ${getEmployeeById.lastName}`,
      species: getSpeciesByZoo.map((animalName) => animalName.name),
      locations: getSpeciesByZoo.map((animalLocation) => animalLocation.location),
    };

    allEmployees.push(objEmplo);
  });

  return allEmployees;
}

function getEmployeesCoverage(param) {
  if (param === undefined) {
    return employeesForZoo();
  }

  const getSpecies = speciesByZoo(param);
  const getEmployees2 = employeesByZoo(param);

  const animalsName = getSpecies.map((animalName) => animalName.name);
  const animalsLocation = getSpecies.map((animalLocation) => animalLocation.location);

  const employeeForZoo = {
    id: getEmployees2.id,
    fullName: `${getEmployees2.firstName} ${getEmployees2.lastName}`,
    species: animalsName,
    locations: animalsLocation,
  };

  return employeeForZoo;
}

module.exports = getEmployeesCoverage;
