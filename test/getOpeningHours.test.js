const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se para os argumentos Monday e 09:00-AM retorna a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('verifica se para os argumentos Tuesday e 09:00-AM retorna a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se para os argumentos Wednesday e 09:00-PM retorna a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Verifica se para os argumentos Thu e 09:00-AM lança uma exceção com a mensagem: The day must be valid', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid');
  });
  it('Verifica se para os argumentos Friday e 09:00-ZM lança uma exceção com a mensagem: The abbreviation must be AM or PM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se para os argumentos Saturday e C9:00-AM lança uma exceção com a mensagem: The hour should represent a number', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Verifica se para os argumentos Sunday e 09:c0-AM lança uma exceção com a mensagem: The minutes should represent a number', () => {
    expect(() => getOpeningHours('Sunday', '09:c-0-AM')).toThrow('The minutes should represent a number');
  });
  it('Verifica se para os argumentos Monday e 13:00-AM lança uma exceção com a mensagem: The hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
});
