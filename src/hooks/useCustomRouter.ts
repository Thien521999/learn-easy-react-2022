import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const useCustomRouter = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const pushQuery = (query) => {
        const newQuery = new URLSearchParams(query).toString();
        navigate(`${pathname}?${newQuery}`);
    }

  return {
      pushQuery
  }
}