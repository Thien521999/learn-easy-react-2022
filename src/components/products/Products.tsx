import React from 'react';
import { product } from '../../models';
import { ProductCard } from '../product-card/ProductCard';
import './Products.css';

export interface ProductsProps {
  products: product[];
}

export const Products = React.memo(({ products }: ProductsProps) => {
  return (
    <div className="products">
      {products?.length > 0 ? (
        products?.map((product) => <ProductCard product={product} key={product._id} />)
      ) : (
        <h2>No Product</h2>
      )}
      {}
    </div>
  );
});
