import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/productService';
import { useNavigate } from 'react-router-dom';
import ProductTable from '../components/ProductTable';

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
      <ProductTable
        products={products}
        removeProduct={removeProduct}
        navigateToDetailsPage={navigateToDetailsPage}
      />
    </div>
  );
};

export default Example6;
