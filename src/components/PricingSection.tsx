import React from 'react';
import PricingCard from './PricingCard';

const pricingPlans = [
  { 
    clicks: 100,
    price: 40,
    deliveryTime: '48 hours',
    features: [
      'Guaranteed unique visitors',
      'Real-time tracking dashboard',
      'Basic analytics report',
      'Email list targeting',
      '24/7 support access'
    ]
  },
  { 
    clicks: 200,
    price: 80,
    deliveryTime: '48 hours',
    features: [
      'Guaranteed unique visitors',
      'Real-time tracking dashboard',
      'Detailed analytics report',
      'Premium email list targeting',
      '24/7 priority support'
    ]
  },
  { 
    clicks: 300,
    price: 120,
    deliveryTime: '48 hours',
    isPopular: true,
    features: [
      'Guaranteed unique visitors',
      'Real-time tracking dashboard',
      'Comprehensive analytics',
      'Premium email list targeting',
      '24/7 VIP support'
    ]
  },
  { 
    clicks: 500,
    price: 200,
    deliveryTime: '48 hours',
    features: [
      'Guaranteed unique visitors',
      'Real-time tracking dashboard',
      'Comprehensive analytics',
      'Premium email list targeting',
      '24/7 VIP support'
    ]
  },
  { 
    clicks: 1000,
    price: 400,
    deliveryTime: '72 hours',
    features: [
      'Guaranteed unique visitors',
      'Real-time tracking dashboard',
      'Comprehensive analytics',
      'Premium email list targeting',
      '24/7 VIP support'
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-800" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Traffic Package
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select the perfect package for your needs. All plans include our premium features
            and guaranteed delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="text-center bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-400 mb-6">
            Looking for larger volumes or specialized targeting? We offer tailored packages
            to meet your specific requirements.
          </p>
          <a 
            href="mailto:support@jasonrszova.com"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Contact us for custom solutions
          </a>
        </div>
      </div>
    </section>
  );
}