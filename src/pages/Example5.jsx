import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/productService';
const Example5 = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const products = await getProducts();
    console.log(products);
    setProducts(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const showAll = () => {
    fetchProducts();
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const showCritical = () => {
    setProducts(products.filter((product) => product.unitsInStock < 10));
  };

  const showCheap = () => {
    setProducts(products.filter((product) => product.unitPrice < 10));
  };

  const showExpensive = () => {
    setProducts(products.filter((product) => product.unitPrice > 100));
  };

  return (
    <div className='flex-container'>
      <div className='actions'>
        <button className='btn' onClick={showCritical}>
          Show Critical
        </button>
        <button className='btn' onClick={showAll}>
          Show All
        </button>
        <button className='btn' onClick={showCheap}>
          Show Cheap
        </button>
        <button className='btn' onClick={showExpensive}>
          Show Expensive
        </button>
      </div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Stock</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <button
                    className='btn btn-remove'
                    onClick={() => removeProduct(product.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Example5;
