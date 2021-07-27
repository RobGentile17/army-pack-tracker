import React, { useState } from "react";

function ItemCard({ item }) {
  const { name, img_url, packed } = item;

  const [isPacked, setIsPacked] = useState(true);

  function handleToggleStock() {
    setIsPacked((isPacked) => !isPacked);
  }

  return (
    <li className="card">
      <img src={img_url} alt={name} />
      <h4>{name}</h4>
      {isPacked ? (
        <button className="primary" onClick={handleToggleStock}>
          Packed
        </button>
      ) : (
        <button onClick={handleToggleStock}>Gear has been packed</button>
      )}
    </li>
  )
}

export default ItemCard;