import { createContext, useReducer } from "react";
import { filterReducer , dataReducer } from "./PureReducers";
import ProductsData from "../data/ProductsData";

// create context
const ProductContext = createContext();

//pass states and functions to children

//create a provider
export const ProductProvider = ({children})=>{
    //actual data state
    const [productState, productDispatch] = useReducer(dataReducer,{
        products: ProductsData,
        cart: [],
        wishList: [],
      })

      //filter state for rendering
        const [filterState,filterDispatch] = useReducer(filterReducer,{
            products: ProductsData,
            sortby:"",
            search:"",
            bygender: "",
            bybrand: [],
            byprice: [],

        })
        return <ProductContext.Provider value={{productState ,productDispatch , filterState , filterDispatch}}>{children}</ProductContext.Provider>
}

export default ProductContext;

