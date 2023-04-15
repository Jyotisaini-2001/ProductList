
import React, { useState, useEffect } from 'react';
// import './Card.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
  };

  const increasePrice = (id) => {
    const updatedProducts = [...products];
    const index = updatedProducts.findIndex((product) => product.id === id);
   
    updatedProducts[index].price += 1;
    
    setProducts(updatedProducts);

  };

  const decreasePrice = (id) => {
    const updatedProducts = [...products];
    const index = updatedProducts.findIndex((product) => product.id === id);
    if (updatedProducts[index].price > 0) {
      updatedProducts[index].price -= 1;
    }
    setProducts(updatedProducts);
  };

  return (
    <div className='container'>
      <h1 className='text-center mb-4'>Product List</h1>
      <div className='row'>
        {products.map((product) => (
 
        <div className='col-md-4' key={product.id}>
            <div className='card mb-4 shadow p-3 mb-5 bg-white rounded'>
                  <div className='card-body'>
                  <h5 className='card-title'>{product.title}</h5>
                    <p className='card-text'>{product.description}</p>
                    <p className='card-text'>Price: ${product.price}</p>
                    <div className='btn-group'>
                      <button
                        type='button'
                        className='btn btn-primary'
                        onClick={() => increasePrice(product.id)}
                      >
                        Increase
                      </button>
                      <button
                        type='button'
                        className='btn btn-danger'
                        onClick={() => decreasePrice(product.id)}
                      >
                        Decrease
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          
        ))}
      </div>
    </div>
  );
}

export default ProductList;
