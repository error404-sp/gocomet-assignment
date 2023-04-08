import React from 'react'
import SearchBar from './SearchBar';
import WishList from './WishList';
import Cart from './Cart';

const NavBar = () => {
  return (
    <div>
        <h1>Myntra</h1>
        <SearchBar/>
        <WishList/>
        <Cart/>
        
    </div>
  )
}

export default NavBar;