import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/productService';
import { useNavigate, useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    const products = await getProducts();
    console.log(products);
    setProducts(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className='flex-container'>
      <h1>Details Page</h1>
      <h2>Product ID: {id}</h2>
      <button
        className='btn'
        onClick={() => {
          navigate(-1);
        }}
      >
        GO BACK
      </button>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>
            {products
              .filter((product) => product.id == id)
              .map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsPage;
