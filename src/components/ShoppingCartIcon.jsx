import { Icon } from '@iconify/react';
import shoppingCart from '@iconify-icons/fa-solid/shopping-cart';

function ShoppingCartIcon () {
    
    return (
        <div className='shoppingCart-container'>
            <Icon className='shoppingCart' icon={shoppingCart} />
            {/* <span className={wishListcounter !== 0 ? 'shoppingCart-counter' : 'displayNone'}><p>{wishListcounter}</p></span> */}
        </div>
    )
}

export default ShoppingCartIcon
