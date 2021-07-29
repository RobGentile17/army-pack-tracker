import React from "react"
import ItemCard from "./ItemCard"

function ItemList ({ items, allItems, setItems, onDeleteItem }) {
  return (
    <main>
      <ul className="cards">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            allItems={allItems}
            setItems={setItems}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </main>
  )
}

export default ItemList
