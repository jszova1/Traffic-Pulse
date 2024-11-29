import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What's included in each package?",
    answer: "Each package includes guaranteed unique visitors, real-time tracking through ClickMagick™, detailed analytics, targeted email list distribution, and 24/7 support access. After delivering all your clicks, you'll receive a comprehensive report showing detailed metrics and performance data."
  },
  {
    question: "How quickly will I see results?",
    answer: "Traffic starts flowing within 24 hours of campaign approval, with complete delivery based on your package size (24-72 hours)."
  },
  {
    question: "Can I scale my campaign later?",
    answer: "Absolutely! You can upgrade your package or purchase additional clicks at any time. We offer seamless scaling options."
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 100% satisfaction guarantee. If we fail to deliver the promised clicks within the specified timeframe, you'll receive a full refund."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-dark-900" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}