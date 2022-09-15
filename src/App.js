import './App.css';
import Header from './components/Header';
import Logo from './components/Logo'
import Footer from './components/Footer'
import Cards from './components/Cards'
import ShopCart from './components/ShopCart';
import CheckOut from './components/CheckOut';
import { useModal } from "./hooks/useModal";
import {AddToCartProvider} from './context/addToCartContext'
import {useFetch} from './hooks/useFetch'

function App() {
  const [isOpenCheckOut, openCheckOut, closeCheckOut] = useModal('hidden');
  //let homeIP = '192.168.1.214';
  let localHost = 'localhost';
  //let terraceIP = 0;
  const {data} = useFetch(`http://${localHost}:4000/`);
  return (
    <>  
      <Header/>
      <Logo from='block ml-auto mr-auto'/>
      <AddToCartProvider>
        <Cards data={data}/>
        <ShopCart openCheck={openCheckOut}/>
        <CheckOut isOpen={isOpenCheckOut} close={closeCheckOut}/>
      </AddToCartProvider>
      <Footer/>
    </>
  );
}

export default App;
