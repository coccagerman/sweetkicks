import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import pencilIcon from '@iconify-icons/el/pencil';
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import Context from '../../../Context';
import ShoppingCartModal from './ShoppingCartModal';


function ShoppingCartItem ({shoppingCartItem, item, mainImage}) {
    
    // Hook used to access wishlist and modify it
    const context = useContext(Context)

    // Hook used to control modal display
    const [modalShow, setModalShow] = useState(false)
    // Hooks used to store quantity and size changes in the modal
    const [modalQuantity, setModalQuantity] = useState(shoppingCartItem.selectedQuantity)
    const [modalSize, setModalSize] = useState(shoppingCartItem.selectedSize)

    // Function used to display modal
    const showModal = () => {
        setModalQuantity(shoppingCartItem.selectedQuantity)
        setModalSize(shoppingCartItem.selectedSize)
        setModalShow(true)
    }

    return (
        <> 
            <article className='shoppingCart-item'>
                <Link to={{
                    pathname:'/item',
                    state: { item:{item} }
                }} >
                    <img src={mainImage} alt="shopping cart item" />
                </Link>
                <p className='item-name'>{shoppingCartItem.item.brand} {shoppingCartItem.item.model}</p>
                <p className='item-price'>${context.addNumberThousandSeparator(shoppingCartItem.item.price)}</p>
                <p className='item-quantity'>Quantity: {shoppingCartItem.selectedQuantity}</p>
                <p className='item-size'>Size: {shoppingCartItem.selectedSize}</p>
                <Icon className='icon edit-icon' icon={pencilIcon} onClick={()=>showModal()} />
                <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={() => context.shoppingCartSubstract(shoppingCartItem)} />
            </article>

            <ShoppingCartModal show={modalShow} shoppingCartItem={shoppingCartItem} onHide={() => setModalShow(false)} modalQuantity={modalQuantity} setModalQuantity={setModalQuantity} modalSize={modalSize} setModalSize={setModalSize}/>
        </>
    )
}

export default ShoppingCartItem
