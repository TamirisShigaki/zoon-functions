const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species.filter((specie) => ids.includes(specie.id));

module.exports = getSpeciesByIds;

//! Referencia

// .includes https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
