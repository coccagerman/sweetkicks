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
            {context.shoppingCart.length !== 0 ?
                <>
                    <h1>Buy and walk your dreams.</h1>
                    {showShoppingCartItem()}
                    <div>
                        <p>Total items: {context.shoppingCart.length}</p>
                        <p>Total price: </p>
                        <button>Check out</button>
                        <button>Keep buying</button>
                        <button>Empty cart</button>
                    </div>
                </> : 
                <h1>Sorry mate, you have no items in your shopping cart yet.</h1>
            }
        </section>
    )
}

export default ShoppingCart