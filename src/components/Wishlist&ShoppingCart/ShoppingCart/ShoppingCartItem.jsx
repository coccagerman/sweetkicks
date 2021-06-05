import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import pencilIcon from '@iconify-icons/el/pencil';
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import Context from '../../../Context';
import ShoppingCartModal from './ShoppingCartModal';
import {useSpring, animated} from 'react-spring'

function ShoppingCartItem ({shoppingCartItem, setTotalPrice}) {
    
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

    // Animation props
    const shoppingCartItemAnimationProps = useSpring({opacity: 1, marginRight:10, from: {opacity: 0, marginRight:-100}})

    return (
        <> 
            <animated.article className='shoppingCart-item' style={shoppingCartItemAnimationProps}>
                <Link to={`/item/${shoppingCartItem.item.id}`} >
                    <img src={`/${shoppingCartItem.item.mainImage}`} alt="shopping cart item" />
                </Link>
                <p className='item-name'>{shoppingCartItem.item.brand} {shoppingCartItem.item.model}</p>
                <p className='item-price'>${context.addNumberThousandSeparator(shoppingCartItem.item.price)}</p>
                <p className='item-quantity'>Quantity: {shoppingCartItem.selectedQuantity}</p>
                <p className='item-size'>Size: {shoppingCartItem.selectedSize}</p>
                <Icon className='icon edit-icon' icon={pencilIcon} onClick={()=>showModal()} />
                <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={() => context.shoppingCartSubstract(shoppingCartItem)} />
            </animated.article>

            <ShoppingCartModal show={modalShow} shoppingCartItem={shoppingCartItem} onHide={() => setModalShow(false)} modalQuantity={modalQuantity} setModalQuantity={setModalQuantity} modalSize={modalSize} setModalSize={setModalSize} setTotalPrice={setTotalPrice} />
        </>
    )
}

export default ShoppingCartItem