import ShoppingCart from '../assets/shoppingCart.png';
import { useContext } from 'react';
import addToCartContext from "../context/addToCartContext";

const ShopCart = ({openCheck}) => { 
    const {state} = useContext(addToCartContext);
    return(
        <div className='fixed top-[5%] left-[3%] md:left-[1%] grid grid-cols-[10%_10%] grid-rows-[10%_10%]' onClick={openCheck}>
            <div className='rounded-[50%] md:cursor-pointer'>
                <img src={ShoppingCart} alt='' className='rounded-[50%] bg-black'/>
            </div>
            <div className='bg-red-400 col-[2_/_2] row-[1_/_4] rounded-[50%] w-[50%] h-[50%] text-center'>{state.cart.length}</div>
        </div>
    );
}

export default ShopCart;