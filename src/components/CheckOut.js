import { useContext } from 'react';
import addToCartContext from "../context/addToCartContext";
import CheckoutItem from './CheckoutItem';

const CheckOut = ({ isOpen, close }) => {
    const {state,price} = useContext(addToCartContext);
    
    return(
        <div className={`top-0 left-0 bottom-0 right-0 fixed md:bg-slate-900/40 ${isOpen}`} onClick={(e)=>{close(); e.stopPropagation();}}>
            <button className="relative ml-[77%] md:ml-[83%] bg-[#b4a7d6] inline-block border-solid border-2 border-white rounded-[1000px] text-center pl-[10px] pr-[10px] font-bold font-sans top-[7vh] md:top-[16vh]" onClick={(e)=>{close(); e.stopPropagation();}}>X</button>
            <div className="bg-black relative top-[15vw] left-[15vw] w-[70%] md:top-[16%] rounded-[1.2%] z-50" onClick={(e)=>e.stopPropagation()}>
                <div className="overflow-scroll text-white h-[60vh]">
                    {state.cart.length ? (
                        state.cart.map(
                            (el) => {
                                return(
                                    <CheckoutItem key={el.item._id} el={el}/>
                            )}
                        )
                    ) : (
                        <span>
                            <p>There's nothing in your cart! :(</p>
                        </span>
                    )}
                </div>
                
            </div>
            <button className="ml-[65%] relative mt-[7vh] md:mt-[9.5vw] md:ml-[80%] bg-[#b4a7d6] inline border-solid border-2 border-white rounded-[1000px] text-center pl-[10px] pr-[10px] font-bold font-sans" >Pay:{price}$</button>
        </div>
    );
}

export default CheckOut;