import React from "react"

const RuckSackCard = ({ name, image}) => {

  return (
    <div>
        <div className="rucksack card">
          <img src={image} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
    </div>
  );
}
 
export default RuckSackCard;