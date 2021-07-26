import React from "react"
import Item from "./ItemCard"

function ItemList({ items }) {
  return (
    <main>
      <ul className="cards">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </main>
  );
}

export default ItemList