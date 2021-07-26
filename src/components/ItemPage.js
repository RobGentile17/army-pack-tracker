import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Search from "./Search";

function ItemPage() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((r) => r.json())
      .then((itemsArray) => {
        setItems(itemsArray);
      });
  }, []);

  const displayedItems = items.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ItemList
        items={displayedItems}
      />
    </main>
  );
}

export default ItemPage;