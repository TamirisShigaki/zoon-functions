const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species.filter((specie) => ids.includes(specie.id));

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;

//! Referencia

// .includes https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
