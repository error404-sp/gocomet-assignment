import React from 'react';
import "./Filter.css";
import useProduct from '../../hooks/useProduct';

const Filters = () => {

  const {filterDispatch} = useProduct();

  return (
    <div className='filters'>
      <h3 style={{padding:"10px"}}>FILTERS</h3> 
    
       
      <form>
          <div className='filter_gender' onChange={(e)=>filterDispatch({type:"FILTER_BY_GENDER",payload:e.target.value})}>
          <label className='by_gender'>
          <input type="radio" value="Men" name="gender" /> Men
          </label>
          <label className='by_gender'>
          <input type="radio" value="Women" name="gender" /> Women
          </label>
          </div>
         
          <div className='filter_brands' onChange={(e)=>filterDispatch({type:"FILTER_BY_BRAND",payload:{brand:e.target.name,checked: e.target.checked }})}>
              <h4>BRAND</h4>
              <label className='by_brand'> <input name='Roadster'  type="checkbox"/> Roadster</label>
              <label className='by_brand' > <input name='H&M' type="checkbox"/> H&M</label>
              <label className='by_brand'> <input name='SHAYE' type="checkbox"/> SHAYE</label>
              <label className='by_brand' > <input name='HIGHLANDER' type="checkbox"/> HIGHLANDER</label>
              <label className='by_brand'> <input name='Madame' type="checkbox"/> Madame</label>
              <label className='by_brand'> <input name='Mast & Harbour' type="checkbox"/> Mast & Harbour</label>
              
          </div>
         
          <div className='filter_prices' onChange={(e)=>filterDispatch({type:"FILTER_BY_PRICE",payload:{...JSON.parse(e.target.name),checked:e.target.checked}})}>
              <h4>PRICE</h4>
              <label className='by_price'> <input name='{"low":300,"high":1000}'type="checkbox"/> Rs. 300 to Rs. 1000</label>
              <label className='by_price' > <input name='{"low":1000,"high":1500}' type="checkbox"/> Rs. 1000 to Rs. 1500</label>
              <label className='by_price'> <input name='{"low":1500,"high":3000}' type="checkbox"/> Rs. 1500 to Rs. 3000</label>
          </div>
      </form>
      </div>
  )
}

export default Filters
