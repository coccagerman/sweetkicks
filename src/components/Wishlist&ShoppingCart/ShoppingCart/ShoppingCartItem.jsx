import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import pencilIcon from '@iconify-icons/el/pencil';
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import Context from '../../../Context';
import ShoppingCartModal from './ShoppingCartModal';


function ShoppingCartItem ({shoppingCartItem, item}) {
    
    // Hook used to access wishlist and modify it
    const context = useContext(Context)

    // Hook used to control modal display
    const [modalShow, setModalShow] = useState(false)

    return (
        <> 
            <article className='shoppingCart-item'>
                <Link to={{
                    pathname:'/item',
                    state: { item:{item} }
                }} >
                    <img src={shoppingCartItem.item.mainImage} alt="shopping cart item" />
                </Link>
                <p className='item-name'>{shoppingCartItem.item.brand} {shoppingCartItem.item.model}</p>
                <p className='item-price'>${context.addNumberThousandSeparator(shoppingCartItem.item.price)}</p>
                <p className='item-quantity'>Quantity: {shoppingCartItem.selectedQuantity}</p>
                <p className='item-size'>Size: {shoppingCartItem.selectedSize}</p>
                <Icon className='icon edit-icon' icon={pencilIcon} onClick={()=>setModalShow(true)} />
                <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={() => context.shoppingCartSubstract(shoppingCartItem)} />
            </article>

            <ShoppingCartModal show={modalShow} shoppingCartItem={shoppingCartItem} onHide={() => setModalShow(false)} />
        </>
    )
}

export default ShoppingCartItem
