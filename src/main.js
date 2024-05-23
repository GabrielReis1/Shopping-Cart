import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
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

async function loadCartItems() {
  // Recupera os ids dos produtos no carrinho do LocalStorage
  const cartIDs = getSavedCartIDs();

  // Cria um array de promises para buscar as informações de cada produto
  const cartPromises = cartIDs.map((id) => fetchProduct(id));

  try {
    // Aguarda todas as requisições e adiciona os produtos ao carrinho
    const productsCart = await Promise.all(cartPromises);
    productsCart.forEach((product) => {
      const productElement = createCartProductElement(product);
      // adicionar o elemento ao carrinho
      document.querySelector('.cart__products').appendChild(productElement);
    });
  } catch (error) {
    const cartContainer = document.querySelector('.cart__products');
    const errorAPI = document.createElement('span');
    errorAPI.className = 'error';
    errorAPI.innerText = 'Algum erro ocorreu ao carregar sua lista de compras.';
    cartContainer.appendChild(errorAPI);
  }
}
loadCartItems();
