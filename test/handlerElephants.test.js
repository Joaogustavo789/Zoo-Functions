const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função retorna undefined caso não passe nenhum parâmetro.', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Testa se a função retorna um parâmetro diferente de string.', () => {
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Testa se passando na função uma chave do objeto de elefantes como parâmetro, retorna o valor especifico daquela chave.', () => {
    const elephant = [
      {
        name: 'Ilana',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4,
      },
    ];

    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('name')).toEqual('elephants');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual(elephant);
  });

  it('Testa se a função retorna a quantidade de elefantes.', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Testa se retorna todos os nomes dos elefantes.', () => {
    const nameElephant = ['Ilana', 'Orval', 'Bea', 'Jefferson'];

    expect(handlerElephants('names')).toEqual(nameElephant);
  });

  it('Testa se retorna a média de idades.', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('Testa se passar um parâmetro diferente da função retorna null.', () => {
    expect(handlerElephants('weight')).toBeNull();
  });
});
