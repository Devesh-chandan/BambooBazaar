import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import About from './components/About'; // Uncomment to display the About section
import Products from './components/Products';
import ProductSlider from './components/ProductSlider'; // Using the slider
import Future from './components/Future';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import ContactModal from './components/ContactModal'; // <-- 1. IMPORT NEW COMPONENT

// A list of quotes to display
const quotes = [
  { text: "The Earth is what we all have in common.", author: "Wendell Berry" },
  { text: "Look deep into nature, and then you will understand everything better.", author: "Albert Einstein" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "We do not inherit the Earth from our ancestors; we borrow it from our children.", author: "Native American Proverb" },
  { text: "Sustainability is no longer about doing less harm. It's about doing more good.", author: "Jochen Zeitz" }
];

function App() {
  // State for Quote Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  // --- 2. ADD NEW STATE FOR CONTACT MODAL ---
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Handlers for Quote Modal
  const handleGetQuote = () => {
    let newQuote = currentQuote;
    while (newQuote === currentQuote) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[randomIndex];
    }
    setCurrentQuote(newQuote);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  // --- 3. ADD NEW HANDLERS FOR CONTACT MODAL ---
  const handleOpenContactModal = () => setIsContactModalOpen(true);
  const handleCloseContactModal = () => setIsContactModalOpen(false);
  
  return (
    <>
      {/* --- 4. PASS NEW HANDLER TO NAVBAR --- */}
      <Navbar 
        onGetQuoteClick={handleGetQuote} 
        onContactClick={handleOpenContactModal} 
      />
      
      <Hero />
      {/* <About /> */}
      <Products />
      <ProductSlider /> 
      <Future />
      <Footer />
      
      {/* Render the Quote Modal */}
      <QuoteModal 
        isOpen={isModalOpen} 
        quote={currentQuote} 
        onClose={handleCloseModal} 
      />
      
      {/* --- 5. RENDER THE NEW CONTACT MODAL --- */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleCloseContactModal} 
      />
    </>
  );
}

export default App;