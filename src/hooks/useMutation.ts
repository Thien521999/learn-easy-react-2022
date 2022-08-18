import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const useMutation = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState('');

  const mutate = (callBack) => {
    setLoading(true);

    callBack()
      .then((res) => {
        setData(res.data);
        toast.success('Success');
      })
      .catch((err) => {
        setError(err.response.data.msg);
        toast.error(err.response.data.ms);
      })
      .finally(() => setLoading(false));
  };

  return {
    mutate,
    data,
    loading,
    error,
  };
};
