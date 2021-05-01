import { Link } from "react-router-dom";
import { useState } from 'react';
import HeaderLogoDark from '../assets/sweetkicks_logo_header_dark.png'
import HeaderLogoLight from '../assets/sweetkicks_logo_header_light.png'
import WishlistIcon from './WishlistIcon'
import { Icon } from '@iconify/react';
import arrowDownAlt2 from '@iconify-icons/dashicons/arrow-down-alt2';

function Header ({setDarkMode, darkMode, wishListcounter, productsDataBase, setProductsArray}) {

    // Hook used to show and hide the dropdown menu
    const [showDropdown, setshowDropdown] = useState(false)

    // Function used to handle the click of category btns
    function handleCategoryBtnClick (category) {
        setshowDropdown(!showDropdown)
        setProductsArray(productsDataBase.filter(item => (item.cattegory === category)))
    }

    return (
        < >
        <header>
            <Link to='/'><img className='headerLogo' src={darkMode === false ? HeaderLogoLight : HeaderLogoDark} alt='Company logo' /></Link>
            <nav>
                <ul>
                    <li><a href="#" onClick={() => setshowDropdown(!showDropdown)} className='categories hover-effect'>Categories 
                            <Icon icon={arrowDownAlt2} className={showDropdown === false ? 'arrowIcon' : 'arrowIcon open' }/> 
                        </a>
                        <ul className={showDropdown === true ? 'dropdown' : 'hiddenDropdown' }>
                            <li><Link to='/gallery' href="#searchResults" onClick={() => handleCategoryBtnClick('Street')}>Street</Link></li>
                            <li><Link to='/gallery' href="#searchResults" onClick={() => handleCategoryBtnClick('Running')}>Running</Link></li>
                            <li><Link to='/gallery' href="#searchResults" onClick={() => handleCategoryBtnClick('Basketball')}>Basketball</Link></li>
                            <li><Link to='/gallery' href="#searchResults" onClick={() => handleCategoryBtnClick('Tennis')}>Tennis</Link></li>
                        </ul>
                    </li>
                    <li onClick={() => setProductsArray(productsDataBase.filter(item => (item.discount !== 0)))}><Link to='/gallery' href="#searchResults" className='hover-effect'>Sale</Link></li>
                    <li onClick={() => setProductsArray(productsDataBase.filter(item => (item.latestRelease)))}><Link to='/gallery' href="#searchResults" className='hover-effect'>Latest releases</Link></li>
                    <li><Link to="/about" className='hover-effect'>About</Link></li>
                    <li><a href="#" className='hover-effect'>My orders</a></li>
                    <span class="iconify shoppingCart" data-icon="ph:shopping-cart-fill" data-inline="false"></span>
                    <Link to="/wishlist"><WishlistIcon wishListcounter={wishListcounter} /></Link>
                    <li className='switch-container'>
                        <span className="iconify" data-icon="ion:sunny-outline" data-inline="false"></span>
                        <label className="switch" >
                            <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
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
