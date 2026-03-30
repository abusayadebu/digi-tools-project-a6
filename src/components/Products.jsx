import React, { use } from 'react';
import Product from './Product';


const Products = ({productPromise}) => {
  const productData = use(productPromise)
  console.log(productData);
    return (
        <div className='container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {
            productData.map(product =>(<Product key={product.id} product={product}></Product>))
          }
        </div>
    );
};

export default Products;