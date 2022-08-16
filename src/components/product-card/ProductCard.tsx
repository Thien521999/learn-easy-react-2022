import React from 'react';
import { Link } from 'react-router-dom';
import { product } from '../../models';
import './ProductCard.css';

export interface ProductCardProps {
  product: product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.image} />

      <div className="box">
        <h3>
          <Link to={`/products/${product._id}`}>
            <span />
            {product.title}
          </Link>
        </h3>
        <h4>${product.price}</h4>

        <div className="btn_div">
          <button
            className="btn_edit"
            // onClick={() => setOpenProduct(true)}
          >
            Edit
          </button>

          <button
            className="btn_delete"
            // disabled={loading}
            // onClick={() => handleDelete(product._id)}
          >
            {/* { loading ? 'Loading...' : 'Delete' } */}
            Delete
          </button>
        </div>
      </div>

      {/*--------------- Product Form--------- */}
      {/* {openProduct && (
        <Modal titleTxt="Update Product" setOpssen={setOpenProduct}>
          <ProductForm btnTxt="Update" data={product} />
        </Modal>
      )} */}
    </div>
  );
};
