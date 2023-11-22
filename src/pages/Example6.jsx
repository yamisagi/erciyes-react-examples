import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/productService';
import { useNavigate } from 'react-router-dom';
import ProductTable from '../components/ProductTable';
import Loading from '../components/Loading';

const Example6 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const navigateToDetailsPage = (id) => {
    navigate(`${id}`);
  };
  const fetchProducts = async () => {
    const products = await getProducts();
    console.log(products);
    setProducts(products);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  if (loading) {
    return <Loading />;
  }

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
