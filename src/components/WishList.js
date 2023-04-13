import React from 'react';
import "./WishList.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./listing/Card.css";
import useProduct from '../hooks/useProduct';

const WishList = () => {
  const { productState: {wishList},productDispatch} = useProduct();
 
 
  

  return (
    <div className='wishlist'>
      <h4 style={{textAlign:"center"}}>MY WISHLIST</h4>
      {wishList.length > 0 ? 
      <div class="wishlist_products">
       {wishList.map((product)=>
          <div className="wishlist_card" id="product_card">
          <img className="product_card_image" src={product.images[0].src} alt={product.productName}/> 
            <h3 id="product_card_brand" className="font_large fontw_bold">{product.brand}</h3>
            <p id="product_card_name" className='font_medium'>{product.productName}</p>
            <div><span id="product_card_price" className='font_medium fontw_bold'> Rs.{product.price} </span><span id="product_card_mrp" className='font_small'>Rs.{product.mrp} </span><span id="product_card_discount" className='font_small'> {product.discountDisplayLabel}</span></div>
            <button className='btn-product-wishlist fontw_bold' onClick={()=>{productDispatch({type: "REMOVE_FROM_WISHLIST",payload: product}); productDispatch({type: 'ADD_TO_CART', payload: {...product,selectedSize: product.sizes.split(',')[0] }}) ;
           }}>MOVE TO BAG</button><button className='btn-product-wishlist fontw_bold'><i class="fa-solid fa-trash-can" style={{color: "#ca163a"}}></i></button>
          </div>)}</div>
       :
      <div className='emptyWishList'>
            <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt=""/>
            <p>Add items to the wishlist</p>
        </div>}
    </div>
  )
}

export default WishList