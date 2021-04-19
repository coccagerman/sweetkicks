import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.scss';

function App() {

  // Hook used to track the dark mode state
  const [darkMode,setDarkMode] = useState(false);

  return (
    <div className={darkMode === false ? 'lightMode' : 'darkMode'}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Hero darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
