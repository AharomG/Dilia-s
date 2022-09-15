import image from '../assets/logo.png'

const Logo = ({from}) => {
    return(
        <img src={image} alt='Logo' className={from}/>
    );
}

export default Logo;