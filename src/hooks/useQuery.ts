import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { axiosClient } from '../api/axios-client';

export const useQuery = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res: any = await axiosClient.get(url);
        setData(res);
      } catch (error) {
        setError(error.response.data.msg);
        toast.error(error.response.data.msg);
      }
      setLoading(false);
    })();
  }, [url]);

  return {
    loading,
    data,
    error,
  };
};
