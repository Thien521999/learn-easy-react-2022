import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Pagination, Products } from '../components';
import { useQuery } from '../hooks/useQuery';

export const Home = () => {
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const {search} = useLocation();
  console.log(search);

  const url = `/products?limit=${limit}&page=${page}`;
  const { data, loading, error } = useQuery(url);

  // useeffect chay sau khi render
  useEffect(() => {
    if (data?.products) setProducts(data?.products);
  }, [data?.products]);

  // useMemo se chay cung luc vs mount(luc khoi tao)
  const totalPages = useMemo(()=>{
    if(!data.count) return 0;
    
    return Math.ceil(data.count / limit)
  }, [data.count])

  useEffect(()=>{
    const page = new URLSearchParams(search).get('page') || 1;
    setPage(Number(page));
  }, [search])

  return (
    <main>
      <div>
        {loading ? '...loding' : <Products products={products} />}
        {error && <h2>{error}</h2>}
        <Pagination totalPages={totalPages} page={page} />
      </div>
    </main>
  );
};
