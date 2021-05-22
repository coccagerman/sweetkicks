import { useContext } from 'react';
import Context from '../../Context';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import ShoppingCartItem from '../Wishlist&ShoppingCart/ShoppingCart/ShoppingCartItem'

function Checkout () {
    
    // Hook used to access context
    const context = useContext(Context)

    // Function that displays the items in the shopping cart
    const showShoppingCartItem = () => context.shoppingCart.map((item) => (
        <ShoppingCartItem shoppingCartItem={item} item={item.item} brand={item.item.brand} model={item.item.model} price={item.item.price} mainImage={`/${item.item.mainImage}`} quantity={item.quantity} size={item.size}/>
        )
    )

    return (
        <>
        <h1>Im the Checkout</h1>
        <section className='checkout'>
            <div className='showShoppingContainer'>
                {showShoppingCartItem()}
                <div className='details'>
                    <p>Total items: {context.shoppingCart.length}</p>
                    <p>Total price: ${context.addNumberThousandSeparator(context.shoppingCart.map((item) => (item.item.price*item.quantity)).reduce((a, b) => a + b, 0))}</p>
                </div>
            </div>
            <div className='checkoutFormContainer'>
                <CheckoutForm />
            </div>
        </section>
        </>
    )
}

export default Checkout