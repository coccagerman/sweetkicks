import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import Context from './Context';

function ShoppingCartItem ({item, brand, model, price, mainImage}) {
    
    // Hook used to access wishlist and modify it
    const context = useContext(Context)

    return (
        <article className='shoppingCart-item'>
            <Link to={{
                pathname:'/item',
                state: { item:{item} }
            }} >
                <img src={mainImage} alt="shopping Cart item" />
            </Link>
            <p className='item-name'>{brand} {model}</p>
            <p className='item-price'>${context.addNumberThousandSeparator(price)}</p>
            <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={() => context.shoppingCartSubstract(item)} />
        </article>
    )
}

export default ShoppingCartItem