import { useState } from "react"

export const useRoulette = (value = 0) => {
    const [transform, setTransfrom] = useState(0);
    
    const toTheRight = () => setTransfrom(transform-100);
    const toTheLeft = () => setTransfrom(transform+100);
    
    return [transform, toTheRight, toTheLeft];
}