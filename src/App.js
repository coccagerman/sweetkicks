import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Context from './components/Context';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Item from './components/Item';
import ShoppingCart from './components/ShoppingCart';
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

  function Product (id, brand, model, color, price, category, latestRelease, discount, stock, sizes, mainImage, images) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.category = category;
    this.latestRelease = latestRelease;
    this.discount = discount;
    this.stock = stock;
    this.sizes = sizes;
    this.mainImage = mainImage;
    this.images = images;
}

  const prodAdidas1 = new Product ("adidas1", "Adidas", "90s Valasion", "Blue", 10999, 'Running', true, 0, 2, [6.5, 8], 'products/adidas/adidas1/adidas1_1.jpeg', ['products/adidas/adidas1/adidas1_2.jpeg', 'products/adidas/adidas1/adidas1_3.jpeg', 'products/adidas/adidas1/adidas1_4.jpeg', 'products/adidas/adidas1/adidas1_5.jpeg']);
  const prodAdidas2 = new Product ("adidas2", "Adidas", "Chaos", "White", 8399, 'Tennis', false, 5, 5, [7, 7.5, 8, 8.5], 'products/adidas/adidas2/adidas2_1.jpeg', ['products/adidas/adidas2/adidas2_2.jpeg', 'products/adidas/adidas2/adidas2_3.jpeg', 'products/adidas/adidas2/adidas2_4.jpeg', 'products/adidas/adidas2/adidas2_5.jpeg', 'products/adidas/adidas2/adidas2_6.jpeg']);
  const prodAdidas3 = new Product ("adidas3", "Adidas", "Ultraboost Summer.RDY", "White", 21999, 'Running', false, 15, 1, [8], 'products/adidas/adidas3/adidas3_1.jpeg', ['products/adidas/adidas3/adidas3_2.jpeg', 'products/adidas/adidas3/adidas3_3.jpeg', 'products/adidas/adidas3/adidas3_4.jpeg', 'products/adidas/adidas3/adidas3_5.jpeg', 'products/adidas/adidas3/adidas3_6.jpeg', 'products/adidas/adidas3/adidas3_7.jpeg']);
  const prodAdidas4 = new Product ("adidas4", "Adidas", "Crazychaos", "White", 21999, 'Street', false, 0, 1, [7], 'products/adidas/adidas4/adidas4_1.jpeg', ['products/adidas/adidas4/adidas4_2.jpeg', 'products/adidas/adidas4/adidas4_3.jpeg', 'products/adidas/adidas4/adidas4_4.jpeg', 'products/adidas/adidas4/adidas4_5.jpeg']);
  const prodAdidas5 = new Product ("adidas5", "Adidas", "Crazychaos", "Blue", 21999, 'Street', false, 0, 6, [6, 7, 7.5, 8, 8.5], 'products/adidas/adidas5/adidas5_1.jpeg', ['products/adidas/adidas5/adidas5_2.jpeg', 'products/adidas/adidas5/adidas5_3.jpeg', 'products/adidas/adidas5/adidas5_4.jpeg']);
  const prodAdidas6 = new Product ("adidas6", "Adidas", "Energyfalcon", "Grey", 21999, 'Running', false, 0, 1, [6.5], 'products/adidas/adidas6/adidas6_1.jpeg', ['products/adidas/adidas6/adidas6_2.jpeg', 'products/adidas/adidas6/adidas6_3.jpeg', 'products/adidas/adidas6/adidas6_4.jpeg', 'products/adidas/adidas6/adidas6_5.jpeg']);
  const prodAdidas7 = new Product ("adidas7", "Adidas", "ORIGINALS ZX 2K BOOST", "Black", 21999, 'Street', true, 0, 1, [6], 'products/adidas/adidas7/adidas7_1.jpeg', ['products/adidas/adidas7/adidas7_2.jpeg', 'products/adidas/adidas7/adidas7_3.jpeg', 'products/adidas/adidas7/adidas7_4.jpeg', 'products/adidas/adidas7/adidas7_5.jpeg', 'products/adidas/adidas7/adidas7_6.jpeg']);
  const prodJordan1 = new Product ("jordan1", "Jordan", "Jumpman 2020", "Black", 13549, 'Basketball', true, 0, 3, [6.5, 8], 'products/jordan/jordan1/jordan1_1.jpeg', ['products/jordan/jordan1/jordan1_2.jpeg', 'products/jordan/jordan1/jordan1_3.jpeg', 'products/jordan/jordan1/jordan1_4.jpeg', 'products/jordan/jordan1/jordan1_5.jpeg', 'products/jordan/jordan1/jordan1_6.jpeg']);
  const prodJordan2 = new Product ("jordan2", "Jordan", "Westbrook One Take", "Grey", 15499, 'Basketball', false, 0, 3, [7.5, 8], 'products/jordan/jordan2/jordan2_1.jpeg', ['products/jordan/jordan2/jordan2_2.jpeg', 'products/jordan/jordan2/jordan2_3.jpeg', 'products/jordan/jordan2/jordan2_4.jpeg', 'products/jordan/jordan2/jordan2_5.jpeg']);
  const prodJordan3 = new Product ("jordan3", "Jordan", "AIR MAX 200", "White", 15499, 'Basketball', false, 0, 3, [8, 8.5], 'products/jordan/jordan3/jordan3_1.jpeg', ['products/jordan/jordan3/jordan3_2.jpeg', 'products/jordan/jordan3/jordan3_3.jpeg', 'products/jordan/jordan3/jordan3_4.jpeg', 'products/jordan/jordan3/jordan3_5.jpeg', 'products/jordan/jordan3/jordan3_6.jpeg', 'products/jordan/jordan3/jordan3_7.jpeg']);
  const prodJordan4 = new Product ("jordan4", "Jordan", "AIR MAX 200", "White", 15499, 'Basketball', false, 0, 4, [6, 6.5, 7], 'products/jordan/jordan4/jordan4_1.jpeg', ['products/jordan/jordan4/jordan4_2.jpeg', 'products/jordan/jordan4/jordan4_3.jpeg', 'products/jordan/jordan4/jordan4_4.jpeg', 'products/jordan/jordan4/jordan4_5.jpeg', 'products/jordan/jordan4/jordan4_6.jpeg']);
  const prodJordan5 = new Product ("jordan5", "Jordan", "AIR MAX 200", "Black", 15499, 'Basketball', false, 10, 5, [6, 7, 7.5, 8, 8.5], 'products/jordan/jordan5/jordan5_1.jpeg', ['products/jordan/jordan5/jordan5_2.jpeg', 'products/jordan/jordan5/jordan5_3.jpeg', 'products/jordan/jordan5/jordan5_4.jpeg', 'products/jordan/jordan5/jordan5_5.jpeg', 'products/jordan/jordan5/jordan5_6.jpeg']);
  const prodJordan6 = new Product ("jordan6", "Jordan", "AIR MAX 200", "Black", 15499, 'Basketball', false, 5, 2, [8, 8.5], 'products/jordan/jordan6/jordan6_1.jpeg', ['products/jordan/jordan6/jordan6_2.jpeg', 'products/jordan/jordan6/jordan6_3.jpeg', 'products/jordan/jordan6/jordan6_4.jpeg', 'products/jordan/jordan6/jordan6_5.jpeg', 'products/jordan/jordan6/jordan6_6.jpeg']);
  const prodJordan7 = new Product ("jordan7", "Jordan", "AIR MAX 200", "Black", 15499, 'Basketball', false, 0, 9, [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5], 'products/jordan/jordan7/jordan7_1.jpeg', ['products/jordan/jordan7/jordan7_2.jpeg', 'products/jordan/jordan7/jordan7_3.jpeg', 'products/jordan/jordan7/jordan7_4.jpeg', 'products/jordan/jordan7/jordan7_5.jpeg', 'products/jordan/jordan7/jordan7_6.jpeg']);
  const prodJordan8 = new Product ("jordan8", "Jordan", "MARS 270 LOW", "Black", 15499, 'Basketball', true, 0, 8, [8, 8.5], 'products/jordan/jordan8/jordan8_1.jpeg', ['products/jordan/jordan8/jordan8_2.jpeg', 'products/jordan/jordan8/jordan8_3.jpeg', 'products/jordan/jordan8/jordan8_4.jpeg', 'products/jordan/jordan8/jordan8_5.jpeg', 'products/jordan/jordan8/jordan8_6.jpeg']);
  const prodNike1 = new Product ("nike1", "Nike", "Air Zoom Pegasus 37", "White", 16999, 'Tennis', false, 5, 3, [8.5, 9, 9.5], 'products/nike/nike1/nike1_1.jpeg', ['products/nike/nike1/nike1_2.jpeg', 'products/nike/nike1/nike1_3.jpeg', 'products/nike/nike1/nike1_4.jpeg', 'products/nike/nike1/nike1_5.jpeg', 'products/nike/nike1/nike1_6.jpeg']);
  const prodNike2 = new Product ("nike2", "Nike", "Flex Control Tr4", "Black", 10499, 'Running', false, 0, 4, [6, 6.5, 8, 8.5], 'products/nike/nike2/nike2_1.jpeg', ['products/nike/nike2/nike2_2.jpeg', 'products/nike/nike2/nike2_3.jpeg', 'products/nike/nike2/nike2_4.jpeg', 'products/nike/nike2/nike2_5.jpeg', 'products/nike/nike2/nike2_6.jpeg', 'products/nike/nike2/nike2_7.jpeg', 'products/nike/nike2/nike2_8.jpeg']);
  const prodNike3 = new Product ("nike3", "Nike", "Air Max Oketo", "Grey", 11499, 'Street', false, 0, 10, [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5], 'products/nike/nike3/nike3_1.jpeg', ['products/nike/nike3/nike3_2.jpeg', 'products/nike/nike3/nike3_3.jpeg', 'products/nike/nike3/nike3_4.jpeg', 'products/nike/nike3/nike3_5.jpeg', 'products/nike/nike3/nike3_6.jpeg']);
  const prodNike4 = new Product ("nike4", "Nike", "Air Max Excee", "White", 13999, 'Street', true, 0, 8, [6, 6.5, 7, 7.5, 9, 9.5], 'products/nike/nike4/nike4_1.jpeg', ['products/nike/nike4/nike4_2.jpeg', 'products/nike/nike4/nike4_3.jpeg', 'products/nike/nike4/nike4_4.jpeg', 'products/nike/nike4/nike4_5.jpeg', 'products/nike/nike4/nike4_6.jpeg']);
  const prodNike5 = new Product ("nike5", "Nike", "Air Max Alpha Trainer 2", "Grey", 12999, 'Running', true, 0, 6, [7.5, 8, 8.5, 9, 9.5], 'products/nike/nike5/nike5_1.jpeg', ['products/nike/nike4/nike4_2.jpeg', 'products/nike/nike4/nike4_3.jpeg', 'products/nike/nike4/nike4_4.jpeg', 'products/nike/nike4/nike4_5.jpeg', 'products/nike/nike4/nike4_6.jpeg']);
  const prodNike6 = new Product ("nike6", "Nike", "NIGHTGAZER", "Black", 12999, 'Street', false, 0, 6, [6, 7.5, 8, 8.5, 9, 9.5], 'products/nike/nike6/nike6_1.jpeg', ['products/nike/nike6/nike6_2.jpeg', 'products/nike/nike6/nike6_3.jpeg', 'products/nike/nike6/nike6_4.jpeg']);
  const prodNike7 = new Product ("nike7", "Nike", "ZOOM WINFLO 6", "Black", 12999, 'Running', false, 10, 6, [6, 6.5, 7, 7.5, 8], 'products/nike/nike7/nike7_1.jpeg', ['products/nike/nike7/nike7_2.jpeg', 'products/nike/nike7/nike7_3.jpeg', 'products/nike/nike7/nike7_4.jpeg']);
  const prodNike8 = new Product ("nike8", "Nike", "Air Max Excee", "White", 15000, 'Street', false, 0, 6, [6, 6.5, 8, 8.5, 9, 9.5], 'products/nike/nike8/nike8_1.jpeg', ['products/nike/nike8/nike8_2.jpeg', 'products/nike/nike8/nike8_3.jpeg', 'products/nike/nike8/nike8_4.jpeg']);
  const prodNike9 = new Product ("nike9", "Nike", "Air Max Command Leather", "Grey", 12999, 'Street', false, 0, 2, [6, 8], 'products/nike/nike9/nike9_1.jpeg', ['products/nike/nike9/nike9_2.jpeg', 'products/nike/nike9/nike9_3.jpeg', 'products/nike/nike9/nike9_4.jpeg', 'products/nike/nike9/nike9_5.jpeg']);
  const prodNike10 = new Product ("nike10", "Nike", "Zoom Winflo 7", "Black", 19000, 'Tennis', false, 0, 6, [6, 6.5, 9, 9.5], 'products/nike/nike10/nike10_1.jpeg', ['products/nike/nike10/nike10_2.jpeg', 'products/nike/nike10/nike10_3.jpeg', 'products/nike/nike10/nike10_4.jpeg', 'products/nike/nike10/nike10_5.jpeg', 'products/nike/nike10/nike10_6.jpeg', 'products/nike/nike10/nike10_7.jpeg']);
  const prodNike11 = new Product ("nike11", "Nike", "Air Zoom Pegasus 36", "Blue", 12999, 'Tennis', false, 0, 3, [6, 6.5, 8], 'products/nike/nike11/nike11_1.jpeg', ['products/nike/nike11/nike11_2.jpeg', 'products/nike/nike11/nike11_3.jpeg', 'products/nike/nike11/nike11_4.jpeg', 'products/nike/nike11/nike11_5.jpeg', 'products/nike/nike11/nike11_6.jpeg']);
  const prodNike12 = new Product ("nike12", "Nike", "Air Zoom Pegasus 34", "Green", 13500, 'Running', true, 0, 6, [6, 6.5, 7, 7.5, 8, 8.5], 'products/nike/nike12/nike12_1.jpeg', ['products/nike/nike12/nike12_2.jpeg', 'products/nike/nike12/nike12_3.jpeg', 'products/nike/nike12/nike12_4.jpeg', 'products/nike/nike12/nike12_5.jpeg']);
  const prodNike13 = new Product ("nike13", "Nike", "AIR MAX COMMAND", "Black", 12999, 'Street', false, 0, 1, [6],'products/nike/nike13/nike13_1.jpeg', ['products/nike/nike13/nike13_2.jpeg', 'products/nike/nike13/nike13_3.jpeg']);
  const prodNike14 = new Product ("nike14", "Nike", "AIR MAX 2090", "White", 14900, 'Street', false, 0, 6, [6, 6.5, 7, 8.5], 'products/nike/nike14/nike14_1.jpeg', ['products/nike/nike14/nike14_2.jpeg', 'products/nike/nike14/nike14_3.jpeg', 'products/nike/nike14/nike14_4.jpeg', 'products/nike/nike14/nike14_5.jpeg']);
  const prodNike15 = new Product ("nike15", "Nike", "AIR MAX 200", "Black", 12999, 'Street', false, 0, 6, [7.5, 8, 8.5], 'products/nike/nike15/nike15_1.jpeg', ['products/nike/nike15/nike15_2.jpeg', 'products/nike/nike15/nike15_3.jpeg', 'products/nike/nike15/nike15_4.jpeg', 'products/nike/nike15/nike15_5.jpeg']);
  const prodNike16 = new Product ("nike16", "Nike", "AIR MAX 95", "Grey", 12300, 'Street', false, 5, 5, [6, 8, 8.5], 'products/nike/nike16/nike16_1.jpeg', ['products/nike/nike16/nike16_2.jpeg', 'products/nike/nike16/nike16_3.jpeg', 'products/nike/nike16/nike16_4.jpeg', 'products/nike/nike16/nike16_5.jpeg', 'products/nike/nike16/nike16_6.jpeg']);
  const prodNike17 = new Product ("nike17", "Nike", "AIR MAX TAILWIND IV", "Blue", 18700, 'Street', true, 0, 7, [6, 6.5, 7, 7.5, 8, 8.5, 9], 'products/nike/nike17/nike17_1.jpeg', ['products/nike/nike17/nike17_2.jpeg', 'products/nike/nike17/nike17_3.jpeg', 'products/nike/nike17/nike17_4.jpeg', 'products/nike/nike17/nike17_5.jpeg', 'products/nike/nike17/nike17_6.jpeg', 'products/nike/nike17/nike17_7.jpeg']);
  const prodNike18 = new Product ("nike18", "Nike", "AIR MAX ZM950", "Grey", 12999, 'Street', false, 0, 6, [6, 6.5, 7, 7.5, 8, 8.5], 'products/nike/nike18/nike18_1.jpeg', ['products/nike/nike18/nike18_2.jpeg', 'products/nike/nike18/nike18_3.jpeg', 'products/nike/nike18/nike18_4.jpeg', 'products/nike/nike18/nike18_5.jpeg']);
  const prodNike19 = new Product ("nike19", "Nike", "AIR MAX ZM950", "Black", 11000, 'Street', false, 15, 8, [6, 6.5, 7, 7.5, 8, 8.5, 9], 'products/nike/nike19/nike19_1.jpeg', ['products/nike/nike19/nike19_2.jpeg', 'products/nike/nike19/nike19_3.jpeg', 'products/nike/nike19/nike19_4.jpeg', 'products/nike/nike19/nike19_5.jpeg']);
  const prodNike20 = new Product ("nike20", "Nike", "AIR MAX 97", "Grey", 12999, 'Street', false, 0, 6, [6, 6.5, 8, 8.5], 'products/nike/nike20/nike20_1.jpeg', ['products/nike/nike20/nike20_2.jpeg', 'products/nike/nike20/nike20_3.jpeg']);
  const prodNike21 = new Product ("nike21", "Nike", "REACT ELEMENT 55 SE", "Grey", 14200, 'Street', true, 0, 6, [7.5, 8, 8.5], 'products/nike/nike21/nike21_1.jpeg', ['products/nike/nike21/nike21_2.jpeg', 'products/nike/nike21/nike21_3.jpeg', 'products/nike/nike21/nike21_4.jpeg', 'products/nike/nike21/nike21_5.jpeg']);
  const prodNike22 = new Product ("nike22", "Nike", "AIR FORCE 1 '07 WORLDWIDE", "Black", 12999, 'Street', false, 0, 12, [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5], 'products/nike/nike22/nike22_1.jpeg', ['products/nike/nike22/nike22_2.jpeg', 'products/nike/nike22/nike22_3.jpeg']);
  const prodNike23 = new Product ("nike23", "Nike", "AIR FORCE 1 REACT", "Black", 13100, 'Street', false, 0, 11, [6, 6.5, 7, 7.5, 8, 8.5], 'products/nike/nike23/nike23_1.jpeg', ['products/nike/nike23/nike23_2.jpeg', 'products/nike/nike23/nike23_3.jpeg']);
  const prodPuma1 = new Product ("puma1", "Puma", "Vista", "Blue", 6999, 'Street', false, 0, 3, [6, 6.5], 'products/puma/puma1/puma1_1.jpeg', ['products/puma/puma1/puma1_2.jpeg', 'products/puma/puma1/puma1_3.jpeg', 'products/puma/puma1/puma1_4.jpeg', 'products/puma/puma1/puma1_5.jpeg', 'products/puma/puma1/puma1_6.jpeg']);
  const prodPuma2 = new Product ("puma2", "Puma", "Smash V2", "White", 6399, 'Street', true, 0, 4, [6, 6.5, 7, 7.5], 'products/puma/puma2/puma2_1.jpeg', ['products/puma/puma2/puma2_2.jpeg', 'products/puma/puma2/puma2_3.jpeg', 'products/puma/puma2/puma2_4.jpeg']);
  const prodPuma3 = new Product ("puma3", "Puma", "Jaro Knit", "Blue", 6699, 'Running', false, 0, 1, [8.5],'products/puma/puma3/puma3_1.jpeg', ['products/puma/puma3/puma3_2.jpeg', 'products/puma/puma3/puma3_3.jpeg', 'products/puma/puma3/puma3_4.jpeg', 'products/puma/puma3/puma3_5.jpeg', 'products/puma/puma3/puma3_6.jpeg', 'products/puma/puma3/puma3_7.jpeg']);
  const prodPuma4 = new Product ("puma4", "Puma", "Provoke XT Untamed", "Blue", 11999, 'Street', false, 0, 1, [6],'products/puma/puma4/puma4_1.jpeg', ['products/puma/puma4/puma4_2.jpeg', 'products/puma/puma4/puma4_3.jpeg', 'products/puma/puma4/puma4_4.jpeg']);
  const prodPuma5 = new Product ("puma5", "Puma", "MAPM X RAY", "Black", 9299, 'Street', false, 5, 5, [6, 7.5, 8, 8.5], 'products/puma/puma5/puma5_1.jpeg', ['products/puma/puma5/puma5_2.jpeg', 'products/puma/puma5/puma5_3.jpeg', 'products/puma/puma5/puma5_4.jpeg']);
  const prodPuma6 = new Product ("puma6", "Puma", "RS-FAST TECH", "Black", 9299, 'Tennis', false, 0, 6, [6, 6.5, 8.5], 'products/puma/puma6/puma6_1.jpeg', ['products/puma/puma6/puma6_2.jpeg', 'products/puma/puma6/puma6_3.jpeg', 'products/puma/puma6/puma6_4.jpeg', 'products/puma/puma6/puma6_5.jpeg']);
  const prodPuma7 = new Product ("puma7", "Puma", "RS-X MIX", "Grey", 9299, 'Tennis', true, 0, 4, [6, 6.5, 7, 7.5, 8], 'products/puma/puma7/puma7_1.jpeg', ['products/puma/puma7/puma7_2.jpeg', 'products/puma/puma7/puma7_3.jpeg', 'products/puma/puma7/puma7_4.jpeg', 'products/puma/puma7/puma7_5.jpeg']);
  const prodReebok1 = new Product ("reebok1", "Reebok", "Royal EC Ride 4.0", "Grey", 7699, 'Tennis', false, 5, 5, [6, 6.5, 7.5, 8, 8.5], 'products/reebok/reebok1/reebok1_1.jpeg', ['products/reebok/reebok1/reebok1_2.jpeg', 'products/reebok/reebok1/reebok1_3.jpeg', 'products/reebok/reebok1/reebok1_4.jpeg', 'products/reebok/reebok1/reebok1_5.jpeg', 'products/reebok/reebok1/reebok1_6.jpeg']);
  const prodReebok2 = new Product ("reebok2", "Reebok", "Royal Turbo Impulse 2.0", "Black", 8999, 'Tennis', false, 0, 6, [6, 6.5, 7, 7.5, 8, 8.5], 'products/reebok/reebok2/reebok2_1.jpeg' , ['products/reebok/reebok2/reebok2_2.jpeg', 'products/reebok/reebok2/reebok2_3.jpeg', 'products/reebok/reebok2/reebok2_4.jpeg', 'products/reebok/reebok2/reebok2_5.jpeg']);
  const prodReebok3 = new Product ("reebok3", "Reebok", "Royal Turbo Impulse 2.0", "White", 8999, 'Tennis', false, 0, 5, [6, 6.5, 7.5, 8.5], 'products/reebok/reebok3/reebok3_1.jpeg', ['products/reebok/reebok3/reebok3_2.jpeg', 'products/reebok/reebok3/reebok3_3.jpeg', 'products/reebok/reebok3/reebok3_4.jpeg', 'products/reebok/reebok3/reebok3_5.jpeg']);
  const prodReebok4 = new Product ("reebok4", "Reebok", "Sublite Prime 2.0", "Black", 8499, 'Running', true, 0, 3, [6, 6.5, 8.5], 'products/reebok/reebok4/reebok4_1.jpeg', ['products/reebok/reebok4/reebok4_2.jpeg', 'products/reebok/reebok4/reebok4_3.jpeg', 'products/reebok/reebok4/reebok4_4.jpeg', 'products/reebok/reebok4/reebok4_5.jpeg', 'products/reebok/reebok4/reebok4_6.jpeg']);
  const prodReebok5 = new Product ("reebok5", "Reebok", "Royal Techque T", "White", 7999, 'Street', false, 0, 3, [6, 6.5, 7, ], 'products/reebok/reebok5/reebok5_1.jpeg', ['products/reebok/reebok5/reebok5_2.jpeg', 'products/reebok/reebok5/reebok5_3.jpeg', 'products/reebok/reebok5/reebok5_4.jpeg', 'products/reebok/reebok5/reebok5_5.jpeg']);
  const prodUnderArmour1 = new Product ("underArmour1", "Under Armour", "Forge 96", "Grey", 11689, 'Running', false, 0, 2, [7.5], 'products/underArmour/underArmour1/underArmour1_1.jpeg', ['products/underArmour/underArmour1/underArmour1_2.jpeg', 'products/underArmour/underArmour1/underArmour1_3.jpeg', 'products/underArmour/underArmour1/underArmour1_4.jpeg', 'products/underArmour/underArmour1/underArmour1_5.jpeg']);
  const prodUnderArmour2 = new Product ("underArmour2", "Under Armour", "Charged Pursuit 2", "Red", 9799, 'Running', false, 10, 3, [7, 7.5], 'products/underArmour/underArmour2/underArmour2_1.jpeg', ['products/underArmour/underArmour2/underArmour2_2.jpeg', 'products/underArmour/underArmour2/underArmour2_3.jpeg', 'products/underArmour/underArmour2/underArmour2_4.jpeg', 'products/underArmour/underArmour2/underArmour2_5.jpeg']);

  const productsDataBase = [prodAdidas1, prodAdidas2, prodAdidas3, prodAdidas4, prodAdidas5, prodAdidas6, prodAdidas7, prodJordan1, prodJordan2, prodJordan3, prodJordan4, prodJordan5, prodJordan6, prodJordan7, prodJordan8, prodNike1, prodNike2, prodNike3, prodNike4, prodNike5, prodNike6, prodNike7, prodNike8, prodNike9, prodNike10, prodNike11, prodNike12, prodNike13, prodNike14, prodNike15, prodNike16, prodNike17, prodNike18, prodNike19, prodNike20, prodNike21, prodNike22, prodNike23, prodPuma1, prodPuma2, prodPuma3, prodPuma4, prodPuma5, prodPuma6, prodPuma7, prodReebok1, prodReebok2, prodReebok3, prodReebok4, prodReebok5, prodUnderArmour1, prodUnderArmour2]
  
  // hook used to store the array of products that will be shown in the gallery
  const [productsArray, setProductsArray] = useState (productsDataBase)
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // hook used to store the array of products that will be shown in the gallery
  const [wishList, setwishList] = useState ([])
  
  return (
    <div className={darkMode === false ? 'lightMode' : 'darkMode'}>
        <Router>

          <Context.Provider value={{wishList, setwishList}} >

            <Header setDarkMode={setDarkMode} darkMode={darkMode} wishListcounter={wishListcounter} productsDataBase={productsDataBase} setProductsArray={setProductsArray} />

            <Switch>
              <Route path='/' exact>
                <Hero darkMode={darkMode} productsDataBase={productsDataBase} setProductsArray={setProductsArray} />
              </Route>

              <Route path='/gallery'>
                <Gallery darkMode={darkMode} productsDataBase={productsDataBase} productsArray={productsArray} setProductsArray={setProductsArray} wishListcounter={wishListcounter} setwishListcounter={setwishListcounter}/>
              </Route>

              <Route path='/item'>
                <Item  />
              </Route>

              <Route path='/shoppingcart'>
                <ShoppingCart />
              </Route>

              <Route path='/wishlist'>
                <Wishlist wishListcounter={wishListcounter} />
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
