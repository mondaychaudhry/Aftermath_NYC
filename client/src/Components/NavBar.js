import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav className="navBar">
            <NavLink exact to="/" className='navLink'> Home </NavLink>
            <NavLink to="/legal" className='navLink'> NYC Legal Information </NavLink>
            <NavLink to="/medical" className='navLink'> Medical Information </NavLink>
            <NavLink to="/community_resources" className='navLink'> NYC Community Resources </NavLink>
            <NavLink exact to="/home" className='navLink'> My Home </NavLink>         
        </nav>
    );}

export default NavBar;