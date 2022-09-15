import Socials from './SocialMedia'
import Twitter from '../assets/twitter_blue.svg'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'

const footer = () => {
    return(
        <footer className='bg-yellow-600 min-h-[10vh] pt-[5%] md:min-h-[20vh]'>
            <span className='flex justify-center'>
                <Socials imgURL={Twitter} link='https://twitter.com/i/flow/login' name='twitter' decor='w-[10vw] max-w-[10vw] mr-[1vw] md:max-w-[4vw]'/>
                <Socials imgURL={Facebook} link='https://es-la.facebook.com/' name='facebook' decor='max-w-[9vw] mr-[1vw] md:max-w-[4vw]'/>
                <Socials imgURL={Instagram} link='https://www.instagram.com/' name='instagram' decor='max-w-[9vw] mr-[3%] md:max-w-[4vw]'/>
            </span>
        </footer>
    );
}

export default footer;