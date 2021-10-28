import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav className='navbar'>
            <NavLink exact to="/" className='navLink'> home </NavLink>
            <NavLink to="/legal" className='navLink'> legal </NavLink>
            <NavLink to="/medical" className='navLink'> medical</NavLink>
            <NavLink to="/community_resources" className='navLink'> community resources </NavLink>
            <NavLink exact to="/home" className='navLink'> mine </NavLink>         
        </nav>
    );}

export default NavBar;