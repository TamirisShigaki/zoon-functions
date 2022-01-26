const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  const employee = data.employees.find((element) => element.id === id);
  return managers.some((idManager) => employee.id === idManager);
}

console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
