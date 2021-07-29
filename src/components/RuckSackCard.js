import React from "react"

const RuckSackCard = ({ name, image }) => {
  return (
    <div>
        <div className="rucksack-card">
          <img src={image} alt={name} width="100" height="100" />
        </div>
        <div className="content">
          <h1 className="header">{name}</h1>
        </div>
    </div>
  )
}

export default RuckSackCard
