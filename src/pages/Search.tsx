import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../components';
import { useQuery } from '../hooks/useQuery';

export const Search = () => {
  const { value } = useParams();
  const [products, setProducts] = useState();

  const url = `/products?search=${value}`;
  const { data, loading, error } = useQuery(url);

  useEffect(() => {
    if (data?.products) setProducts(data?.products);
  }, [data?.products]); 

  return (
    <div>
      {loading ? '...loding' : <Products products={products} />}
      {error && <h2>{error}</h2>}
    </div>
  );
};
