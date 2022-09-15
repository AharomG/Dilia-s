import { createContext,useReducer, useState } from "react";
import { addCartInitialState, addToCart } from '../reducers/addToCart.reducer';
import { TYPES } from '../actions/addToCart.actions'

const addToCartContext = createContext();

export const AddToCartProvider = ({children}) => {
    const [price,setPrice] = useState(0);
    const [state,dispatch] = useReducer(addToCart, addCartInitialState);
    const elimItem = (name,minus) => {dispatch({type: TYPES.DELETE, payload: {name}}); setPrice(price-parseFloat(minus))}
    const sendToCheckOut = (data) => {dispatch({ type: TYPES.ADD, payload: data }); setPrice(price+parseFloat(data.price))}
    const data = {state, elimItem, sendToCheckOut, price};

    return(
        <addToCartContext.Provider value={data}>{children}</addToCartContext.Provider>
    );
}

export default addToCartContext;