const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se o argumento count retorna um número', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Verifica se o argumento names retorna um array de nomes que possui o nome Jeferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verifica se o argumento averageAge retornar um número aproximado', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Verifica se o argumento location retorna uma string', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se o argumento popularity retorna um número igual ou maior', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Verifica se o argumento availability retorna um array de dias quando não tem Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Verifica se quando não recebe argumentos retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
});
