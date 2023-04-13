import React from 'react';
import "./Sort.css"

import useProduct from '../../hooks/useProduct';

const Sort = () => {
  const {filterDispatch} = useProduct();
  return (
    <div className='sort'>
        <select name="sort_select" className='select' onChange={(e)=>filterDispatch({type:"SORT",payload:e.target.value})}>
            <option value="none" selected className="select_option">Recommended / Default</option>
            <option value="hightolow" className="select_option">Price : High to Low</option>
            <option value="lowtohigh" className="select_option">Price : Low to High</option>
            <option value="customer-rating" className="select_option">Customer Rating</option>
            
        </select>
        </div>
  )
}

export default Sort