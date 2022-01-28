const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const keyDay = Object.keys(hours);
const valueDay = Object.values(hours);
const dayAnimal = species.map(({ availability, name }) => ({ [name]: availability }));

const getAnimal = (parametro) => dayAnimal.find((objeto) =>
  Object.keys(objeto)[0] === parametro);

const getAnimalDay = (parametro) => {
  const days = species.map(({ availability }) => availability);
  const resultado = [];
  days.forEach((array, index) => {
    if (array.find((dia) => dia === parametro)) {
      resultado.push(Object.keys(dayAnimal[index])[0]);
      return false;
    }
    return false;
  });
  return resultado;
};

const semParametro = () => {
  const objeto = {};
  keyDay.map((dia, index) => {
    objeto[dia] = {
      officeHour: `Open from ${valueDay[index].open}am until ${valueDay[index].close}pm`,
      exhibition: getAnimalDay(dia),
    };
    if (dia === 'Monday') {
      objeto[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    return objeto;
  });
  return objeto;
};

const getDay = (parametro) => {
  const objeto = {};
  keyDay.map((dia, index) => {
    if (parametro === dia) {
      objeto[dia] = {
        officeHour: `Open from ${valueDay[index].open}am until ${valueDay[index].close}pm`,
        exhibition: getAnimalDay(dia),
      };
      if (dia === 'Monday' && parametro === 'Monday') {
        objeto[dia] = {
          officeHour: 'CLOSED',
          exhibition: 'The zoo will be closed!',
        };
      }
    }
    return objeto;
  });
  return objeto;
};

function getSchedule(scheduleTarget) {
  if (getAnimal(scheduleTarget) !== undefined) return getAnimal(scheduleTarget)[scheduleTarget];
  if (Object.entries(getDay(scheduleTarget)).length !== 0) return getDay(scheduleTarget);
  return semParametro();
}

module.exports = getSchedule;
