import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Pagination, Products, Sorting } from '../components';
import { useQuery } from '../hooks/useQuery';

export const Home = () => {
  const [limit, setLimit] = useState(2);
  const [products, setProducts] = useState([]);

  const { search } = useLocation();

  const { page, sort } = useMemo(() => {
    const page = new URLSearchParams(search).get('page') || 1;
    const sort = new URLSearchParams(search).get('sort') || '-createdAt';
    return { page: Number(page), sort: sort };
  }, [search]);

  const url = `/products?limit=${limit}&page=${page}&sort=${sort}`;
  const { data, loading, error } = useQuery(url);

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
        <Sorting page={page} sort={sort} />
        {loading ? '...loding' : <Products products={products} />}
        {error && <h2>{error}</h2>}
        <Pagination totalPages={totalPages} page={page} sort={sort} />
      </div>
    </main>
  );
};
