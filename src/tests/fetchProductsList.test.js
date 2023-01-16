import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';
import { it } from 'mocha';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList()).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    expect(fetchProductsList).toBeCalled('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {
    expect(fetchProductsList).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=$QUERY')
  });

  it('Testa se o retorno da função fetchProductsList com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', () => {
    expect(fetchProductsList('computador')).toEqual(computadorSearch);
  });

  it('Testa se, ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: "Termo de busca não informado".', () => {
    expect(fetchProductsList('')).toThrow('Termo de busca não informado')
  });
});
