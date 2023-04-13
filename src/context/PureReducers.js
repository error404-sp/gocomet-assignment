


    // create reducer for filters, sort,etc
  export  const filterReducer = (state, action)=>{
    switch(action.type){
            case "SEARCH":
              return { ...state, search: action.payload };
            case "SORT":
              return { ...state, sortby: action.payload };
            case "FILTER_BY_GENDER":
              return { ...state, bygender: action.payload };
            case "FILTER_BY_BRAND":
              return {
                ...state,
                bybrand: action.payload.checked ?
                  [
                    ...state.bybrand,
                    {
                      brand: action.payload.brand,
                      checked: action.payload.checked,
                    },
                  ]
                
                  : state.bybrand.filter((b) => b.brand !== action.payload.brand),
              };
            case "FILTER_BY_PRICE":
              return {
                ...state,
                byprice: action.payload.checked
                  ? [
                      ...state.byprice,
                      {
                        low: action.payload.low,
                        high: action.payload.high,
                        checked: action.payload.checked,
                      },
                    ]
                  : state.byprice.filter((p) => p.low !== action.payload.low),
              };
            default:
                return {
                    state,
                
            }  
    }

    }


    //also one for cart, wishlist and similar

    export const dataReducer = (state, action)=>{
        switch(action.type){
            case 'ADD_TO_WISHLIST':
                return {
                    ...state,
                    wishList:[...state.wishList, action.payload ],

                };
            case 'REMOVE_FROM_WISHLIST':
                return {
                    ...state,
                    wishList: state.wishList.filter((product)=>(product.productId !== action.payload.productId)) 
                };

            case 'ADD_TO_CART':
                return {
                    ...state,
                    cart : [...state.cart ,  { ...action.payload, sizeSelected: action.payload.sizeSelected}]
                }

            case 'REMOVE_FROM_CART': 
                return {
                    ...state,
                    cart: state.cart.filter((product) => ((product.productId !== action.payload.productId )))
                };

            case 'BUY_ALL':
                return {
                    ...state, cart : []
                }

            default:
                return state;   

        }
    
        }
  


