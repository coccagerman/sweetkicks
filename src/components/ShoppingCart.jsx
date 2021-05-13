import { useContext, useEffect, useState } from 'react';
import Context from './Context';
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCart () {

    // Hook used to access wishlist and modify it
    const context = useContext(Context);

    return (
        <section className='shoppingCart'>
            {/* {contextFunctions.shoppingCart.length === 0 ? 'Sorry mate, you have no items in your shopping cart yet.' : showShoppingCartItem()} */}
            {/* <p>Total items: {contextFunctions.shoppingCart.length}</p> */}
            <p>Total price: </p>
        </section>
    )
}

export default ShoppingCart