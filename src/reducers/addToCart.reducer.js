import { TYPES } from "../actions/addToCart.actions";

export const addCartInitialState = { cart: [] };

export const addToCart = (state,action) => {
    switch(action.type){
        case TYPES.ADD: {
            let alreadyInCart = state.cart.find(el => el.item.ID === action.payload.ID);
            return alreadyInCart ? (
            {
                cart: state.cart.map(el => el.item.ID === alreadyInCart.item.ID ? {item: el.item, quantity: el.quantity+1} : el)
            }
            ) : {cart: [...state.cart, {item: action.payload, quantity: 1}]}
        }
        case TYPES.DELETE: {
            const del = () => {
                let index = null;
                for(let i = 0; i < state.cart.length; i++){
                    if(state.cart[i].item.name === action.payload.name ){
                        index = i;
                        break;
                    }
                }
                if(index !== null) state.cart.splice(index,1);
            }
            del();
            return { cart : [...state.cart] };
        }
        default:
            return state;
    }
}