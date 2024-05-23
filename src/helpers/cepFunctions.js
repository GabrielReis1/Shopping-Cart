export const getAddress = async () => {
  const inputCep = document.querySelector('.cep-input');
  const cepValue = inputCep.value;

  if (!cepValue) {
    throw new Error('Por favor, insira um CEP válido');
  }

  const urls = [
    `https://cep.awesomeapi.com.br/json/${cepValue}`,
    `https://brasilapi.com.br/api/cep/v2/${cepValue}`,
  ];

  const fetchAddress = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(erro);
    }
    return response.json();
  };

  return Promise.any(urls.map(fetchAddress)).catch(() => {
    throw new Error(erro);
  });
};

export const searchCep = async () => {
  const endereco = document.querySelector('.cart__address');
  try {
    const produto = await getAddress();
    const { address, district, city, state } = produto;

    const parts = [];
    if (address) parts.push(address);
    if (district) parts.push(district);
    if (city) parts.push(city);
    if (state) parts.push(state);

    endereco.innerHTML = parts.length ? parts.join(' - ') : 'CEP não encontrado';
  } catch (error) {
    endereco.innerHTML = 'CEP não encontrado';
  }
};
