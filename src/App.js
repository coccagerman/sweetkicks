import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.scss';

function App() {

  // Hook used to track the dark mode state
  const [darkMode,setDarkMode] = useState(false);

  // Products database
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function Product (id, brand, model, color, price, stock, imgUrl) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.stock = stock;
    this.imgUrl = imgUrl;
}

  const prodAdidas1 = new Product ("adidas1", "Adidas", "90s Valasion", "Blue", 10999, 2, '../assets/products/adidas/adidas1/adidas1_1.jpeg');
  const prodAdidas2 = new Product ("adidas2", "Adidas", "Chaos", "White", 8399, 5, '../assets/products/adidas/adidas2/adidas2_1.jpeg');
  const prodAdidas3 = new Product ("adidas3", "Adidas", "Ultraboost Summer.RDY", "White", 21999, 1, '../assets/products/adidas/adidas3/adidas3_1.jpeg');
  const prodJordan1 = new Product ("jordan1", "Jordan", "Jumpman 2020", "Black", 13549, 3, '../assets/products/jordan/jordan1/jordan1_1.jpeg');
  const prodJordan2 = new Product ("jordan2", "Jordan", "Westbrook One Take", "Grey", 15499, 3, '../assets/products/jordan/jordan2/jordan2_1.jpeg');
  const prodNike1 = new Product ("nike1", "Nike", "Air Zoom Pegasus 37 FlyEase", "White", 16999, 3, '../assets/products/nike/nike1/nike1_1.jpeg');
  const prodNike2 = new Product ("nike2", "Nike", "Nike Flex Control Tr4", "Black", 10499, 4, '../assets/products/nike/nike2/nike2_1.jpeg');
  const prodNike3 = new Product ("nike3", "Nike", "Air Max Oketo", "Grey", 11499, 10, '../assets/products/nike/nike3/nike3_1.jpeg');
  const prodNike4 = new Product ("nike4", "Nike", "Air Max Excee", "White", 13999, 8, '../assets/products/nike/nike4/nike4_1.jpeg');
  const prodNike5 = new Product ("nike5", "Nike", "Air Max Alpha Trainer 2", "Grey", 12.999, 6, '../assets/products/nike/nike5/nike5_1.jpeg');
  const prodPuma1 = new Product ("puma1", "Puma", "Vista", "Blue", 6999, 3, '../assets/products/puma/puma1/puma1_1.jpeg');
  const prodPuma2 = new Product ("puma2", "Puma", "Smash V2", "White", 6399, 4, '../assets/products/puma/puma2/puma2_1.jpeg');
  const prodPuma3 = new Product ("puma3", "Puma", "Jaro Knit", "Blue", 6699, 1, '../assets/products/puma/puma3/puma3_1.jpeg');
  const prodReebok1 = new Product ("reebok1", "Reebok", "Royal EC Ride 4.0", "Grey", 7699, 5, '../assets/products/reebok/reebok1/reebok1_1.jpeg');
  const prodReebok2 = new Product ("reebok2", "Reebok", "Royal Turbo Impulse 2.0", "Black", 8999, 6, '../assets/products/reebok/reebok2/reebok2_1.jpeg');
  const prodReebok3 = new Product ("reebok3", "Reebok", "Royal Turbo Impulse 2.0", "White", 8999, 5, '../assets/products/reebok/reebok3/reebok3_1.jpeg');
  const prodReebok4 = new Product ("reebok4", "Reebok", "Sublite Prime 2.0", "Black", 8499, 10, '../assets/products/reebok/reebok4/reebok4_1.jpeg');
  const prodReebok5 = new Product ("reebok5", "Reebok", "Royal Techque T", "White", 7999, 3, '../assets/products/reebok/reebok5/reebok5_1.jpeg');
  const prodUnderArmour1 = new Product ("underArmour1", "Under Armour", "Forge 96", "Grey", 11689, 2, '../assets/products/underArmour/underArmour1/underArmour1_1.jpeg');
  const prodUnderArmour2 = new Product ("underArmour2", "Under Armour", "Charged Pursuit 2", "Red", 9799, 3, '../assets/products/underArmour/underArmour2/underArmour2_1.jpeg');

  const productsArray = [prodAdidas1, prodAdidas2, prodAdidas3, prodJordan1, prodJordan2, prodNike1, prodNike2, prodNike3, prodNike4, prodNike5, prodPuma1, prodPuma2, prodPuma3, prodReebok1, prodReebok2, prodReebok3, prodReebok4, prodReebok5, prodUnderArmour1, prodUnderArmour2]
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className={darkMode === false ? 'lightMode' : 'darkMode'}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Hero darkMode={darkMode} />
      <Gallery darkMode={darkMode} productsArray={productsArray} />
      <Footer />
    </div>
  );
}

export default App;
