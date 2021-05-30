import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Context from './Context';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import Item from './components/Item/Item';
import ShoppingCart from './components/Wishlist&ShoppingCart/ShoppingCart/ShoppingCart';
import Wishlist from './components/Wishlist&ShoppingCart/Wishlist/Wishlist';
import Checkout from './components/Checkout/Checkout';
import MyOrders from './components/MyOrders/MyOrders';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import productsDataBase from './ProductsDB';
import './App.scss';

function App() {

  // Hook used to track the dark mode state
  const [darkMode,setDarkMode] = useState(false)

  // Hook used to store the array of products that will be shown in the gallery
  const [productsArray, setProductsArray] = useState (productsDataBase)

  // Regex used to insert thousand separator in prices
  function addNumberThousandSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  // Hook that stores the product search parameters
  const [searchParams, setSearchParams] = useState([])

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

  // Hooks that stores and update the wishlist, shopping cart and orders in local storage
  useEffect(() => {localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))}, [shoppingCart])
  useEffect(() => {localStorage.setItem('wishList', JSON.stringify(wishList))}, [wishList])
  useEffect(() => {localStorage.setItem('orders', JSON.stringify(orders))}, [orders])

  // Function used to identify items that were added to the wishlist
  function findInWishlist (id) {
    for (let i = 0; i < wishList.length; i++) {
      if (wishList[i].id === id) {
          return true
      }
    }
  }

  return (
    <div className={darkMode === false ? 'lightMode' : 'darkMode'}>
        <Router>

          <Context.Provider value={{ wishList: wishList, wishlistAdd: wishlistAdd, wishlistSubstract: wishlistSubstract, shoppingCart: shoppingCart, shoppingCartAdd: shoppingCartAdd, shoppingCartSubstract: shoppingCartSubstract, emptyShoppingCart: emptyShoppingCart, ordersAdd: ordersAdd, ordersErase: ordersErase, addNumberThousandSeparator: addNumberThousandSeparator, findInWishlist: findInWishlist, searchParams: searchParams, setSearchParams: setSearchParams }}>

            <Header setDarkMode={setDarkMode} darkMode={darkMode} productsDataBase={productsDataBase} setProductsArray={setProductsArray} />

            <Switch>
              <Route path='/' exact>
                <Hero darkMode={darkMode} productsDataBase={productsDataBase} setProductsArray={setProductsArray} />
              </Route>

              <Route path='/gallery'>
                <Gallery darkMode={darkMode} productsDataBase={productsDataBase} productsArray={productsArray} setProductsArray={setProductsArray} />
              </Route>

              <Route path='/item/:itemId'>
                <Item  productsDataBase={productsDataBase} />
              </Route>

              <Route path='/shoppingcart'>
                <ShoppingCart />
              </Route>

              <Route path='/wishlist'>
                <Wishlist />
              </Route>

              <Route path='/checkout'>
                <Checkout />
              </Route>

              <Route path='/orders'>
                <MyOrders orders={orders} />
              </Route>

              <Route path='/about'>
                <About productsDataBase={productsDataBase} setProductsArray={setProductsArray} />
              </Route>
            </Switch>

            <Footer />

          </Context.Provider>

        </Router>
    </div>
  );
}

export default App;
