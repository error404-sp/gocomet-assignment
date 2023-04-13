import React from 'react'
import Sort from './Sort';
import "./ListBar.css";
import useProduct from '../../hooks/useProduct';

const ListBar = () => {

  return (
    <div className="list_bar">
      <p></p>
        <Sort/>
    </div>
  )
}

export default ListBar