import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/productService';
import ProductTable from '../components/ProductTable';
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
      <ProductTable products={products} removeProduct={removeProduct} />
    </div>
  );
};

export default Example5;
