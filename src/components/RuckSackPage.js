import React, { useEffect, useState } from "react";
import RuckSackCollection from "./RuckSackCollection";
import RuckSackHeader from "./RuckSackHeader"

function RuckSackPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((r) => r.json())
      .then(setItems);
  }, []);

 const itemsToDisplay = items.filter((item) => (item.packed === true))

 
  return (
    <div>
      <RuckSackHeader />
      <br />
      <br />
      <RuckSackCollection  
        items={itemsToDisplay}
      />
      <br />
    </div>
  );
}

export default RuckSackPage;