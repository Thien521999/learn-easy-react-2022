import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Products, Sorting } from '../components';
import { useMyContext } from '../context/store';
import { useQuery } from '../hooks/useQuery';
// import "./index.css";

export const Search = () => {
  const { value } = useParams();
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [stop, setStop] = useState(false);

  const { sort } = useMyContext();

  const url = `/products?search=${value}&sort=${sort}&limit=${limit}&page=${page}`;
  const { data, loading, error } = useQuery(url, {saveCache: true});

  useEffect(() => {
    if (data?.products) setProducts(prev => [...prev, ...data?.products]);
    
    if(data?.products?.length < limit) setStop(true);
  }, [data?.products, limit]);

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setStop(false);
  }, [value, sort])

  console.log(products);

  return (
    <div>
      <Sorting />
      {loading ? '...loding' : <Products products={products} />}
      {error && <h2>{error}</h2>}
      <button className="btn-load_more" onClick={() => setPage(prev => prev + 1)} disabled={stop}>
        Load more
      </button>
    </div>
  );
};
