import { Link } from "react-router-dom";
import ImageDark from '../assets/hero/hero-img-dark.png'
import ImageLight from '../assets/hero/hero-img-light.png'

function Hero ({darkMode, productsDataBase, setProductsArray}) {
    return (
        <section className='hero'>
            <img src={darkMode === false ? ImageLight : ImageDark} className='hero-img' alt="Shoe background"/>
            <Link to='/gallery' onClick={() => setProductsArray(productsDataBase)}><span class="iconify" data-icon="bx:bx-search" data-inline="false"></span></Link>
        </section>
    )
}

export default Hero