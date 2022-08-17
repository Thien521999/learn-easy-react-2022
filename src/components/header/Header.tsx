import React, { useState } from 'react';
import { FilterForm } from '../filter-form/FilterForm';
import { Modal } from '../modal/Modal';
import { SearchForm } from '../search-form/SearchForm';
import './Header.css';

export const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <header>
      <nav>
        <p>Home</p>
        <p>Create Product</p>
        <p onClick={() => setOpenSearch(true)}>Search</p>
        <p onClick={() => setOpenFilter(true)}>Filter</p>
      </nav>

      {/* Modal Search */}
      {openSearch && (
        <Modal titleTxt="Search" setOpen={setOpenSearch}>
          <SearchForm />
        </Modal>
      )}

      {/* Modal Filter */}
      {openFilter && (
        <Modal titleTxt="Filter" setOpen={setOpenFilter}>
          <FilterForm />
        </Modal>
      )}
    </header>
  );
};
