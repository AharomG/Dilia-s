import Card from './Card'
import Roulette from './Roulette';
import { useModal } from "../hooks/useModal";

const Cards = ({data,isOpen,open,close}) => {
    const [isOpenModal0, openModal0, closeModal0] = useModal('hidden');
    const [isOpenModal1, openModal1, closeModal1] = useModal('hidden');
    const [isOpenModal2, openModal2, closeModal2] = useModal('hidden');

    const handleStateOpeners = (name) => {
        if(name.toLowerCase() === 'pasta') return openModal0
        if(name.toLowerCase() === 'arroz') return openModal1
        if(name.toLowerCase() === 'atun') return openModal2
    }

    const handleStateNames = (name) => {
        if(name.toLowerCase() === 'pasta') return isOpenModal0
        if(name.toLowerCase() === 'arroz') return isOpenModal1
        if(name.toLowerCase() === 'atun') return isOpenModal2
    }

    const handleStateCloser = (name) => {
        if(name.toLowerCase() === 'pasta') return closeModal0
        if(name.toLowerCase() === 'arroz') return closeModal1
        if(name.toLowerCase() === 'atun') return closeModal2
    }

    return(
        <>
            <div className = 'm-[1%] md:flex md:flex-row md:justify-center md:flex-wrap'>
            {
                data.map( (el) => <Card key={el._id} img={el.img[0]} name={el.name} description={el.description} price ={el.price} data={el} openModal={handleStateOpeners(el.name)}/>)
            }
            </div>
            {
                data.map( (el) => {console.log(el); return <Roulette key={el._id} img={el.img} open={handleStateNames(el.name)} closeModal={handleStateCloser(el.name)}/> }) //fix roulette
            }
        </>
    );
}

export default Cards;