import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import shoppingCart from '@iconify-icons/fa-solid/shopping-cart';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import Context from './Context';

function WishlistItem ({item, brand, model, price, mainImage}) {

    // Hook used to access wishlist and modify it
    const context = useContext(Context)

    return (
        <article className='wishlist-item'>
            <Link to={{
                pathname:'/item',
                state: { item:{item} }
            }} >
                <img src={mainImage} alt="Wishlist item" />
            </Link>

            <p className='item-name'>{brand} {model}</p>
            <p className='item-price'>${context.addNumberThousandSeparator(price)}</p>
            <Link to={{
                pathname:'/item',
                state: { item:{item} }
            }} >
                <Icon className='icon buy-icon' icon={shoppingCart} />
            </Link>
            <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={() => context.wishlistSubstract(item)} />
        </article>
    )
}

export default WishlistItem