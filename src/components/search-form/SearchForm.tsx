import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchForm.css';

type Props = {};

export const SearchForm = (props: Props) => {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if(!value.trim()) return;
    return navigate(`/search/${value}`);

  };

  return (
    <div className="search_form">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Search</button>
      </form>
    </div>
  );
};
