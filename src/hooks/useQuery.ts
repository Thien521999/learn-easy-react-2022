import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { axiosClient } from '../api/axios-client';
import { useMyContext } from '../context/store';

const DEFAULT_OPTION = {
  sizeCache: 100,
  saveCache: false,
  refetchInterval: 1000
}

export const useQuery = (url, opt) => {
  const option = {...DEFAULT_OPTION, ...opt};

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState('');

  const { cache } = useMyContext();
  
  const clearCache = useCallback(() => {
    console.log('render');
    if (Object.keys(cache.current).length >= option.sizeCache) return cache.current = {};
  }, [cache, option.sizeCache])

  useEffect(() => {
    (async () => {
      if (cache.current[url]) {
        setData(cache.current[url]);
      }

      try {
        if (!cache.current[url]) setLoading(true);

        const res: any = await axiosClient.get(url);
        setData(res);
        if(option.saveCache) {
          cache.current[url] = res;
        }
      } catch (error) {
        setError(error.response.data.msg);
        toast.error(error.response.data.msg);
      }
      setLoading(false);
      clearCache();
    })();
  }, [url, cache, clearCache, option.saveCache]);

  return {
    loading,
    data,
    error,
  };
};
