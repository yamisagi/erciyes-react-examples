import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/productService';
import { useNavigate } from 'react-router-dom';

const Example6 = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const navigateToDetailsPage = (id) => {
    navigate(`${id}`);
  };
  const fetchProducts = async () => {
    const products = await getProducts();
    console.log(products);
    setProducts(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className='flex-container'>
      <h1>
        Total Products:
        {products.length}
      </h1>
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
                <td onClick={() => navigateToDetailsPage(product.id)}>
                  {product.id}
                </td>
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

export default Example6;
