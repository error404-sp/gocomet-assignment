import React, { useState } from 'react';
import ProductsData from '../../data/ProductsData';
import { useParams } from 'react-router-dom';
import "./DetailsPage.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import useProduct from '../../hooks/useProduct';
import Popup from 'reactjs-popup';
import Cart from '../Cart';

const DetailsPage = () => {
  const id = useParams().details;
  
  const {productState:{cart,products,wishList},productDispatch} = useProduct();
  console.log(id);
  let wishlistCheck = (wishList.filter((product)=>(
    product.productId === parseInt(id)
  )).length > 0);
 
  const [wishlist,setWishList] = useState(wishlistCheck);
  const [size, setSize] = useState("");
  const [isFilled, setFilled] = useState(true);
  const product=products.filter(product=>product.productId === parseInt(id))[0];
  const {images,discountDisplayLabel ,rating, brand, sizes, mrp , price , productName} = product;
  const ratingFixed = rating.toFixed(1);
  const sizesArray = sizes.split(",");
 
  function handleWishList(){
    setWishList(!wishlist)
    !wishlist ? productDispatch({type: "ADD_TO_WISHLIST", payload: product}) : productDispatch({type: "REMOVE_FROM_WISHLIST",payload: product});
  }


  
  return (
    <div id='details_product'>
     
        <div className="details_product_imgs">
          {images.map((image)=><InnerImageZoom className='details_product_img'
            src={image.src}
            zoomSrc={image.src}
            fullscreenOnMobile={true}
            moveType="pan"
            zoomScale={0.9}
            zoomPreload={true}
          />)}
        </div>
        <div id="details_product_descr">
        
            <h2 id="details_product_brand" className='font_xxl fontw_bold'>{brand}</h2>
            <p id="details_product_name" className='font_xl'>{productName}</p>
            <div id="details_product_rating" className="font_large fontw_bold">{ratingFixed} <i class="fa-solid fa-star" style={{color: "#0f9977"}}></i></div>  
            <hr/>
            
            <div>
                <span id='details_product_price' className="font_xxl fontw_bold">Rs. {price}</span>
                <span id='details_product_mrp' className='font_xl'>MRP Rs.{mrp}</span>
                <span id='details_product_discount' className='font_xl fontw_bold'>{discountDisplayLabel}</span>
            </div>
            <h4>SELECT SIZE: </h4>
            <ul class="details_product_sizes">
            {!isFilled ? <p>Select a size!!</p> : ""}
            {sizesArray.map(size =>(<li>
              <input required type="radio" id={size} value={size} name="size" onChange={(e)=>{setSize(e.target.value); setFilled(true)}}/>
                <label for={size}>{size}</label></li>))}</ul>
           
            {cart.some((value)=>value.productId == product.productId && value.selectedSize == size)?   <Popup trigger={<button id='btn-addtocart' className="fontw_bold"> GO TO CART </button>} modal nested>
           { close => (
      <div className='popup' >
        <button className="close" onClick={close}>
          &times;
        </button>
        <Cart/>
        </div>)}</Popup> :<button id='btn-addtocart' className="fontw_bold" onClick={()=>{size !== "" ? productDispatch({type: 'ADD_TO_CART', payload: {...product,selectedSize: size }}) : setFilled(false)}}><i class="fa-solid fa-cart-shopping"></i>  ADD TO CART</button>}
            
            <button id='btn-addtowishlist' className="fontw_bold" onClick={handleWishList}><span>{wishlist ? <i class="fa-solid fa-heart" style={{color: "#ea2a86"}}></i> : <i class="fa-regular fa-heart" style={{color: "#b8b8b8"}}></i>}</span>  WISHLIST</button>

            
        </div>
    </div>
  )
}

export default DetailsPage