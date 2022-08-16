import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomRouter } from '../../hooks/useCustomRouter';
import './Sorting.css';

export interface Props {
    sort: String;
    page: number;
}

export const Sorting = ({sort, page}: Props) => {
    const {pushQuery} = useCustomRouter();
    
    const handleSort = (e) => {
        const {value} = e.target;
        pushQuery({page, sort: value});
    }

  return (
    <div className='sorting'>
      <select onChange={handleSort} value={sort}>
        <option value="-createdAt">Newest</option>
        <option value="createdAt">Oldest</option>
        <option value="-price">Price: Hight-Low</option>
        <option value="price">Price: Low-Hight</option>
      </select>
      <h2>&#8678;Sort</h2>
    </div>
  )
}