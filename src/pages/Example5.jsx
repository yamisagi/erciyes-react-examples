import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/productService';
import ProductTable from '../components/ProductTable';
import Loading from '../components/Loading';

const Example5 = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');

  const fetchProducts = async () => {
    const products = await getProducts();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    console.log('useEffect');
    setLoading(true);
    fetchProducts();
  }, []);

  const showAll = () => {
    setFilter('all');
  };

  const removeProduct = (id) => {
    setFilteredProducts(products.filter((product) => product.id !== id));
  };

  const showCritical = () => {
    setFilter('critical');
    setFilteredProducts(
      products.filter((product) => product.unitsInStock < 10)
    );
  };

  const showCheap = () => {
    setFilter('cheap');
    setFilteredProducts(products.filter((product) => product.unitPrice < 10));
  };

  const showExpensive = () => {
    setFilter('expensive');
    setFilteredProducts(products.filter((product) => product.unitPrice > 100));
  };

  if (loading) {
    return <Loading />;
  }

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
      <ProductTable
        products={filter === 'all' ? products : filteredProducts}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default Example5;
