import { useContext } from 'react';
import Context from '../../Context';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import ShoppingCartItem from '../Wishlist&ShoppingCart/ShoppingCart/ShoppingCartItem'

function Checkout () {
    
    // Hook used to access context
    const context = useContext(Context)

    return (
        <>
        <section className='checkout'>
        <h1>Just a few more steps and the kicks are yours!</h1>
            <div className='containersContainer'>
                <div className='showShoppingContainer'>
                    {context.shoppingCart.map(item => <ShoppingCartItem key={item.item.id} shoppingCartItem={item} />)}
                </div>
                <div className='checkoutFormContainer'>
                    <CheckoutForm />
                </div>
            </div>
        </section>
        </>
    )
}

export default Checkout