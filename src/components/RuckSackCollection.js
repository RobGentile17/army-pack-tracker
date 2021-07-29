import React from "react"
import RuckSackCard from "./RuckSackCard"

const RuckSackCollection = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
    <RuckSackCard
      key={item.id}
      name={item.name}
      image={item.image}
    />))}
    </ul>
  )
}

export default RuckSackCollection
