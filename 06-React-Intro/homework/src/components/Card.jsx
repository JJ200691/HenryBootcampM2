import React from 'react';


export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h1>{name}</h1>
      <h3>Min</h3>
      <h3>{min}</h3>
      <h3>Max</h3>
      <h3>{max}</h3>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Logo" />
    </div>
  )
};