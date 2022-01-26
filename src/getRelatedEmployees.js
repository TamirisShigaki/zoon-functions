const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managersList = [stephanieId, olaId, burlId];

function isManager(id) {
  const employee = data.employees.find((element) => element.id === id);
  return managersList.some((idManager) => employee.id === idManager);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employee = employees
      .filter(({ managers }) => managers.some((element) => element === managerId));
    return employee.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

//! Monitoria, com ajuda do Roberval
