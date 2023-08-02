const data = require('../data/zoo_data');

const { species, hours } = data;

// Função auxiliar para a função visitationZoo
const openClose = (day) => {
  if (day[0] === 'Monday') {
    return 'CLOSED';
  }

  if (day[0] !== 'Monday') {
    return `Open from ${day[1].open}am until ${day[1].close}pm`;
  }
};

// Função auxiliar para a função visitationZoo
const dayExhibition = (day) => {
  if (day[0] === 'Monday') {
    return 'The zoo will be closed!';
  }

  const animalDay = species.filter((animal) => animal.availability.includes(day[0]));

  const animalExibition = animalDay.map((animal) => animal.name);

  return animalExibition;
};

function visitationZoo() {
  const zooSchedule = {};

  const daysVisit = Object.entries(hours);

  daysVisit.forEach((day) => {
    zooSchedule[day[0]] = {
      officeHour: openClose(day),
      exhibition: dayExhibition(day),
    };
  });

  return zooSchedule;
}

function visitationZooByAnimal(specie) {
  const animalZoo = species.find((animal) => animal.name === specie);

  const specieVisit = animalZoo.availability;

  return specieVisit;
}

function visitationZooByDay(dayParam) {
  const getHours = Object.entries(hours);

  const findDay = getHours.find((day) => day[0] === dayParam);

  const zooScheduleByDay = {
    [dayParam]: {
      officeHour: openClose(findDay),
      exhibition: dayExhibition(findDay),
    },

    // [dayParam]: visitationZoo()[dayParam], -> Outra maneira de trazer o dia especifico.
  };

  return zooScheduleByDay;
}

function getSchedule(scheduleTarget) {
  const findAnimal = species.find((animal) => animal.name === scheduleTarget);

  const getHours2 = Object.keys(hours);

  if (findAnimal) {
    return visitationZooByAnimal(scheduleTarget);
  }

  if (getHours2.includes(scheduleTarget)) {
    return visitationZooByDay(scheduleTarget);
  }

  return visitationZoo();
}

module.exports = getSchedule;
