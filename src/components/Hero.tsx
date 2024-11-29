import React from 'react';
import { ArrowRight, Target, Clock, CheckCircle, Users, Zap, BarChart2, Mail, DollarSign, TrendingUp, Percent } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      title: "High-Quality, Niche-Targeted Email Lists",
      benefit: "Reach an audience that's already primed for your offer.",
      impact: "Save time and boost conversions by reaching potential customers who are ready to engage.",
      icon: <Mail />
    },
    {
      title: "Guaranteed Clicks on Your Offer",
      benefit: "Assures traffic and exposure for your business.",
      impact: "Eliminates guesswork and ensures you're paying only for real results.",
      icon: <Target />
    },
    {
      title: "Quick Setup and Campaign Launch",
      benefit: "Start receiving traffic within days, not weeks.",
      impact: "Generate leads fast without complex setup, so you can start seeing results sooner.",
      icon: <Clock />
    },
    {
      title: "Expert Guidance on Ad Copy and Targeting",
      benefit: "Receive tips for high-converting ad copy tailored to your audience.",
      impact: "Maximizes ROI as your ads resonate with the needs and interests of your target market.",
      icon: <Users />
    },
    {
      title: "Flexible Pricing and Traffic Packages",
      benefit: "Choose the right package for your budget and goals.",
      impact: "Scale your campaign as you grow, with control over spending.",
      icon: <DollarSign />
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264305-7e2764da873b?auto=format&fit=crop&q=80')] opacity-10 bg-center bg-cover" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-16">
          <p className="text-primary-500 font-semibold mb-4">
            Attention Entrepreneurs, Affiliate Marketers, and Small Business Owners Struggling to Drive Consistent Traffic!
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Unlock <span className="text-primary-500">High-Quality</span>, Targeted Traffic That Converts
            <span className="block text-2xl md:text-3xl mt-4 text-primary-400">
              See Results in Just Days Without Paid Ads or Content Hassles
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our Curated Solo Ad Service Brings You Ready-to-Buy Leads from Pre-Vetted Email Lists,
            Delivering Real Clicks and Rapid Results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={scrollToPricing}
              className="flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <span>Start Your Campaign</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollToPricing}
              className="text-gray-300 hover:text-white transition-colors px-8 py-4 cursor-pointer"
            >
              View Pricing
            </button>
          </div>

          <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto mb-16 text-left">
            <h2 className="text-2xl font-bold text-white mb-6">
              Tired of Wasting Money on Traffic That Doesn't Convert?
            </h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              You've spent countless hours trying to crack the code for generating leads and sales. 
              Paid ad platforms feel too expensive and complicated. Content marketing takes too long 
              to see results. Sound familiar?
            </p>
            <p className="text-gray-300 font-semibold text-lg mb-8">
              Here's the truth: The problem isn't you – it's your traffic source. That's where we come in.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Who We Help:</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Are you an entrepreneur, affiliate marketer, or small business owner looking for a reliable, 
              fast way to drive traffic and generate leads online? Our solo ad service is designed specifically 
              for you – especially if you're new to digital marketing or need an alternative to complex, 
              costly paid ad platforms.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              Your Solution for Fast, High-Quality Traffic That Converts
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Imagine having a steady stream of targeted traffic directed to your offer – without spending 
              hours learning ad platforms or creating content. Our solo ads connect you with potential 
              customers already interested in your niche, delivering real clicks and conversions without 
              the headaches of traditional ads.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Our Solo Ads Are the Smart Choice for Growing Your Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300 text-left">
                <div className="flex items-center mb-4">
                  <div className="text-primary-500 mr-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-semibold block">Benefit:</span> 
                    <span className="block pl-4">{benefit.benefit}</span>
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold block">Impact:</span> 
                    <span className="block pl-4">{benefit.impact}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto text-left mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              How We Discovered the Power of Targeted Solo Ads
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              After years of struggling to find reliable traffic sources and seeing low returns from 
              generic paid ads, we finally found a breakthrough. A single solo ad campaign generated 
              500 leads almost overnight, proving the impact of targeted, curated email lists. This 
              success inspired us to create a streamlined solo ad service to help entrepreneurs achieve 
              rapid, reliable results without the high costs or complexity of traditional platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-900/50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-primary-500 mr-3" />
                  <h3 className="text-xl font-bold text-white">4200% ROI</h3>
                </div>
                <p className="text-gray-300">
                  Email marketing boasts an impressive ROI of up to 4200%, making it one of the most 
                  profitable digital marketing strategies available.
                </p>
              </div>
              <div className="bg-dark-900/50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Percent className="w-8 h-8 text-primary-500 mr-3" />
                  <h3 className="text-xl font-bold text-white">40% Opt-in Rate</h3>
                </div>
                <p className="text-gray-300">
                  Properly targeted solo ads can achieve opt-in rates of up to 40% when paired with 
                  a compelling offer and strong ad copy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}