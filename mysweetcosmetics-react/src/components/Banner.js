import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title= 'My Sweet Cosmetics'
    return <div className='msc-banner'>
                <img src={logo} alt='my sweet cosmetics' className='msc-logo' />
                <h1>{title}</h1> 
            </div>
    
}

export default Banner