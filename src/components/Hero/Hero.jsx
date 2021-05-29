import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageLight from '../../assets/hero/hero-img-light.png'
import ImageDark from '../../assets/hero/hero-img-dark.png'
import ImageLightMobile from '../../assets/hero/hero-img-mobile-light.png'
import ImageDarkMobile from '../../assets/hero/hero-img-mobile-dark.png'

function Hero ({darkMode, productsDataBase, setProductsArray}) {

// Hook that reads screen size
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }
  
  const size = useWindowSize();

    return (
        <section className='hero'>
            <img src={size.width > 1000 ? (!darkMode ? ImageLight : ImageDark) : (!darkMode ? ImageLightMobile : ImageDarkMobile)} className='hero-img' alt="Shoe background"/>

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