import { useState } from 'react'
import Context from '../Context'

export default function ContextProvider({children}) {

    // Hooks that store the arrays of products in the wishlist, shopping cart and orders
    const [wishList, setwishList] = useState (JSON.parse(localStorage.getItem('wishList')) || [])
    const [shoppingCart, setShoppingCart] = useState (JSON.parse(localStorage.getItem('shoppingCart')) || [])
    const [orders, setOrders] = useState (JSON.parse(localStorage.getItem('orders')) || [])

    // Functions used to add and substract items from the wishlist, shopping cart and orders
    const wishlistAdd = (itemToAdd) => setwishList([...wishList, itemToAdd])
    const wishlistSubstract = (itemToSubstract) => setwishList(wishList.filter(item => (item !== itemToSubstract)))
    const shoppingCartAdd = (item) => setShoppingCart([...shoppingCart, item])
    const shoppingCartSubstract = (itemToSubstract) => setShoppingCart(shoppingCart.filter(item => (item !== itemToSubstract)))
    const emptyShoppingCart = () => setShoppingCart([])
    const ordersAdd = (itemToAdd) => setOrders([...orders, itemToAdd])
    const ordersErase = () => setOrders([])

    // Hook that stores the product search parameters
    const [searchParams, setSearchParams] = useState([])

    // Regex used to insert thousand separator in prices
    function addNumberThousandSeparator(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }

    // Function used to identify items that were added to the wishlist
    function findInWishlist (id) {
        for (let i = 0; i < wishList.length; i++) {
            if (wishList[i].id === id) { return true }
        }
    }

    return (
            <Context.Provider 
            value={{ wishList: wishList, wishlistAdd: wishlistAdd, wishlistSubstract: wishlistSubstract, shoppingCart: shoppingCart, shoppingCartAdd: shoppingCartAdd, shoppingCartSubstract: shoppingCartSubstract, emptyShoppingCart: emptyShoppingCart, orders: orders, ordersAdd: ordersAdd, ordersErase: ordersErase, addNumberThousandSeparator: addNumberThousandSeparator, findInWishlist: findInWishlist, searchParams: searchParams, setSearchParams: setSearchParams }} >
                {children}
            </Context.Provider>

    )
}