import React from 'react';
import { usePagination } from '../../hooks/usePagination';
import './Pagination.css';

export interface Props {
  totalPages: number;
}

export const Pagination = React.memo(({ totalPages}: Props) => {
  const { firstArr, lastArr, isActive, prev, next, jump } = usePagination(totalPages);

  return (
    <div className="pagination">
      <button onClick={prev}>&laquo;</button>
      {firstArr.map((num) => (
        <button key={num} className={`${isActive(num)}`} onClick={() => jump(num)}>
          {num}
        </button>
      ))}

      {lastArr.length > 0 && <button>...</button>}

      {lastArr.map((num) => (
        <button key={num} className={`${isActive(num)}`} onClick={() => jump(num)}>
          {num}
        </button>
      ))}
      <button onClick={next}>&raquo;</button>
    </div>
  );
});
