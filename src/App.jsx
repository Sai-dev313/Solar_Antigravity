import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="relative min-h-screen bg-white max-w-[430px] w-full shadow-2xl">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Community />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
