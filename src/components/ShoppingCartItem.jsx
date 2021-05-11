import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import { useContext } from 'react';
import Context from './Context';

function ShoppingCartItem ({item, brand, model, price, mainImage}) {
    
    // Hook used to access wishlist and modify it
    const {shoppingCart, setShoppingCart} = useContext(Context)

    return (
        <article className='shoppingCart-item'>
            <img src={mainImage} alt="shopping Cart item" />
            <p className='item-name'>{brand} {model}</p>
            <p className='item-price'>{price}</p>
            <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={() => setShoppingCart(shoppingCart.splice(shoppingCart.indexOf(item), 1))} />
        </article>
    )
}

export default ShoppingCartItem