import React from 'react'
import ListBar from './ListBar'
import Filters from './Filters'
import ProductsRender from './ProductsRender'
import { Link } from 'react-router-dom'

const ListPage = () => {
  return (
    <div style={{marginTop:"70px"}}>
        <p style={{textAlign:"left",paddingLeft:"20px"}}>Home / <Link to="/" className="link"><b>Shirts</b></Link></p>
        <ListBar/>
        <div className="flex_compo">
        <Filters/>
        <ProductsRender/></div>
    </div>
    
  )
}

export default ListPage