const data = require('../data/zoo_data');

const { species } = data;

const { hours } = data;

function dayParameter(scheduleTa) {
  if (scheduleTa === 'Monday') {
    return { [scheduleTa]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const { open, close } = hours[scheduleTa];
  return { [scheduleTa]: {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: species
      .filter((elemento) => elemento.availability.includes(scheduleTa))
      .map((element) => element.name),
  } };
}

function getSchedule(scheduleTarget) {
  const verificaSpecie = species.some((el) => el.name === scheduleTarget);
  if (verificaSpecie) {
    return species.find((elemento) => scheduleTarget === elemento.name).availability;
  }
  const dias = Object.keys(hours);
  if (!scheduleTarget || !dias.includes(scheduleTarget)) {
    return dias.reduce((acc, curr) => (
      { ...acc, [curr]: Object.values(dayParameter(curr))[0] }
    ), {});
  }
  return dayParameter(scheduleTarget);
}

module.exports = getSchedule;
