import React, { useEffect, useState } from 'react';
import "./Cart.css"
import useProduct from '../hooks/useProduct';
import Popup from 'reactjs-popup';

const Cart = () => {
  const {productState: {cart},productDispatch} = useProduct();
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(()=>{
    let cartPrice = cart.reduce((total , current)=> total +  current.price,0);
    console.log(totalPrice)
    setTotalPrice(cartPrice);
  },[cart,totalPrice]
  );



  
 

  return (
    <div className='cart'>
       <h4 style={{textAlign:"center"}}>MY CART <span>[{cart.length}] , Total Price: {totalPrice}</span>
       <button className='btn-product-cart' onClick={()=>{
          productDispatch({type: 'BUY_ALL'});setTotalPrice(0)}}>BUY ALL</button>
      </h4>
    {cart.length > 0 ? 
      <div className ="cart_products">
      {cart.map((product)=> <div className="cart_card" id="product_card">
      <img className="product_card_image" src={product.images[0].src} alt={product.productName}/> 
        <h3 id="product_card_brand" className="font_large fontw_bold">{product.brand}</h3>
        <p id="product_card_name" className='font_medium'>{product.productName}</p>
        <p className='font_small'>Size: {product.selectedSize}</p>
        <div><span id="product_card_price" className='font_medium fontw_bold'> Rs.{product.price} </span><span id="product_card_mrp" className='font_small'>Rs.{product.mrp} </span><span id="product_card_discount" className='font_small'> {product.discountDisplayLabel}</span></div>
        <button className='btn-product-cart fontw_bold' onClick={()=>{productDispatch({type: "REMOVE_FROM_CART",payload: product})}}>BUY NOW</button>
        <button className='btn-product-cart fontw_bold' onClick={()=>{productDispatch({type: "REMOVE_FROM_CART",payload: product})}}><i class="fa-solid fa-trash-can" style={{color: "#ca163a"}}></i></button>
      </div>)}</div> : 
        <div className='emptyCart'>
         <img className="cart-empty-img" src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" alt=""/>
            <p>The cart is empty . Let's add some items</p></div>} 
    </div>
  )
}

export default Cart