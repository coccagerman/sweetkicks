import { useContext } from 'react';
import Context from '../../Context';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import ShoppingCartItem from '../Wishlist&ShoppingCart/ShoppingCart/ShoppingCartItem'

function Checkout () {
    
    // Hook used to access context
    const context = useContext(Context)

    // Function that displays the items in the shopping cart
    const showShoppingCartItem = () => context.shoppingCart.map((item) => (
        <ShoppingCartItem shoppingCartItem={item} item={item.item} mainImage={`/${item.item.mainImage}`} />
        )
    )

    return (
        <>
        <section className='checkout'>
        <h1>Just a few more steps and the kicks are yours!</h1>
            <div className='containersContainer'>
                <div className='showShoppingContainer'>
                    {showShoppingCartItem()}
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