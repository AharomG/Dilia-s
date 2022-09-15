import { useContext } from "react";
import addToCartContext from "../context/addToCartContext";

const CheckoutItem = ({el}) => {
    const { elimItem } = useContext(addToCartContext);

    return (
        <div>
            <button className="relative ml-[77%] md:ml-[1%] bg-[#b4a7d6] inline-block border-solid border-2 border-white rounded-[1000px] text-center pl-[10px] pr-[10px] font-bold font-sans top-[7vh] md:top-[0vh]" name={el.item.name} id={(el.item.price*el.quantity)} onClick={(e) => {elimItem(e.target.name,e.target.id); e.stopPropagation();}}>X</button>
            <img src={el.item.img[0]} className="w-[20%] mt-[1%] inline ml-[1rem]" alt={el.item.name}/>
            <span className="ml-[1rem] mr-[1rem]">{el.item.name}</span>
            <span className="ml-[1rem] mr-[1rem]">{el.item.description}</span>
            <span className="ml-[1rem] mr-[1rem]">{el.item.price}</span>
            <span className="ml-[1rem] mr-[1rem]">{el.quantity}</span>
        </div>
    );
}

export default CheckoutItem;