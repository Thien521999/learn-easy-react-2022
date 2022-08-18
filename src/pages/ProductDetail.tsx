import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductInfo } from '../components';
import { useQuery } from '../hooks/useQuery';

export const ProductDetail = () => {
  const { id } = useParams();

  const url = `products/${id}`;
  const { loading, data: product, error } = useQuery(url, { saveCache: true });

  return (
    <div>
      {loading ? '...Loading' : <ProductInfo product={product} />}
      {error && <h2>{error}</h2>}
    </div>
  );
};
