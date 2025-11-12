async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data);
    return data.products; // tableau de produits    
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
  }
}


async function displayProducts() {
  const products = await fetchProducts();
  const container = document.getElementById('product-list');

  products.forEach(product => {
    const card = document.createElement('div');
    card.innerHTML = `
      <h3>${product.title}</h3>
      <img src="${product.thumbnail}" alt="${product.title}" width="150">
      <p>${product.description}</p>
      <strong>${product.price} €</strong>
    `;
    container.appendChild(card);
  });
}

displayProducts();