export const fetchProduct = async (productID) => {
  if (!productID) throw new Error('ID não informado');
  const response = await fetch(`https://api.mercadolibre.com/items/${productID}`);
  const product = await response.json();
  return product;
};

export const fetchProductsList = async (QUERY) => {
  if (!QUERY) throw new Error('Termo de busca não informado');
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const dados = await response.json();
  return dados.results;
};
