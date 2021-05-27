import Modal from 'react-bootstrap/Modal'
import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import { useState, useContext } from 'react';
import Context from '../../../Context';

function ShoppingCartModal (props) {

    // Hook used to access context
    const context = useContext(Context)
    
    // Hooks and funciton used to display quantity, stock and size errors
    const [quantityErrorMessage, setQuantityErrorMessage] = useState (null)
    // const [stockErrorMessage, setStockErrorMessage] = useState (null)
    const [sizeErrorMessage, setSizeErrorMessage] = useState (null)
    
    function cleanUpErrors() {
        setQuantityErrorMessage(null)
        setSizeErrorMessage(null)
    }

    // Functions that execute when user selects item quantity and size
    function handleQuantityChange (operation) {
        cleanUpErrors()
        if (operation === 'substract' && props.modalQuantity === 1) {
            setQuantityErrorMessage("Can't buy less than a pair, mate.")
            setTimeout(cleanUpErrors, 4000)
        }
        if (operation === 'substract' && props.modalQuantity > 1) {props.setModalQuantity(props.modalQuantity-1)}
        if (operation === 'add' && props.modalQuantity === props.shoppingCartItem.item.stock) {
            setQuantityErrorMessage("Sorry mate, we don't have more stock of this one.")
            setTimeout(cleanUpErrors, 4000)
        }
        if (operation === 'add' && props.modalQuantity < props.shoppingCartItem.item.stock) {props.setModalQuantity(props.modalQuantity+1)}

    }

    function handleSizeSelection (size) {
        cleanUpErrors()
        size === props.modalSize ? props.setModalSize(null) : props.setModalSize(size)
    }

    // Function that saves the changes in quantity and sizes
    const handleSave = () => {
        if (!props.modalSize) {
            setSizeErrorMessage('Gotta pick a size for your shoes, mate.')
            setTimeout(cleanUpErrors, 4000)
        } else {
            props.shoppingCartItem.selectedQuantity = props.modalQuantity
            props.shoppingCartItem.selectedSize = props.modalSize
            props.setTotalPrice(context.addNumberThousandSeparator(context.shoppingCart.map(item => (item.item.price*item.selectedQuantity)).reduce((a, b) => a + b, 0)))
            props.onHide()
        }
    }

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size='lg'
        className='modal shoppingCartModal'
      >
        <Modal.Header className='modal-header'>
            <h1>{props.shoppingCartItem.item.brand} {props.shoppingCartItem.item.model}</h1>
            <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={props.onHide} />
        </Modal.Header>
        <Modal.Body className='modal-body'>

            <div className='quantityContainer'>
                <h2>Quantity:</h2>
                <div className='quantitySubContainer'>    
                    <btn className='operator' onClick={() => handleQuantityChange('substract')}>-</btn>
                    <p className='selectedQuantity'>{props.modalQuantity}</p>
                    <btn className='operator' onClick={() => handleQuantityChange('add')}>+</btn>
                </div>
                <p className={quantityErrorMessage ? 'errorMessage' : 'displayNone'}>{quantityErrorMessage}</p>
            </div>

            <div className='sizesContainer'>
                <h2>Sizes:</h2> 
                <div className='availableSizes'>
                    {props.shoppingCartItem.item.sizes.map(size => <p className={size === props.modalSize ? 'size selectedSize' : 'size'} onClick={() => handleSizeSelection(size)}>{size}</p>)}
                </div>
                <p className={sizeErrorMessage ? 'errorMessage' : 'displayNone'}>{sizeErrorMessage}</p> 
            </div>

        </Modal.Body>
        <Modal.Footer className='modal-footer' >
            <button className='btn-tertiary' onClick={props.onHide}>Cancel</button>
            <button className='btn-primary' onClick={()=> handleSave()}>Save changes</button>
        </Modal.Footer>
      </Modal>
    )
  }

export default ShoppingCartModal