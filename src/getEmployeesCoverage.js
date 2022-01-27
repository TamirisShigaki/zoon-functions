const data = require('../data/zoo_data');

function getNameSpecie(idAnimal) {
  return data.species.find((animal) => animal.id === idAnimal).name;
}

function getLocationsSpecie(idAnimal) {
  return data.species.find((animal) => animal.id === idAnimal).location;
}

function montandoObject(objectEmployee) {
  return {
    id: objectEmployee.id,
    fullName: `${objectEmployee.firstName} ${objectEmployee.lastName}`,
    species: objectEmployee.responsibleFor.map((id) => getNameSpecie(id)),
    locations: objectEmployee.responsibleFor.map((id) => getLocationsSpecie(id)),
  };
}

function verificaEmployee(employee) {
  return data.employees.find((empregado) => {
    if (empregado.id === employee.id) return true;
    if (empregado.firstName === employee.name) return true;
    if (empregado.lastName === employee.name) return true;
    return false;
  });
}

function getEmployeesCoverage(employee) {
  if (!employee) {
    return data.employees.map((empregado) => montandoObject(empregado));
  }

  const employeeEncontrado = verificaEmployee(employee);

  if (!employeeEncontrado) {
    throw new Error('Informações inválidas');
  }
  const resposta = montandoObject(employeeEncontrado);
  return resposta;
}

module.exports = getEmployeesCoverage;

//! Ajuda Do Marcelo Adriano Turma 15 - Tribo A
