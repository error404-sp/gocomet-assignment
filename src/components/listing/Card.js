import React, {  useState } from 'react'
import "./Card.css";
import "./../../App.css";
import { useNavigate } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Popup from 'reactjs-popup';
import "./../WishList.css";
import "./ProductsRender.css";

const Card = ({product}) => {
  
  const {productState:{products, wishList },productDispatch}= useProduct();
 
  const {rating,images,discountDisplayLabel ,productId, brand, sizes, mrp , price , productName} = product;
  let wishlistCheck = (wishList.filter((product)=>(
    product.productId === parseInt(productId)
  )).length > 0);
   const [display ,setDisplay] = useState(false);
   const [wishlist,setWishList] = useState(wishlistCheck);
   const[indexValue,setIndexValue]=useState(0);
   const navigate = useNavigate();

   if(display){
    setTimeout(
      () => {
        setIndexValue((index) =>{
          console.log(index);
          return index === images.length - 1 ? 0 : index + 1}    
  )},3000);}
   

  
  // product size
  const sizesArray = sizes.split(",");

  // reduce rating to 2 
  const ratingFixed = rating.toFixed(1);
    
  function handleWishlist(){
    setWishList(!wishlist);
    !wishlist ? productDispatch({type: "ADD_TO_WISHLIST", payload: product}) : productDispatch({type: "REMOVE_FROM_WISHLIST",payload: product});
  }

  
    
   
 function handleHover(){
  setDisplay(true);
  
 }



  return (
      <div id="product_card" onMouseEnter={handleHover} onMouseLeave={()=>{setDisplay(false)}} >
        {display ? <div className="hover_element" >

       <div onClick={()=>{navigate(`/shirts/${productId}`)}}> <div class="fill_space"> 
       <Popup trigger={<button id="btn-similar" ><i class="fa-solid fa-eye" style={{color: "#c81999"}}></i> View Similar</button>} modal nested>
           { close => (
      <div className='popup' >
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="wishlist_products">
        {products.filter((prod) => prod.brand === brand).map((prod)=>(<div className="wishlist_card" id="product_card">
          <img className="product_card_image" src={prod.images[0].src} alt={prod.productName}/> 
            <h3 id="product_card_brand" className="font_large fontw_bold">{prod.brand}</h3>
            <p id="product_card_name" className='font_medium'>{prod.productName}</p>
            <div><span id="product_card_price" className='font_medium fontw_bold'> Rs.{prod.price} </span><span id="product_card_mrp" className='font_small'>Rs.{prod.mrp} </span><span id="product_card_discount" className='font_small'> {prod.discountDisplayLabel}</span></div>
            <button className='btn-product-wishlist fontw_bold' onClick={()=>{navigate(`/shirts/${product.productId}`); }}> EXPLORE</button>
          </div>))}
            </div>
        </div>)}
        </Popup></div>
        <img class="product_card_image" src={images[indexValue].src} alt={productName}/></div>
          <div className='on_hover'>
            <button id="btn-wishlist" className='fontw_bold' onClick={handleWishlist}><span>{wishlist ? <i class="fa-solid fa-heart" style={{color: "#ea2a86"}}></i> : <i class="fa-regular fa-heart" style={{color: "#b8b8b8"}}></i>}</span>  WISHLIST</button>
            <p className='font_small' id="product_card_size">Sizes: {sizesArray[0]}</p></div>
        </div>:
        <div id="product_card_descr">
          <span id="product_card_rating" className="font_small fontw_bold">{ratingFixed} <i class="fa-solid fa-star" style={{color: "#0f9977"}}></i></span>  
        <img class="product_card_image" src={images[0].src} alt={productName}/> 
        <h3 id="product_card_brand" className="font_large fontw_bold">{brand}</h3>
        <p id="product_card_name" className='font_medium'>{productName}</p></div>}
        <div><span id="product_card_price" className='font_medium fontw_bold'> Rs.{price} </span><span id="product_card_mrp" className='font_small'>Rs.{mrp} </span><span id="product_card_discount" className='font_small'> {discountDisplayLabel}</span></div>
        </div>
     
  )
}

export default Card;