import React from "react"

const Filter = ({ showPacked, onChangeShowPacked }) => {
  function handleTogglePacked (event) {
    onChangeShowPacked(!showPacked)
  }

  return (
		<div className="filterWrapper">

					<label className="filter">Alphabetical Order</label>

					<input
						className="toggle"
						checked={showPacked}
						onChange={handleTogglePacked}
						type="checkbox"
					/>
				</div>

  )
}
export default Filter
