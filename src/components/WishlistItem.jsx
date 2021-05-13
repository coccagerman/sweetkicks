import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import shoppingCart from '@iconify-icons/fa-solid/shopping-cart';
import { useContext } from 'react';
import Context from './Context';

function WishlistItem ({item, brand, model, price, mainImage}) {

    // Hook used to access wishlist and modify it
    const context = useContext(Context)

    return (
        <article className='wishlist-item'>
            <img src={mainImage} alt="Wishlist item" />
            <p className='item-name'>{brand} {model}</p>
            <p className='item-price'>{price}</p>
            <Icon className='icon buy-icon' icon={shoppingCart} />
            <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={() => context.wishlistSubstract(item)} />
        </article>
    )
}

export default WishlistItem