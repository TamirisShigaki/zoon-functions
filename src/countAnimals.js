const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, currentValue) => {
      const key = currentValue.name;
      const value = currentValue.residents.length;
      acc[key] = value;
      return acc;
    }, {});
  }
  const foundSpecie = data.species.find((specie) => specie.name.includes((animal.specie)));
  if (!animal.sex) {
    return foundSpecie.residents.length;
  }
  return foundSpecie.residents.filter((resident) => resident.sex === animal.sex).length;
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;

//! Linha 12 a 16 com ajuda do Roberval (monitoria)
