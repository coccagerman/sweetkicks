import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Context from './Context';
import { useState } from 'react';
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

  // hook used to store the array of products that will be shown in the gallery
  const [productsArray, setProductsArray] = useState (productsDataBase)

  // Regex used to insert thousand separator in prices
  function addNumberThousandSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  // hook that stores the product search parameters
  const [searchParams, setSearchParams] = useState([])

  // hooks used to store the arrays of products in the wishlist and shopping cart
  const [wishList, setwishList] = useState ([])
  const [shoppingCart, setShoppingCart] = useState ([])

  // functions used to add and substract items from the wishlist and shopping cart
  const wishlistAdd = (itemToAdd) => setwishList([...wishList, itemToAdd])
  const wishlistSubstract = (itemToSubstract) => setwishList(wishList.filter(item => (item !== itemToSubstract)))
  const shoppingCartAdd = (item) => setShoppingCart([...shoppingCart, item])
  const shoppingCartSubstract = (itemToSubstract) => setShoppingCart(shoppingCart.filter(item => (item !== itemToSubstract)))
  const emptyShoppingCart = () => setShoppingCart([])

  // Hooks used to store the shoe size and quantity selected
  const [selectedSize, setSelectedSize] = useState (null)
  const [selectedQuantity, setSelectedQuantity] = useState (1)

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

          <Context.Provider value={{ wishList: wishList, wishlistAdd: wishlistAdd, wishlistSubstract: wishlistSubstract, shoppingCart: shoppingCart, shoppingCartAdd: shoppingCartAdd, shoppingCartSubstract: shoppingCartSubstract, emptyShoppingCart: emptyShoppingCart, addNumberThousandSeparator: addNumberThousandSeparator, findInWishlist: findInWishlist, searchParams: searchParams, setSearchParams: setSearchParams, selectedSize: selectedSize, setSelectedSize: setSelectedSize, selectedQuantity: selectedQuantity, setSelectedQuantity: setSelectedQuantity }}>

            <Header setDarkMode={setDarkMode} darkMode={darkMode} productsDataBase={productsDataBase} setProductsArray={setProductsArray} />

            <Switch>
              <Route path='/' exact>
                <Hero darkMode={darkMode} productsDataBase={productsDataBase} setProductsArray={setProductsArray} />
              </Route>

              <Route path='/gallery'>
                <Gallery darkMode={darkMode} productsDataBase={productsDataBase} productsArray={productsArray} setProductsArray={setProductsArray} />
              </Route>

              <Route path='/item'>
                <Item  />
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
                <MyOrders />
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
