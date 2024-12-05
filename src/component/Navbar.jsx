import React from 'react'
// import './home.css'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <section id='nav'>
            <Link to="/">Home</Link>
            <Link to="/Createusers">Createusers</Link>
            <Link to="/Users">Users</Link>
            <Link to="/help">Help</Link>           
        </section>
    )
}
export default Navbar