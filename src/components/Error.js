import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return(
        <div className="top-0 left-0 bottom-0 right-0 fixed md:bg-slate-900/30 z-[99]">
            <div className="ml-auto mr-auto w-[50%] h-[25%] mt-[40vh] bg-red-600 text-center">
                <p className="pt-[10%]">
                    There was a problem placing your order :(
                </p>
                <button className="mt-[5%] bg-[#b4a7d6] inline-block border-solid border-2 border-white rounded-[1000px] text-center pl-[10px] pr-[10px] font-bold font-sans" onClick={()=> navigate('/')}>Close</button>
            </div>
        </div>
    );
}

export default Error;