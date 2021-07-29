import React, { useEffect, useState } from "react"
import Header from "./Header"
import ItemPage from "./ItemPage"
import Filter from "./Filter"


function Pack() {
    const [showPacked, setShowPacked] = useState(false)
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/items")
          .then((r) => r.json())
          .then((itemsArray) => {
            setItems(itemsArray);
          });
      }, []);


   const itemsToDisplay = () => {
       if(showPacked) {
           return [...items].sort((a, b) => a.name.localeCompare(b.name))
       } else {
           return items
       }
   }
    
    function handleAddItem(newItem) {
        setItems([...items, newItem]);
      }

      function handleDeleteItem(id) {
        const updatedItemArray = items.filter(
          (item) => item.id !== id
        );
        setItems(updatedItemArray);
      }
    
  return (
      <div className="app">
    <div>
      <Header 
        onAddItem={handleAddItem}
        showPacked={showPacked}
        onChangeShowPacked={setShowPacked} 
      />
      <ItemPage 
        items={itemsToDisplay()}
        allItems={items}
        setItems={setItems}
        onDeleteItem={handleDeleteItem}
      />
      </div>
      </div>
    
  )
}

export default Pack;