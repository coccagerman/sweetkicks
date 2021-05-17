import { Link } from "react-router-dom";
import ImageDark from '../assets/hero/hero-img-dark.png'
import ImageLight from '../assets/hero/hero-img-light.png'

function Hero ({darkMode, productsDataBase, setProductsArray}) {
    return (
        <section className='hero'>
            <img src={darkMode === false ? ImageLight : ImageDark} className='hero-img' alt="Shoe background"/>




                <div class="cta-container">

                    <a class="container-arrow arrow-left scroll-to" href="#cards"><span><i class="fa fa-angle-down" aria-hidden="true"></i></span></a>

                    <Link to='/gallery' onClick={() => setProductsArray(productsDataBase)}>
                        <a href="#" class="btn">
                            <svg width="277" height="62">
                                <defs>
                                    <linearGradient id="grad1">
                                        <stop offset="0%" stop-color={darkMode ? '#ccc' : "#e03f31"}  />
                                        <stop offset="100%" stop-color={darkMode ? '#ccc' : "#c4372b"} />
                                    </linearGradient>
                                </defs>
                                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                            </svg>
                            <span>SHOW ME THE SHOES</span>
                        </a>
                    </Link>

                    <a class="container-arrow arrow-right scroll-to" href="#cards"><span><i class="fa fa-angle-down" aria-hidden="true"></i></span></a>

                </div>


            <div class="arrow-right">
                <div class="left"></div>
                <div class="right"></div>
            </div>

        </section>
    )
}

export default Hero