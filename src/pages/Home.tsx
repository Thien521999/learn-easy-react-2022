import React, { useEffect, useMemo, useState } from 'react';
import { Pagination, Products, Sorting } from '../components';
import { useMyContext } from '../context/store';
import { useQuery } from '../hooks/useQuery';

export const Home = () => {
  const [limit, setLimit] = useState(2);
  const [products, setProducts] = useState([]);

  const { page, sort } = useMyContext();

  const url = `/products?limit=${limit}&page=${page}&sort=${sort}`;
  const { data, loading, error } = useQuery(url, { saveCache: true });

  // useEffect chay sau khi render
  useEffect(() => {
    if (data?.products) setProducts(data?.products);
  }, [data?.products]);

  // useMemo se chay cung luc vs mount(luc khoi tao)
  const totalPages = useMemo(() => {
    if (!data.count) return 0;

    return Math.ceil(data.count / limit);
  }, [data.count]);

  return (
    <main>
      <div>
        <Sorting />
        {loading ? '...loding' : <Products products={products} />}
        {error && <h2>{error}</h2>}
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
};
