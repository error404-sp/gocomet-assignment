import React from 'react'
import "./Card.css";
import "./../../App.css";
const Card = () => {
const product = {
    productId: 6849354,
    rating: 3.875681161880493,
    images: [
      {
        view: 'default',
        src: 'http://assets.myntassets.com/assets/images/6849354/2022/2/9/cc41bfc1-55f8-47df-a705-d5a05b286a871644388786288-Roadster-Men-Blue--Beige-Regular-Fit-Checked-Casual-Shirt-88-1.jpg'
      },
      {
        view: 'back',
        src: 'http://assets.myntassets.com/assets/images/6849354/2022/2/9/aa14e7fa-f026-42c0-9359-7ad43bf4c7e21644388786244-Roadster-Men-Blue--Beige-Regular-Fit-Checked-Casual-Shirt-88-3.jpg'
      },
      {
        view: 'left',
        src: 'http://assets.myntassets.com/assets/images/6849354/2022/2/9/523cd3dd-4411-4067-8c87-a4e1843f94eb1644388786194-Roadster-Men-Blue--Beige-Regular-Fit-Checked-Casual-Shirt-88-5.jpg'
      },
      {
        view: 'front',
        src: 'http://assets.myntassets.com/assets/images/6849354/2022/2/9/cf16e108-7b61-43a3-81fe-08a480cdb5301644388786267-Roadster-Men-Blue--Beige-Regular-Fit-Checked-Casual-Shirt-88-2.jpg'
      },
      { view: 'size_representation', src: '' },
      {
        view: 'right',
        src: 'http://assets.myntassets.com/assets/images/6849354/2022/2/9/e4225236-e9e8-4b09-bf9c-7569f3ed02021644388786220-Roadster-Men-Blue--Beige-Regular-Fit-Checked-Casual-Shirt-88-4.jpg'
      },
      {
        view: 'search',
        src: 'http://assets.myntassets.com/assets/images/6849354/2022/2/9/cc41bfc1-55f8-47df-a705-d5a05b286a871644388786288-Roadster-Men-Blue--Beige-Regular-Fit-Checked-Casual-Shirt-88-1.jpg'
      }
    ],
    discountDisplayLabel: '(Rs. 400 OFF)',
    sizes: '38,40,42,44,46',
    productName: 'Roadster Men Blue & Beige Regular Fit Checked Sustainable Casual Shirt',
    mrp: 1699,
    price: 1299,
    discount: 400,
    gender: 'Men',
    brand: 'Roadster'
  };
  const {rating,images,discountDisplayLabel , brand, sizes, mrp , price , productName} = product;
  // product size
  const sizesArray = sizes.split(",");

  // reduce rating to 2 
  const ratingFixed = rating.toFixed(1);

  //rating 

  return (
    <div id="product_card">
        <img id="product_card_image" src={images[0].src} alt={images[0].view}/>
        <span id="product_card_rating" className="font_small fontw_bold">{ratingFixed} ✰</span>
        <div className="hover_element">
            <button>❤️ WISHLIST</button>
            <p>Sizes: {sizesArray[0]}+</p>
        </div>
        <h3 id="product_card_brand" className="font_medium fontw_bold">{brand}</h3>
        <h5 id="product_card_name">{productName}</h5>
        <div><span id="product_card_price">{price}</span><span id="product_card_mrp">{mrp}</span><span id="product_card_discount">{discountDisplayLabel}</span></div>

    </div>
  )
}

export default Card