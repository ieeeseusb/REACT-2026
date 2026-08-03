import React from 'react';
import { ExternalLink, Mail, Sparkles } from 'lucide-react';
import { PARTNERS, EVENT_DETAILS } from '../data/eventData';
import { DriveImage } from './DriveImage';

interface PartnersSectionProps {
  onOpenPartnerInquiry: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = () => {

  return (
    <section id="partners" className="py-20 bg-white text-gray-900 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#FF7700] text-xs font-black uppercase tracking-[0.2em] mb-2">
            Sponsors & Supporters
          </h2>
          <h1 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tighter">
            Event <span className="text-[#FF7700]">Partners</span>
          </h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-base italic leading-relaxed">
            Proudly collaborating with industry-leading technical evaluation partners, technology corporations, and media portals powering REACT 2026.
          </p>
          <div className="h-1 w-20 bg-[#FF7700] mx-auto mt-4" />
        </div>

        {/* Partners Grid */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
          {PARTNERS.map((partner, idx) => (
            <div
              key={partner.id}
              className={`bg-gray-50 p-6 sm:p-8 rounded-2xl border-y border-r border-gray-200 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md ${
                idx % 2 === 0 ? 'border-l-4 border-[#FF7700]' : 'border-l-4 border-black'
              }`}
            >
              <div>
                {/* Logo & Category Header */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
                  <div className="h-20 sm:h-24 px-2 bg-white rounded-xl flex items-center justify-center gap-2 overflow-hidden border border-gray-100 shadow-sm">
                    <div className="h-16 sm:h-20 w-24 sm:w-28 flex items-center justify-center">
                      <DriveImage
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                        fallbackText={partner.name}
                      />
                    </div>
                    {partner.secondaryLogo && (
                      <>
                        <span className="text-gray-300 font-bold text-xs select-none">+</span>
                        <div className="h-16 sm:h-20 w-24 sm:w-28 flex items-center justify-center">
                          <DriveImage
                            src={partner.secondaryLogo}
                            alt={partner.secondaryName || "Secondary Logo"}
                            className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                            fallbackText={partner.secondaryName || "Shohoj Skills"}
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] font-black uppercase tracking-wider text-black">
                      {partner.name}
                    </div>
                    <div className="text-[9px] text-[#FF7700] font-black uppercase tracking-widest mt-0.5">
                      {partner.type}
                    </div>
                  </div>
                </div>

                {/* Partner Name & Description */}
                <h3 className="text-lg font-black text-black uppercase mb-2 group-hover:text-[#FF7700] transition-colors">
                  {partner.name}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  {partner.description}
                </p>
              </div>

              {/* External Link */}
              {partner.websiteUrl && (
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-black hover:text-[#FF7700] transition-colors"
                  >
                    Official Portal
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Become a Partner Callout Box */}
        <div className="mt-16 bg-gradient-to-r from-black via-gray-900 to-black rounded-3xl p-8 text-white text-center border-2 border-[#FF7700]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF7700]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7700] text-white text-xs font-black uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Sponsorship Opportunities
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Interested in Partnering with REACT 2026?
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Showcase your brand before 1,000+ top engineering candidates, innovators, and university faculty across Bangladesh.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="px-6 py-3.5 rounded-xl bg-[#FF7700] text-white font-mono font-bold text-sm tracking-wide shadow-lg shadow-[#FF7700]/30 inline-flex items-center gap-2.5">
                <Mail className="w-4 h-4" />
                <span className="select-all">{EVENT_DETAILS.contactEmail}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
