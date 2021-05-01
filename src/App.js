import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Wishlist from './components/Wishlist';
import About from './components/About';
import Footer from './components/Footer';
import './App.scss';

function App() {

  // Hook used to track the dark mode state
  const [darkMode,setDarkMode] = useState(false);

  // Hook used to show the number of items stored on the wish list
  const [wishListcounter, setwishListcounter] = useState(0)

  // Products database
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function Product (id, brand, model, color, price, cattegory, latestRelease, discount, stock, imgUrl) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.cattegory = cattegory;
    this.latestRelease = latestRelease;
    this.discount = discount;
    this.stock = stock;
    this.imgUrl = imgUrl;
}

  const prodAdidas1 = new Product ("adidas1", "Adidas", "90s Valasion", "Blue", 10999, 'Running', true, 0, 2, 'products/adidas/adidas1/adidas1_1.jpeg');
  const prodAdidas2 = new Product ("adidas2", "Adidas", "Chaos", "White", 8399, 'Tennis', false, 5, 5, 'products/adidas/adidas2/adidas2_1.jpeg');
  const prodAdidas3 = new Product ("adidas3", "Adidas", "Ultraboost Summer.RDY", "White", 21999, 'Running', false, 15, 1, 'products/adidas/adidas3/adidas3_1.jpeg');
  const prodAdidas4 = new Product ("adidas4", "Adidas", "Crazychaos", "White", 21999, 'Street', false, 0, 1, 'products/adidas/adidas4/adidas4_1.jpeg');
  const prodAdidas5 = new Product ("adidas5", "Adidas", "Crazychaos", "Blue", 21999, 'Street', false, 0, 1, 'products/adidas/adidas5/adidas5_1.jpeg');
  const prodAdidas6 = new Product ("adidas6", "Adidas", "Energyfalcon", "Grey", 21999, 'Running', false, 0, 1, 'products/adidas/adidas6/adidas6_1.jpeg');
  const prodAdidas7 = new Product ("adidas7", "Adidas", "ORIGINALS ZX 2K BOOST", "Black", 21999, 'Street', true, 0, 1, 'products/adidas/adidas7/adidas7_1.jpeg');
  const prodJordan1 = new Product ("jordan1", "Jordan", "Jumpman 2020", "Black", 13549, 'Basketball', true, 0, 3, 'products/jordan/jordan1/jordan1_1.jpeg');
  const prodJordan2 = new Product ("jordan2", "Jordan", "Westbrook One Take", "Grey", 15499, 'Basketball', false, 0, 3, 'products/jordan/jordan2/jordan2_1.jpeg');
  const prodJordan3 = new Product ("jordan3", "Jordan", "AIR MAX 200", "White", 15499, 'Basketball', false, 0, 3, 'products/jordan/jordan3/jordan3_1.jpeg');
  const prodJordan4 = new Product ("jordan4", "Jordan", "AIR MAX 200", "White", 15499, 'Basketball', false, 0, 3, 'products/jordan/jordan4/jordan4_1.jpeg');
  const prodJordan5 = new Product ("jordan5", "Jordan", "AIR MAX 200", "Black", 15499, 'Basketball', false, 10, 3, 'products/jordan/jordan5/jordan5_1.jpeg');
  const prodJordan6 = new Product ("jordan6", "Jordan", "AIR MAX 200", "Black", 15499, 'Basketball', false, 5, 3, 'products/jordan/jordan6/jordan6_1.jpeg');
  const prodJordan7 = new Product ("jordan7", "Jordan", "AIR MAX 200", "Black", 15499, 'Basketball', false, 0, 3, 'products/jordan/jordan7/jordan7_1.jpeg');
  const prodJordan8 = new Product ("jordan8", "Jordan", "MARS 270 LOW", "Black", 15499, 'Basketball', true, 0, 3, 'products/jordan/jordan8/jordan8_1.jpeg');
  const prodNike1 = new Product ("nike1", "Nike", "Air Zoom Pegasus 37 FlyEase", "White", 16999, 'Tennis', false, 5, 3, 'products/nike/nike1/nike1_1.jpeg');
  const prodNike2 = new Product ("nike2", "Nike", "Nike Flex Control Tr4", "Black", 10499, 'Running', false, 0, 4, 'products/nike/nike2/nike2_1.jpeg');
  const prodNike3 = new Product ("nike3", "Nike", "Air Max Oketo", "Grey", 11499, 'Street', false, 0, 10, 'products/nike/nike3/nike3_1.jpeg');
  const prodNike4 = new Product ("nike4", "Nike", "Air Max Excee", "White", 13999, 'Street', true, 0, 8, 'products/nike/nike4/nike4_1.jpeg');
  const prodNike5 = new Product ("nike5", "Nike", "Air Max Alpha Trainer 2", "Grey", 12.999, 'Running', true, 0, 6, 'products/nike/nike5/nike5_1.jpeg');
  const prodNike6 = new Product ("nike6", "Nike", "NIGHTGAZER", "Black", 12.999, 'Street', false, 0, 6, 'products/nike/nike6/nike6_1.jpeg');
  const prodNike7 = new Product ("nike7", "Nike", "ZOOM WINFLO 6", "Black", 12.999, 'Running', false, 10, 6, 'products/nike/nike7/nike7_1.jpeg');
  const prodNike8 = new Product ("nike8", "Nike", "Air Max Excee", "White", 12.999, 'Street', false, 0, 6, 'products/nike/nike8/nike8_1.jpeg');
  const prodNike9 = new Product ("nike9", "Nike", "Air Max Command Leather", "Grey", 12.999, 'Street', false, 0, 6, 'products/nike/nike9/nike9_1.jpeg');
  const prodNike10 = new Product ("nike10", "Nike", "Zoom Winflo 7", "Black", 12.999, 'Tennis', false, 0, 6, 'products/nike/nike10/nike10_1.jpeg');
  const prodNike11 = new Product ("nike11", "Nike", "Air Zoom Pegasus 36", "Blue", 12.999, 'Tennis', false, 0, 6, 'products/nike/nike11/nike11_1.jpeg');
  const prodNike12 = new Product ("nike12", "Nike", "Air Zoom Pegasus 34", "Green", 12.999, 'Running', true, 0, 6, 'products/nike/nike12/nike12_1.jpeg');
  const prodNike13 = new Product ("nike13", "Nike", "AIR MAX COMMAND", "Black", 12.999, 'Street', false, 0, 6, 'products/nike/nike13/nike13_1.jpeg');
  const prodNike14 = new Product ("nike14", "Nike", "AIR MAX 2090", "White", 12.999, 'Street', false, 0, 6, 'products/nike/nike14/nike14_1.jpeg');
  const prodNike15 = new Product ("nike15", "Nike", "AIR MAX 200", "Black", 12.999, 'Street', false, 0, 6, 'products/nike/nike15/nike15_1.jpeg');
  const prodNike16 = new Product ("nike16", "Nike", "AIR MAX 95", "Grey", 12.999, 'Street', false, 5, 6, 'products/nike/nike16/nike16_1.jpeg');
  const prodNike17 = new Product ("nike17", "Nike", "AIR MAX TAILWIND IV", "Blue", 12.999, 'Street', true, 0, 6, 'products/nike/nike17/nike17_1.jpeg');
  const prodNike18 = new Product ("nike18", "Nike", "AIR MAX ZM950", "Grey", 12.999, 'Street', false, 0, 6, 'products/nike/nike18/nike18_1.jpeg');
  const prodNike19 = new Product ("nike19", "Nike", "AIR MAX ZM950", "Black", 12.999, 'Street', false, 15, 6, 'products/nike/nike19/nike19_1.jpeg');
  const prodNike20 = new Product ("nike20", "Nike", "AIR MAX 97", "Grey", 12.999, 'Street', false, 0, 6, 'products/nike/nike20/nike20_1.jpeg');
  const prodNike21 = new Product ("nike21", "Nike", "REACT ELEMENT 55 SE", "Grey", 12.999, 'Street', true, 0, 6, 'products/nike/nike21/nike21_1.jpeg');
  const prodNike22 = new Product ("nike22", "Nike", "AIR FORCE 1 '07 WORLDWIDE", "Black", 12.999, 'Street', false, 0, 6, 'products/nike/nike22/nike22_1.jpeg');
  const prodNike23 = new Product ("nike23", "Nike", "AIR FORCE 1 REACT", "Black", 12.999, 'Street', false, 0, 6, 'products/nike/nike23/nike23_1.jpeg');
  const prodPuma1 = new Product ("puma1", "Puma", "Vista", "Blue", 6999, 'Street', false, 0, 3, 'products/puma/puma1/puma1_1.jpeg');
  const prodPuma2 = new Product ("puma2", "Puma", "Smash V2", "White", 6399, 'Street', true, 0, 4, 'products/puma/puma2/puma2_1.jpeg');
  const prodPuma3 = new Product ("puma3", "Puma", "Jaro Knit", "Blue", 6699, 'Running', false, 0, 1, 'products/puma/puma3/puma3_1.jpeg');
  const prodPuma4 = new Product ("puma4", "Puma", "Provoke XT Untamed", "Blue", 11999, 'Street', false, 0, 1, 'products/puma/puma4/puma4_1.jpeg');
  const prodPuma5 = new Product ("puma5", "Puma", "MAPM X RAY", "Black", 9299, 'Street', false, 5, 1, 'products/puma/puma5/puma5_1.jpeg');
  const prodPuma6 = new Product ("puma6", "Puma", "RS-FAST TECH", "Black", 9299, 'Tennis', false, 0, 1, 'products/puma/puma6/puma6_1.jpeg');
  const prodPuma7 = new Product ("puma7", "Puma", "RS-X MIX", "Grey", 9299, 'Tennis', true, 0, 1, 'products/puma/puma7/puma7_1.jpeg');
  const prodReebok1 = new Product ("reebok1", "Reebok", "Royal EC Ride 4.0", "Grey", 7699, 'Tennis', false, 5, 5, 'products/reebok/reebok1/reebok1_1.jpeg');
  const prodReebok2 = new Product ("reebok2", "Reebok", "Royal Turbo Impulse 2.0", "Black", 8999, 'Tennis', false, 0, 6, 'products/reebok/reebok2/reebok2_1.jpeg');
  const prodReebok3 = new Product ("reebok3", "Reebok", "Royal Turbo Impulse 2.0", "White", 8999, 'Tennis', false, 0, 5, 'products/reebok/reebok3/reebok3_1.jpeg');
  const prodReebok4 = new Product ("reebok4", "Reebok", "Sublite Prime 2.0", "Black", 8499, 'Running', true, 0, 0, 'products/reebok/reebok4/reebok4_1.jpeg');
  const prodReebok5 = new Product ("reebok5", "Reebok", "Royal Techque T", "White", 7999, 'Street', false, 0, 3, 'products/reebok/reebok5/reebok5_1.jpeg');
  const prodUnderArmour1 = new Product ("underArmour1", "Under Armour", "Forge 96", "Grey", 11689, ' Running', false, 0, 2, 'products/underArmour/underArmour1/underArmour1_1.jpeg');
  const prodUnderArmour2 = new Product ("underArmour2", "Under Armour", "Charged Pursuit 2", "Red", 9799, ' Running', false, 10, 3, 'products/underArmour/underArmour2/underArmour2_1.jpeg');

  const productsDataBase = [prodAdidas1, prodAdidas2, prodAdidas3, prodAdidas4, prodAdidas5, prodAdidas6, prodAdidas7, prodJordan1, prodJordan2, prodJordan3, prodJordan4, prodJordan5, prodJordan6, prodJordan7, prodJordan8, prodNike1, prodNike2, prodNike3, prodNike4, prodNike5, prodNike6, prodNike7, prodNike8, prodNike9, prodNike10, prodNike11, prodNike12, prodNike13, prodNike14, prodNike15, prodNike16, prodNike17, prodNike18, prodNike19, prodNike20, prodNike21, prodNike22, prodNike23, prodPuma1, prodPuma2, prodPuma3, prodPuma4, prodPuma5, prodPuma6, prodPuma7, prodReebok1, prodReebok2, prodReebok3, prodReebok4, prodReebok5, prodUnderArmour1, prodUnderArmour2]
  
  // hook used to store the array of products that will be shown in the gallery
  const [productsArray, setProductsArray] = useState (productsDataBase)
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className={darkMode === false ? 'lightMode' : 'darkMode'}>
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} wishListcounter={wishListcounter} productsDataBase={productsDataBase} setProductsArray={setProductsArray} />
          <Switch>
            <Route path='/' exact>
              <Hero darkMode={darkMode} productsDataBase={productsDataBase} setProductsArray={setProductsArray} />
            </Route>
            <Route path='/gallery'>
              <Gallery darkMode={darkMode} productsDataBase={productsDataBase} productsArray={productsArray} setProductsArray={setProductsArray} wishListcounter={wishListcounter} setwishListcounter={setwishListcounter}/>
            </Route>
            <Route path='/wishlist'>
              <Wishlist wishListcounter={wishListcounter} />
            </Route>
            <Route path='/about'>
              <About productsDataBase={productsDataBase} setProductsArray={setProductsArray} />
            </Route>
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
