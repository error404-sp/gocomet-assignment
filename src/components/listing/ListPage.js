import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import ListBar from './ListBar'
import Filters from './Filters'
import ProductsRender from './ProductsRender'

const ListPage = () => {
  return (
    <div>
        <h5>ListPage</h5>
        <Breadcrumbs/>
        <ListBar/>
        <Filters/>
        <ProductsRender/>
    </div>
    
  )
}

export default ListPage