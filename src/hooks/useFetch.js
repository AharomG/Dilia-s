import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState({});

    useEffect(()=>{
        const getData = async (url) => {
            try {
                let res = await fetch(url,{headers: {'Content-Type': 'application/json'}});
                if(!res.ok){
                    throw new Error('Error en Fetch');
                }
                let data = await res.json();
                setIsPending(false);
                setData(data);
                setError({err: false});
            } catch (err) {
                console.log(err)
                setError(err);
            }
        }
        getData(url);
    },[url]);
    return {data, isPending, error};
};