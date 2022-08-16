import React from 'react';
import { product } from '../../models';
import { ProductCard } from '../product-card/ProductCard';
import './Products.css';

export interface ProductsProps {
  products: product[];
}

export const Products = ({ products }: ProductsProps) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};
