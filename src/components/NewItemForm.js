import React, { useState } from "react"

const NewItemForm = ({ onAddItem }) => {
  const[name, setName] = useState("")
  const [image, setImage] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image
      }),
    })
    .then((r) => r.json())
    .then((newItem) => {
      onAddItem(newItem)
  })
}
  return (
    <div className="new-item-form">
      <h1>Add More Gear</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Enter url..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add Gear</button>
      </form>
    </div>
  );
}
 
export default NewItemForm;