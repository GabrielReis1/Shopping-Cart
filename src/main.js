import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { searchCep } from './helpers/cepFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const products = document.querySelector('.products');

const createProducts = async () => {
  try {
    const data = await fetchProductsList('computador');
    products.innerHTML = '';
    data.forEach((id) => products.appendChild(createProductElement(id)));
  } catch (error) {
    const errorAPI = document.createElement('span');
    errorAPI.className = 'error';
    errorAPI.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente.';
    products.appendChild(errorAPI);
  }
};
createProducts();

const createLoading = () => {
  const loading = document.createElement('span');
  loading.className = 'loading';
  loading.innerText = 'carregando...';
  products.appendChild(loading);
};
createLoading();
