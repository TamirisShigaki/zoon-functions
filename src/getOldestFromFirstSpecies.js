const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((element) => element.id === id);

  const idAnimal = employee.responsibleFor[0];

  const animal = data.species.find((specie) => specie.id === idAnimal);

  const olderAge = animal.residents.reduce((acc, current) => {
    if (current.age > acc.age) return current;
    return acc;
  });
  return Object.values(olderAge);
}

module.exports = getOldestFromFirstSpecies;
