import React, { useState } from 'react'
import Card from './Card'
import "./ProductsRender.css";
import useProduct from '../../hooks/useProduct';



const ProductsRender = () => {
  
  const {filterState:{products,sortby,bygender ,bybrand, byprice,search}}=useProduct();
 


   const applyFilters=()=>{
    let initialProducts=products;
    if(sortby){
      if(sortby==='hightolow' || sortby==='lowtohigh'){
          initialProducts = initialProducts.sort((a,b)=>sortby ==='lowtohigh'? 
          a.price - b.price :b.price - a.price);  }
      else if(sortby === 'customer-rating')   {
        initialProducts = initialProducts.sort((a,b)=>
          b.rating - a.rating );
      }
    }
    
    if(bygender){
      initialProducts=initialProducts.filter((product)=>product.gender === bygender)
    }

    if(bybrand.length){
     initialProducts=initialProducts.filter((product)=>{
        let score=0;
        bybrand.forEach((value)=>{
            if(product.brand===value.brand)
              score++;
        })
        return score
      })

    }


    if(byprice.length){
      let minimum =Math.min(...byprice.map(item => item.low));
      let maximum =Math.max(...byprice.map(item => item.high))
      initialProducts=initialProducts.filter((product)=>product.price>= minimum && product.price<=maximum)
    }
    if(search)
    {
      initialProducts=initialProducts.filter((product)=>{
        return (product.productName.toLowerCase().includes(search) || product.brand.toLowerCase().includes(search) || product.gender.toLowerCase().includes(search));
      })
    }
    
   
    return initialProducts;
  }

  



  return (
    <div className='products_render'>
      
     {applyFilters().map((product)=><Card product={product}/>)}
    </div>
  )
}

export default ProductsRender;