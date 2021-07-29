import React from "react"
import NewItemForm from "./NewItemForm"
import Filter from "./Filter"

function Header ({ onAddItem, showPacked, onChangeShowPacked }) {
  return (
    <header className="header">
      <h1>
        <span className="logo" role="img">
        🇺🇸
        </span>
        The Pack Tracker
      </h1>
      <h2>
        <Filter
          showPacked={showPacked}
          onChangeShowPacked={onChangeShowPacked}
        />
      </h2>
      <NewItemForm onAddItem={onAddItem}/>
    </header>
  )
}

export default Header
