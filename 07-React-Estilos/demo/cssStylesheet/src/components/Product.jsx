import React from 'react';
import './Product.css'; // global para todo

function Producto(props) {
  return (
    <div className="product">
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default Producto;
