import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterForm } from '../filter-form/FilterForm';
import { Modal } from '../modal/Modal';
import { ProductForm } from '../product-form/ProductForm';
import { SearchForm } from '../search-form/SearchForm';
import './Header.css';

export const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);

  return (
    <header>
      <nav>
        <p><Link to="/">Home</Link></p>
        <p onClick={() => setOpenProduct(true)}>Create Product</p>
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

      {/* Modal Product */}
      {openProduct && (
        <Modal titleTxt="Create Product" setOpen={setOpenProduct}>
          <ProductForm btnTxt="Add" />
        </Modal>
      )}
    </header>
  );
};
