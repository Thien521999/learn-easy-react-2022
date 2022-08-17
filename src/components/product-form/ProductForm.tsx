import React, { useRef } from 'react';
import productApi from '../../api/product-api';
import { product } from '../../models';
import './ProductForm.css';

export interface Props {
  btnTxt: String;
  data: product;
}

export const ProductForm = ({ btnTxt, data }: Props) => {
  const multiRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const children = multiRef.current.children;
    const newData = [...children].reduce((obj, child) => {
      if (!child.name) return obj;
      return { ...obj, [child.name]: child.value };
    }, {});

    if (data) {
      const result = shallowEqual(newData, data);
      if(result) return;

      productApi.update(newData, data?._id);
    } else {
      productApi.create(newData);
    }
  };

  const shallowEqual = (obj1, obj2) => {
    const keys = Object.keys(obj1);

    for (let key of keys) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
      return true;
    }
  };

  return (
    <div className="product_form">
      <form ref={multiRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Product title"
          required
          defaultValue={data?.title}
        />

        <input
          type="text"
          name="description"
          placeholder="Product description"
          required
          defaultValue={data?.description}
        />

        <input
          type="text"
          name="price"
          placeholder="Product price"
          required
          defaultValue={data?.price}
        />

        <input
          type="text"
          name="category"
          placeholder="Product category"
          required
          defaultValue={data?.category}
        />

        <input
          type="text"
          name="image"
          placeholder="Product image"
          required
          defaultValue={data?.image}
        />

        <button
        // disabled={loading}
        >
          {btnTxt}
          {/* { loading ? 'Loading..' : btnTxt } */}
        </button>
      </form>
    </div>
  );
};
