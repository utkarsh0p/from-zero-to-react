import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <div>This is the Navbar</div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </>
  );
}

export default Nav