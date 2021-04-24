import ImageDark from '../assets/hero/hero-img-dark.png'
import ImageLight from '../assets/hero/hero-img-light.png'

function Hero ({darkMode}) {
    return (
        <section className='hero'>
            <img src={darkMode === false ? ImageLight : ImageDark} className='hero-img' alt="Shoe background"/>
           <a href="#galleryHeader"> <span class="iconify" data-icon="bx:bx-arrow-from-top" data-inline="false"></span> </a>
        </section>
    )
}

export default Hero