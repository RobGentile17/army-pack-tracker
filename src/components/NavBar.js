import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div className="content">
        <nav>
            <NavLink exact to="/home">Home</NavLink>
            <NavLink to="/pack">Pack</NavLink>
            <NavLink to="/myrucksack">My Rucksack</NavLink>
        </nav>
        </div>
    )
}

export default NavBar;