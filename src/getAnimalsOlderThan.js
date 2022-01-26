const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = species.find((animais) => animais.name === animal);
  return specie.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
