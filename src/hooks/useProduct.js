//custom hook to avoid using useContext every time

import { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const useProduct = () => {
    const context = useContext(ProductContext);
  return context;
}

export default useProduct;