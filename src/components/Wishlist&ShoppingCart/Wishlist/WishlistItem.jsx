import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import shoppingCart from '@iconify-icons/fa-solid/shopping-cart';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import Context from '../../../Context';
import {useSpring, animated} from 'react-spring'

function WishlistItem ({item}) {

    // Hook used to access context and modify it
    const context = useContext(Context)

    // Animation props
    const wishlistItemAnimationProps = useSpring({opacity: 1, marginRight:10, from: {opacity: 0, marginRight:-100}})

    return (
        <animated.article className='wishlist-item' style={wishlistItemAnimationProps}>
            <Link to={`/item/${item.id}`} >
                <img src={item.mainImage} alt="Wishlist item" />
            </Link>

            <p className='item-name'>{item.brand} {item.model}</p>
            <p className='item-price'>${context.addNumberThousandSeparator(item.price)}</p>
            <Link to={`/item/${item.id}`} >
                <Icon className='icon buy-icon' icon={shoppingCart} />
            </Link>
            <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={() => context.wishlistSubstract(item)} />
        </animated.article>
    )
}

export default WishlistItem