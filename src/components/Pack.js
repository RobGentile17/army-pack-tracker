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

    const itemsToDisplay = items.filter((item) => (showPacked ? item.packed:true))

  return (
      <div>
    <div className="app">
        
      <Header />
      </div>
      <Filter 
        showPacked={showPacked}
        onChangeShowPacked={setShowPacked}    
    />
      <div>
      <ItemPage 
        items={itemsToDisplay}
        allItems={items}
        setItems={setItems}
      />
      </div>
      </div>
    
  )
}

export default Pack;