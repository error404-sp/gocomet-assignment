import React, { useState } from 'react'

import WishList from './WishList';
import Cart from './Cart';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import logo from "./../mynta-logo.jpg";
import Popup from 'reactjs-popup';
import useProduct from '../hooks/useProduct';


const NavBar = () => {
    const { productState: {wishList,cart},filterDispatch} = useProduct();
    
   
  return (
        <div className='navbar'>
            <div className='navitem' >
            <img className='navImage'src={logo} alt=""  /></div>
            <div className='navitem'>MEN</div>
            <div className='navitem'>WOMEN</div>
            <div className='navitem'>KIDS</div>
            <div className='navitem'>HOME & LIVING</div>
            <div className='navitem'>BEAUTY</div>
            <div className='navitem'>STUDIO</div>
            <div className='navitem'>
                <div className="searchbar"><i class="fas fa-search" style={{color: "#54585f"}}></i>  
                <input type="search" placeholder='Search for products,brands and more' onChange={(e)=>filterDispatch({type:"SEARCH",payload:e.target.value.toLowerCase()})}/></div>
               
            </div>
            <div className='navitem'>
            <div className='navitem'><Popup trigger={<i class="far fa-heart"></i>} modal nested>
           { close => (
      <div className='popup' >
        <button className="close" onClick={close}>
          &times;
        </button>
        <WishList/>
        </div>)}
   </Popup>{wishList.length > 0 ? <span className="counter">{wishList.length}</span> : ""}
            </div>


            <div className='navitem'>
            <Popup trigger={<i class="fa-solid fa-cart-shopping"></i>} modal nested>
           { close => (
      <div className='popup' >
        <button className="close" onClick={close}>
          &times;
        </button>
        <Cart/>
        </div>)}

   </Popup>
           {cart.length ? <span className="counter">{cart.length}</span>: ""}
            </div></div>

            
        
           
      
       
        
    </div>
  )
}

export default NavBar;