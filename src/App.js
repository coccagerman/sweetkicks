import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom"
import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Gallery from './components/Gallery/Gallery'
import Item from './components/Item/Item'
import ShoppingCart from './components/Wishlist&ShoppingCart/ShoppingCart/ShoppingCart'
import Wishlist from './components/Wishlist&ShoppingCart/Wishlist/Wishlist'
import Checkout from './components/Checkout/Checkout'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import productsDataBase from './ProductsDB'
import ContextProvider from './provider/ContextProvider'
import './App.scss'

export default function App() {

  // Hook used to track the dark mode state
  const [darkMode,setDarkMode] = useState(false)

  // Hook used to store the array of products that will be shown in the gallery
  const [productsArray, setProductsArray] = useState (productsDataBase)

  return (
    <div className={darkMode === false ? 'lightMode' : 'darkMode'}>
        <Router>

          <ContextProvider >

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

              <Route path='/about'>
                <About productsDataBase={productsDataBase} setProductsArray={setProductsArray} />
              </Route>
            </Switch>

            <Footer />

          </ContextProvider>

        </Router>
    </div>
  )
}
