import { Icon } from '@iconify/react';
import { useContext } from 'react';
import shoppingCart from '@iconify-icons/fa-solid/shopping-cart';
import Context from './Context';

function ShoppingCartIcon () {
    
    // Hook used to access context
    const context = useContext(Context)

    return (
        <div className='shoppingCart-container'>
            <Icon className='shoppingCart-icon' icon={shoppingCart} />
            <span className={context.shoppingCart.length !== 0 ? 'shoppingCart-counter' : 'displayNone'}><p>{context.shoppingCart.length}</p></span>
        </div>
    )
}

export default ShoppingCartIcon
