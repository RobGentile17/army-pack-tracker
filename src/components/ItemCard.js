import React, { useState } from "react";

function ItemCard({ item, allItems, setItems }) {
  const { id, name, image, packed } = item;
  const [isPacked, setIsPacked] = useState(item.packed);
  

  function handleToggleItem() {
    fetch(`http://localhost:4000/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({packed: !packed}),
    })
      .then((r) => r.json())
      .then((updatedItem) => {
        const updatedItems = allItems.map((item) => {
          if (item.id === updatedItem.id) return updatedItem;
          return item;
        });
        setItems(updatedItems);
        setIsPacked(!isPacked)
      });
  }


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      {isPacked ? (
        <button className="primary" onClick={handleToggleItem}>
          Gear Is Packed!
        </button>
      ) : (
        <button onClick={handleToggleItem}>Go Pack Now!</button>
      )}
    </li>
  )
}

export default ItemCard;