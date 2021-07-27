import React, { useEffect, useState } from "react";
import RuckSackCollection from "./RuckSackCollection";
import NewItemForm from "./NewItemForm";


function RuckSackPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((r) => r.json())
      .then(setItems);
  }, []);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }
 const itemsToDisplay = items.filter((item) => (item.packed === true))

  return (
    <div>
      <h1>This is your gear you packed!</h1>
      <br />
      <NewItemForm onAddItem={handleAddItem} />
      <br />
      <RuckSackCollection  
        items={itemsToDisplay}
      />
      <br />
    </div>
  );
}

export default RuckSackPage;