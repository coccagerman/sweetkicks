import { Link } from "react-router-dom";
import { useState } from 'react';
import { useContext } from 'react';
import Context from '../../Context';
import HeaderLogoDark from '../../assets/sweetkicks_logo_header_dark.png'
import HeaderLogoLight from '../../assets/sweetkicks_logo_header_light.png'
import WishlistIcon from '../Wishlist&ShoppingCart/Wishlist/WishlistIcon'
import ShoppingCartIcon from '../Wishlist&ShoppingCart/ShoppingCart/ShoppingCartIcon'
import { Icon } from '@iconify/react';
import arrowDownAlt2 from '@iconify-icons/dashicons/arrow-down-alt2';

function Header ({setDarkMode, darkMode, productsDataBase, setProductsArray}) {

    // Hook used to access context
    const context = useContext(Context)

    // Hook used to show and hide the dropdown menu
    const [showDropdown, setshowDropdown] = useState(false)
    // Hook used to show and hide the mobile menu
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    // Function used to handle the click of category btns
    function handleCategoryBtnClick (category) {
        setshowDropdown(!showDropdown)
        setProductsArray(productsDataBase.filter(item => (item.category === category)))
        context.setSearchParams([])
    }

    return (
        < >
        <header>
            <Link to='/'><img className='headerLogo' src={darkMode ? HeaderLogoDark : HeaderLogoLight} alt='Company logo' /></Link>
            <a href="#menu">
                <div className="hamburguer-icon" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <div className={!showMobileMenu ? 'line' : 'line top'}></div>
                    <div className={!showMobileMenu ? 'line' : 'line center'}></div>
                    <div className={!showMobileMenu ? 'line' : 'line bottom'}></div>
                </div>
            </a>

            <nav className={showMobileMenu ? 'menu-active' : null}>
                <ul>
                    <li><a href="#" onClick={() => setshowDropdown(!showDropdown)} className='categories hover-effect'>Categories 
                            <Icon icon={arrowDownAlt2} className={!showDropdown ? 'arrowIcon' : 'arrowIcon open' }/> 
                        </a>
                        <ul className={showDropdown ? 'dropdown' : 'hiddenDropdown' }>
                            <li><Link to='/gallery' href="#searchResults" onClick={() => {handleCategoryBtnClick('Street'); setShowMobileMenu(false)}}>Street</Link></li>
                            <li><Link to='/gallery' href="#searchResults" onClick={() => {handleCategoryBtnClick('Running'); setShowMobileMenu(false)}}>Running</Link></li>
                            <li><Link to='/gallery' href="#searchResults" onClick={() => {handleCategoryBtnClick('Basketball'); setShowMobileMenu(false)}}>Basketball</Link></li>
                            <li><Link to='/gallery' href="#searchResults" onClick={() => {handleCategoryBtnClick('Tennis'); setShowMobileMenu(false)}}>Tennis</Link></li>
                        </ul>
                    </li>
                    <li onClick={() => {setProductsArray(productsDataBase.filter(item => (item.discount !== 0))); setShowMobileMenu(false)}}><Link to='/gallery' href="#searchResults" className='hover-effect'>Sale</Link></li>
                    <li onClick={() => {setProductsArray(productsDataBase.filter(item => (item.latestRelease))); setShowMobileMenu(false)}}><Link to='/gallery' href="#searchResults" className='hover-effect'>Latest releases</Link></li>
                    <li><Link to="/about" className='hover-effect' onClick={()=>setShowMobileMenu(false)}>About</Link></li>
                    <li ><Link to="/orders" className='hover-effect' onClick={()=>setShowMobileMenu(false)}>My orders</Link></li>

                    <div className='shoppingcartAndWishlist-container'>
                        <Link to="/shoppingcart" onClick={()=>setShowMobileMenu(false)}><ShoppingCartIcon /></Link>
                        <Link to="/wishlist" onClick={()=>setShowMobileMenu(false)}><WishlistIcon /></Link>
                    </div>

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
