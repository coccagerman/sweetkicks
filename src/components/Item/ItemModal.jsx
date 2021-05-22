import Modal from 'react-bootstrap/Modal'
import { Icon } from '@iconify/react';
import cancelIcon from '@iconify-icons/topcoat/cancel';
import { Link } from "react-router-dom";

function ItemModal (props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size='lg'
        className='modal'
      >
        <Modal.Header className='modal-header'>
            <Icon className='icon eliminate-icon' icon={cancelIcon} onClick={props.onHide} />
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <p className='modal-text'>{props.modalContent === 'itemAdded' ? 'The product was added to your shopping cart.' : 'The product is already in your shopping cart, if you wish to delete it go to your shopping cart.'}</p>
        </Modal.Body>
        <Modal.Footer className='modal-footer' >
            <Link to='/gallery'><button className='btn-tertiary' onClick={props.onHide}>Go to gallery</button></Link>
            <Link to='/shoppingcart'><button className='btn-secondary' onClick={props.onHide}>Go to shopping cart</button></Link>
            <Link to='/checkout/personalDataFormStep'><button className='btn-primary' onClick={props.onHide}>Go to checkout</button></Link>
        </Modal.Footer>
      </Modal>
    );
  }

export default ItemModal