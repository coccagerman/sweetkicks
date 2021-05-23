import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import shoppingCart from '@iconify-icons/fa-solid/shopping-cart';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import Context from '../../../Context';

function WishlistItem ({item}) {

    // Hook used to access wishlist and modify it
    const context = useContext(Context)

    return (
        <article className='wishlist-item'>
            <Link to={`/item/${item.id}`} >
                <img src={item.mainImage} alt="Wishlist item" />
            </Link>

            <p className='item-name'>{item.brand} {item.model}</p>
            <p className='item-price'>${context.addNumberThousandSeparator(item.price)}</p>
            <Link to={`/item/${item.id}`} >
                <Icon className='icon buy-icon' icon={shoppingCart} />
            </Link>
            <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={() => context.wishlistSubstract(item)} />
        </article>
    )
}

export default WishlistItem