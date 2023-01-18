import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it("fetchProduct é uma função", () => {
    expect(typeof fetchProduct).toBe("function");
  });
  it("fetch é chamada quando fetchProduct é executada", async () => {
    await fetchProduct("MLB1405519561");
    expect(fetch).toHaveBeenCalled();
  });
  it("fetch é chamada com o endpoint correto", async () => {
    await fetchProduct("MLB1405519561");
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1405519561");
  });
  it("retorno correto quando produto é encontrado", async () => {
    const result = await fetchProduct("MLB1405519561");
    expect(result).toEqual(product);
  });
  it("retorno erro quando ID não é informado", async () => {
    try {
      await fetchProduct();
    }
    catch (error) {
      expect(error).toEqual(new Error('ID não informado'));
    }
  });
});
