import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import About from './components/About'; // Uncomment to display the About section
import Products from './components/Products';
import Services from './components/Services';
import Future from './components/Future';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Products />
      <Services />
      <Future />
      <Footer />
    </>
  );
}

export default App;