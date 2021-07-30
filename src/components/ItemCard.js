import React, { useState } from "react"

function ItemCard ({ item, allItems, setItems, onDeleteItem }) {
  const { id, name, image, packed } = item
  const [isPacked, setIsPacked] = useState(item.packed)

  function handleDelete () {
    fetch(`${process.env.REACT_APP_API_URL}/items/${id}`, {
      method: "DELETE"
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteItem(id)
      })
  }

  function handleToggleItem () {
    fetch(`${process.env.REACT_APP_API_URL}/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ packed: !packed })
    })
      .then((r) => r.json())
      .then((updatedItem) => {
        const updatedItems = allItems.map((item) => {
          if (item.id === updatedItem.id) return updatedItem
          return item
        })
        setItems(updatedItems)
        setIsPacked(!isPacked)
      })
  }

  return (
    <li className="item-card">
      <img className="image" src={image} alt={name} width="100" height="100" />
      <h2>{name}</h2>
      {isPacked
        ? (
        <button className="primary" onClick={handleToggleItem}>
          Gear Has Been Added To Your Rucksack!
        </button>
          )
        : (
        <button className="primary" onClick={handleToggleItem}>Pack Your Gear!</button>
          )}
       <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
    </li>
  )
}

export default ItemCard
