let products = [];

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    products = data;
  });
  const input = document.querySelector('#buscar');
  const listaProductos = document.querySelector('#lista-productos');
  
  input.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(producto =>
      producto.nombre.toLowerCase().includes(searchTerm)
    );
    
    listaProductos.innerHTML = '';
  
    filteredProducts.forEach(producto => {
      const li = document.createElement('li');
      li.textContent = producto.nombre;
      listaProductos.appendChild(li);
    });
  });
  