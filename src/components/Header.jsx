import HeaderLogoDark from '../assets/sweetkicks_logo_header_dark.png'
import HeaderLogoLight from '../assets/sweetkicks_logo_header_light.png'

function Header ({setDarkMode, darkMode}) {

    function handleSwitchClick () {
        setDarkMode(!darkMode)
    }

    return (
        < >
        <header>
            <img className='headerLogo' src={darkMode === false ? HeaderLogoLight : HeaderLogoDark} alt='Company logo' />
            <nav>
                <ul>
                    <li><a href="#">Categories</a></li>
                        <ul>
                            <li><a href="#"></a>Street</li>
                            <li><a href="#"></a>Running</li>
                            <li><a href="#"></a>Basketball</li>
                            <li><a href="#"></a>Tennis</li>
                        </ul>
                    <li><a href="#">Sale</a></li>
                    <li><a href="#">Latest releases</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">My orders</a></li>
                    <span class="iconify shoppingCart" data-icon="ph:shopping-cart-fill" data-inline="false"></span>
                    <span class="iconify wishList" data-icon="clarity:heart-solid" data-inline="false"></span>
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