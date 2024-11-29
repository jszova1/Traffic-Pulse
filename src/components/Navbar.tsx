import React from 'react';
import { Activity } from 'lucide-react';

export default function Navbar() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-dark-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-white">Traffic Pulse</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={scrollToPricing}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}