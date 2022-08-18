import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const useCustomRouter = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const pushQuery = ({page, sort}) => {
        const query = {};

        if(page) query.page = page;
        if(sort) query.sort = sort;

        const newQuery = new URLSearchParams(query).toString();
        navigate(`${pathname}?${newQuery}`);
    }

  return {
      pushQuery
  }
}