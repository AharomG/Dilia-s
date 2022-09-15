const Roulette = ({img, closeModal,open}) => {
    return(
        <div className={`top-0 left-0 bottom-0 right-0 fixed md:bg-slate-900/30 ${open}`} onClick={(e)=>{closeModal(); e.stopPropagation()}}>
            <div onClick={(e)=>{e.stopPropagation();}} className='mt-[5vh] ml-auto mr-auto w-[50vw] border-2 border-dashed overflow-hidden'>
                <button className="absolute mt-[20%] ml-[1%] w-[4%]"><img className=" rounded-[50%] bg-slate-900/30" src="https://cdn-icons-png.flaticon.com/512/271/271218.png" alt="left"/></button>
                <button className="absolute mt-[20%] ml-[47%] w-[3%]" ><img className= 'rounded-[50%] bg-slate-900/30' src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt="right"/></button>
                <div className={`flex`}> {/*add transform X with a state, maybe a hook? */} 
                    {
                        img.map( (el,index) => <img key={index} className={`inline object-cover w-[100%]`} src={`${el}`} alt='food'/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Roulette;