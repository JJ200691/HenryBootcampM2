import React from 'react';
import style from "./Card.module.css"

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className={style.card}>
      <button onClick={onClose}>X</button>
      <h2>{name}</h2>
      <div>
        <h3>Min {min}</h3>
        <h3>Max {max}</h3>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={"icon"} />
    </div>
  );
};