import { useState } from 'react';
import { useRoulette } from '../hooks/useRoulette'

const Roulette = ({img, closeModal,open}) => {
    const [transform, toTheRight, toTheLeft] = useRoulette(0);
    const [showR, showRButton] = useState('inline');
    const [showL, showLButton] = useState('hidden');

    const showRightButton = () => {
        if(transform-100 === (img.length-1)*-100) {showRButton('hidden');}
        showLButton('inline');
    }

    const showLeftButton = () => {
        if(transform+100 === 0) showLButton('hidden');
        showRButton('inline');
    }
    
    return(
        <div className={`top-0 left-0 bottom-0 right-0 fixed md:bg-slate-900/30 ${open}`} onClick={(e)=>{closeModal(); e.stopPropagation()}}>
            <div onClick={(e)=>{e.stopPropagation();}} className='mt-[5vh] ml-auto mr-auto w-[50vw] border-2 border-dashed overflow-hidden'>
                <button className={`absolute mt-[20%] ml-[1%] w-[4%] z-50 ${showL}`}  onClick={(e)=>{toTheLeft(); showLeftButton(); e.stopPropagation()}}><img className=" rounded-[50%] bg-slate-900/30" src="https://cdn-icons-png.flaticon.com/512/271/271218.png" alt="left"/></button>
                <button className={`absolute mt-[20%] ml-[47%] w-[3%] z-50 ${img.length <= 1 ? `hidden` : showR}`} onClick={(e)=>{toTheRight(); showRightButton(); e.stopPropagation()}}><img className= 'rounded-[50%] bg-slate-900/30' src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt="right"/></button>
                <div className={`flex transition ease-in-out duration-[1000ms] translate-x-[${transform}%]`}>
                    {
                        img.map( (el,index) => <img key={index} className={`inline object-cover w-[100%]`} src={`${el}`} alt='food'/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Roulette;