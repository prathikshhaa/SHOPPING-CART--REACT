import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import './ClothesForWomen'
import './ShirtsForMen'
import './Home'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/ShirtsForMen">Men</Link>
        </li>
        <li>
            <Link to="/ClothesForWomen">Women</Link>
        </li>
        <li>
          <SearchBar/>
        </li>
    </ul>
    </>
  )
}
