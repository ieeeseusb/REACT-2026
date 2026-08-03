import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { FAQS } from '../data/eventData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = FAQS.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="py-20 bg-gray-50 text-gray-900 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#FF7700] text-xs font-black uppercase tracking-[0.2em] mb-2">
            Help Center & Queries
          </h2>
          <h1 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tighter">
            Frequently Asked <span className="text-[#FF7700]">Questions</span>
          </h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-base italic leading-relaxed">
            Everything you need to know about REACT 2026 registration, segment rules, fees, and campus logistics.
          </p>
          <div className="h-1 w-20 bg-[#FF7700] mx-auto mt-4" />
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search questions (e.g., fee, team size, certificate)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300 text-xs font-bold text-black placeholder-gray-400 focus:outline-none focus:border-[#FF7700] uppercase tracking-wider transition-all"
          />
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`bg-white border-y border-r border-gray-200 transition-all duration-200 ${
                  isOpen ? 'border-l-4 border-[#FF7700] bg-gray-50' : 'border-l-4 border-black'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-black uppercase text-xs sm:text-sm text-black hover:text-[#FF7700] transition-colors"
                >
                  <span className="pr-2">{faq.question}</span>
                  <span className={`p-1 ${isOpen ? 'bg-[#FF7700] text-white' : 'bg-black text-white'} shrink-0`}>
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0 text-gray-700 text-xs sm:text-sm leading-relaxed border-t border-gray-200 italic mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-white rounded-2xl border border-gray-200">
              <p className="text-gray-500 font-semibold text-sm">
                No matching questions found for "{searchQuery}". Contact us via WhatsApp for instant support!
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
