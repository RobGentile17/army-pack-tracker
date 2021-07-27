import React from "react"

const Filter = ({ showPacked, onChangeShowPacked }) => {

  function handleTogglePacked(event) {
    onChangeShowPacked(event.target.checked)
  }

  return (
		<div className="filterWrapper">
			<div className="ui menu">
				<div className="ui item">
					<label>Sort By Packed Gear </label>
				</div>
				<div className="ui item">
          </div>
				<div className="ui item">
					<input
						className="ui toggle checkbox"
						checked={showPacked}
						onChange={handleTogglePacked}
						type="checkbox"
					/>
				</div>
			</div>
		</div>
	)
}
export default Filter;