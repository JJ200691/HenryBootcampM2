import React from 'react';
import styles from "../styles/Card.modules.css"

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div>
      <button className={`${styles.button}`} onClick={onClose}>X</button>
      <h2 className={styles.name}>{name}</h2>
      <div>
        <h3>Min</h3>
        <h3>{min}</h3>
        <h3>Max</h3>
        <h3>{max}</h3>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={"icon"} />
    </div>
  );
};