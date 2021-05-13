import { useContext } from 'react';
import Context from './Context';
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCart () {

    // Hook used to access wishlist and modify it
    const context = useContext(Context)

    // Function that displays the items in the shopping cart
    const showShoppingCartItem = () => context.shoppingCart.map((item) => (
        <ShoppingCartItem item={item} brand={item.brand} model={item.model} price={item.price} mainImage={item.mainImage} />
        )
    )

    return (
        <section className='shoppingCart'>
            {context.shoppingCart.length === 0 ? 'Sorry mate, you have no items in your shopping cart yet.' : showShoppingCartItem()}
            {context.shoppingCart.length !== 0 ? <p>Total items: {context.shoppingCart.length}</p> : null}
            <p>Total price: </p>
        </section>
    )
}

export default ShoppingCart