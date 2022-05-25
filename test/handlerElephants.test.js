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
});
