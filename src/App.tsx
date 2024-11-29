import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main className="relative">
        <Hero />
        <PricingSection />
        <FAQ />
      </main>
    </div>
  );
}

export default App;