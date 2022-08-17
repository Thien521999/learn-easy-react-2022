import React from 'react';
import './Modal.css';

export interface Props {
  titleTxt: String;
}

export const Modal = ({ children, titleTxt, setOpen }: Props) => {
  return (
    <div className="modal">
      <div className="container">
        <h3>{titleTxt}</h3>
        {children}
        <span className="close" onClick={() => setOpen(false)}>&#10006;</span>
      </div>
    </div>
  );
};
