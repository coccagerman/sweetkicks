import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import Context from './Context';

function ShoppingCartItem ({shoppingCartItem, item, brand, model, price, mainImage, quantity, size}) {
    
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
            <p className='item-quantity'>Quantity: {quantity}</p>
            <p className='item-size'>Size: {size}</p>
            <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={() => context.shoppingCartSubstract(shoppingCartItem)} />
        </article>
    )
}

export default ShoppingCartItem