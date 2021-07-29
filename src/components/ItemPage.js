import React, { useState } from "react"
import ItemList from "./ItemList"
import Search from "./Search"

function ItemPage ({ items, allItems, setItems, onDeleteItem }) {
  const [searchTerm, setSearchTerm] = useState("")

  const displayedItems = items.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <main>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ItemList
        items={displayedItems}
        allItems={allItems}
        setItems={setItems}
        onDeleteItem={onDeleteItem}
      />
    </main>
  )
}

export default ItemPage
