import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  clicks: number;
  price: number;
  deliveryTime: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ clicks, price, deliveryTime, features, isPopular }: PricingCardProps) {
  return (
    <div className={`relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl ${
      isPopular ? 'ring-2 ring-primary-500 scale-105' : ''
    }`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{clicks.toLocaleString()} Clicks</h3>
        <p className="text-4xl font-bold text-white mb-4">
          ${price}
          <span className="text-lg text-gray-300 font-normal">/campaign</span>
        </p>
        <p className="text-gray-300">Delivery within {deliveryTime}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
        isPopular
          ? 'bg-primary-600 text-white hover:bg-primary-700'
          : 'bg-dark-700 text-white hover:bg-dark-600'
      }`}>
        Get Started
      </button>
    </div>
  );
}