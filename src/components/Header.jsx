import HeaderLogoDark from '../assets/sweetkicks_logo_header_dark.png'
import HeaderLogoLight from '../assets/sweetkicks_logo_header_light.png'
import WishlistIcon from './WishlistIcon'
import { useState } from 'react';

function Header ({setDarkMode, darkMode, wishListcounter}) {

    function handleSwitchClick () {
        setDarkMode(!darkMode)
    }

    // Hook used to show and hide the dropdown menu
    const [showDropdown, setshowDropdown] = useState(false)

    return (
        < >
        <header>
            <img className='headerLogo' src={darkMode === false ? HeaderLogoLight : HeaderLogoDark} alt='Company logo' />
            <nav>
                <ul>
                    <li><a href="#" onClick={(e) => setshowDropdown(!showDropdown)}>Categories</a>
                        <ul className={showDropdown === true ? 'dropdown' : 'hiddenDropdown' }>
                            <li><a href="#">Street</a></li>
                            <li><a href="#">Running</a></li>
                            <li><a href="#">Basketball</a></li>
                            <li><a href="#">Tennis</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Sale</a></li>
                    <li><a href="#">Latest releases</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">My orders</a></li>
                    <span class="iconify shoppingCart" data-icon="ph:shopping-cart-fill" data-inline="false"></span>
                    <WishlistIcon wishListcounter={wishListcounter} />
                    <li className='switch-container'>
                        <span className="iconify" data-icon="ion:sunny-outline" data-inline="false"></span>
                        <label className="switch" >
                            <input type="checkbox" onClick={handleSwitchClick} />
                            <span className="slider round" />
                        </label>
                        <span className="iconify" data-icon="ion:moon-outline" data-inline="false"></span>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header