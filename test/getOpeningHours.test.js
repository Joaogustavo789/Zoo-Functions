const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função quando não recebe parâmetros retorna todos os horários.', () => {
    const zooHours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(getOpeningHours()).toEqual(zooHours);
  });

  it('Testa se a função retorna mensagem de erro, caso passe um dia errado.', () => {
    expect(() => getOpeningHours('Segunda', '08:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Testa se a função retorna mensagem de erro, caso passe uma abreviação de hora errado.', () => {
    expect(() => getOpeningHours('Tuesday', '08:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Testa se a função retorna mensagem de erro, caso passe um formato de hora e minuto errado.', () => {
    expect(() => getOpeningHours('Wednesday', '1E:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Wednesday', '10:0E-AM')).toThrow('The minutes should represent a number');
  });

  it('Testa se a função retorna mensagem de erro, caso passe um valor de hora e minutos diferente.', () => {
    expect(() => getOpeningHours('Wednesday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Wednesday', '11:60-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Testa se a função retorna a devida mensagem de aberto ou fechado.', () => {
    expect(getOpeningHours('Monday', '10:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '08:00-PM')).toBe('The zoo is closed');
    expect(getOpeningHours('Thursday', '11:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Friday', '04:00-PM')).toBe('The zoo is open');
  });
});
