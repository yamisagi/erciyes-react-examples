import React from 'react';

const ProductTable = ({ products, removeProduct, navigateToDetailsPage }) => {
  return (
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
  );
};

export default ProductTable;
