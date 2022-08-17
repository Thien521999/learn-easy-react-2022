import React, { useState } from 'react';
import './SearchForm.css';

type Props = {};

export const SearchForm = (props: Props) => {
  const [search, setSearch] = useState('');
  const handleSearch = () => {};
  return (
    <div className="search_form">
      <form
      // onSubmit={handleSearch}
      >
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};