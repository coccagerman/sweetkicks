import Modal from 'react-bootstrap/Modal'
import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import { useContext, useState } from 'react';
import Context from '../../../Context';


function ShoppingCartModal (props) {

    // Hook used to access context
    const context = useContext(Context)
    // Hooks used to re render component with quantity changes
    const [state, setState] = useState (0)

    // Functions that execute when the user selects item quantity and size
    function handleQuantityChange (operation) {
        cleanUpErrors()
        if (operation === 'substract' && props.shoppingCartItem.selectedQuantity === 1) { setQuantityErrorMessage("You can't buy less than a pair, mate.") }
        if (operation === 'substract' && props.shoppingCartItem.selectedQuantity > 1) {
            props.shoppingCartItem.selectedQuantity-=1
            setState(state-1)
        }
        if (operation === 'add' && props.shoppingCartItem.selectedQuantity === props.shoppingCartItem.item.stock) { setStockErrorMessage('Sorry mate, we dont have more stock of this one.') }
        if (operation === 'add' && props.shoppingCartItem.selectedQuantity < props.shoppingCartItem.item.stock) {
            props.shoppingCartItem.selectedQuantity+=1
            setState(state+1)
        }
    }

    function handleSizeSelection (size) {
        cleanUpErrors()
        if (size === props.shoppingCartItem.selectedSize) {
            props.shoppingCartItem.selectedSize = null
            setState(state-1)
        } else {
            props.shoppingCartItem.selectedSize = size
            setState(state+1)
        }
        console.log(props.shoppingCartItem.selectedSize)
    }

    // Hooks used to display quantity, stock and size errors
    const [quantityErrorMessage, setQuantityErrorMessage] = useState (null)
    const [stockErrorMessage, setStockErrorMessage] = useState (null)
    const [sizeErrorMessage, setSizeErrorMessage] = useState (null)
    
    function cleanUpErrors() {
        setQuantityErrorMessage(null)
        setStockErrorMessage(null)
        setSizeErrorMessage(null)
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
                    <p className='selectedQuantity'>{props.shoppingCartItem.selectedQuantity}</p>
                    <btn className='operator' onClick={() => handleQuantityChange('add')}>+</btn>
                </div>
                <p className={quantityErrorMessage || stockErrorMessage ? 'errorMessage' : 'displayNone'}>{quantityErrorMessage}{stockErrorMessage}</p>
            </div>

            <div className='sizesContainer'>
                <h2>Sizes:</h2> 
                <div className='availableSizes'>
                    {props.shoppingCartItem.item.sizes.map(size => <p className={size === props.shoppingCartItem.selectedSize ? 'size selectedSize' : 'size'} onClick={() => handleSizeSelection(size)}>{size}</p>)}
                    <p className={sizeErrorMessage ? 'errorMessage' : 'displayNone'}>{sizeErrorMessage}</p> 
                </div>
            </div>

        </Modal.Body>
        <Modal.Footer className='modal-footer' >
            <button className='btn-tertiary' onClick={props.onHide}>Cancel</button>
            <button className='btn-primary' onClick={props.onHide}>Save changes</button>
        </Modal.Footer>
      </Modal>
    )
  }

export default ShoppingCartModal