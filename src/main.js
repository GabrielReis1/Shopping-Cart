import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { searchCep } from './helpers/cepFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const products = document.querySelector('.products');

const createProducts = async () => {
  const data = await fetchProductsList('computador');
  products.innerHTML = '';
  data.forEach((id) => products.appendChild(createProductElement(id)));
};
createProducts();
