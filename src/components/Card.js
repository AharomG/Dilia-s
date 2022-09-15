import { useContext } from 'react';
import addToCartContext from "../context/addToCartContext";

const Card = ({img, name, description, price,data,openModal}) => {
    const {sendToCheckOut} = useContext(addToCartContext);

    return(
        <div className='md:mr-[3%] md:basis-[30%] mb-[5%] shadow-md duration-[0.3s] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] rounded-[5%]'>
            <div className="h-[73%]">
                <img src={img} title={name} alt={name} className='rounded-t-[5%] h-[100%] w-[100%] object-cover' onClick={(e)=>{openModal(); e.stopPropagation();}}/>
            </div>
            <div className='p-[10px_26px]'>
                <h1>{name}</h1>
                <p>{description}</p>
                <br/>
                <h1 className="text-right">{price}$</h1>
                <br/>
                <button className='ml-[68%] md:ml-[71%] bg-[#b4a7d6] inline-block border-solid border-2 border-white rounded-[1000px] text-center pl-[10px] pr-[10px] font-bold font-sans' onClick={(e)=>{sendToCheckOut(data); e.stopPropagation();}}>Add to cart</button>
            </div>
        </div>
    );
}

export default Card;