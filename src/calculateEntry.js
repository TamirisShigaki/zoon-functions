const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) result.child += 1;
    else if (person.age < 50) result.adult += 1;
    else result.senior += 1;
  });
  return result;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const entry = countEntrants(entrants);
  let valueEntry = 0;
  valueEntry += entry.child * prices.child;
  valueEntry += entry.adult * prices.adult;
  valueEntry += entry.senior * prices.senior;
  return valueEntry;
}

module.exports = { calculateEntry, countEntrants };
