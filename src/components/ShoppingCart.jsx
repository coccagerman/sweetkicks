import { useContext, useEffect } from 'react';
import Context from './Context';
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCart () {

    // Hook used to access wishlist and modify it
    const {shoppingCart, setShoppingCart} = useContext(Context)

    // Function that displays the items in the wishlist 
    const showShoppingCartItem = () => shoppingCart.map((item) => (
        <ShoppingCartItem item={item} brand={item.brand} model={item.model} price={item.price} mainImage={item.mainImage} />
        )
    )
    
    useEffect(() => {
        showShoppingCartItem()
    }, [shoppingCart])

    return (
        <section className='shoppingCart'>
            {shoppingCart.length === 0 ? 'Sorry mate, you have no items in your shopping cart yet.' : showShoppingCartItem()}
            <p>Total items: {shoppingCart.length}</p>
            <p>Total price: </p>
        </section>
    )
}

export default ShoppingCart