import React from "react"
import RuckSackCard from "./RuckSackCard"

const RuckSackItems = ({ items }) => {
  return (  
    <ul className="rucksack cards">
      {items.map((item) => {
        return (
          <RuckSackCard
            key={items.id}
            item={item}
          />
        )
      })}
    </ul>
  );
}
 
export default RuckSackItems;