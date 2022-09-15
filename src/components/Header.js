import Logo from './Logo'
import Socials from './SocialMedia';
import Twitter from '../assets/twitter_blue.svg'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'

const Header = () => {
    return(
        <header className='bg-red-600 overflow-hidden max-h-fit'>
            <Logo from='h-[3vh] max-w-[5vw] hidden md:inline'/>
            <span className='text-black-500 text-[2.5vw] md:text-[1vw]'> Dilia's is not responsible for any negative consequence of directly cosuming Dilia's food.</span>
            <div className='hidden space-x-3 md:inline md:pl-[45vw] 2xl:pl-[45vw]'>
                <Socials imgURL={Twitter} link='https://twitter.com/i/flow/login' name='twitter' decor='inline max-w-[1.5vw]'/>
                <Socials imgURL={Facebook} link='https://es-la.facebook.com/' name='facebook' decor='inline max-w-[1.5vw]'/>
                <Socials imgURL={Instagram} link='https://www.instagram.com/' name='instagram' decor='inline max-w-[1.5vw]'/>
            </div>
        </header>
    );
}

export default Header;