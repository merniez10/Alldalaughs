import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function Header() {

  return (
    <>
      <header className="flex justify-between px-5" style={{height:"50px"}}>
        <h1 className="logo text-xl">ALL THE LAUGHS</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/">Random</Link>
            </li>
            <li>
              <Link to="/Favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
