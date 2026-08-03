import React from 'react';
import { ExternalLink } from 'lucide-react';
import { COLLABORATORS } from '../data/eventData';
import { DriveImage } from './DriveImage';

export const CollaboratorsSection: React.FC = () => {
  return (
    <section id="collaborators" className="py-20 bg-gray-50 text-gray-900 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#FF7700] text-xs font-black uppercase tracking-[0.2em] mb-2">
            Institutional Support & Chapters
          </h2>
          <h1 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tighter">
            Event <span className="text-[#FF7700]">Collaborators</span>
          </h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-base italic leading-relaxed">
            Supported by premier IEEE professional sections and affinity groups.
          </p>
          <div className="h-1 w-20 bg-[#FF7700] mx-auto mt-4" />
        </div>

        {/* Collaborators Grid */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
          {COLLABORATORS.map((collab, idx) => (
            <div
              key={collab.id}
              className={`bg-white p-6 sm:p-8 rounded-2xl border-y border-r border-gray-200 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl ${
                idx % 2 === 0 ? 'border-l-4 border-black' : 'border-l-4 border-[#FF7700]'
              }`}
            >
              <div>
                {/* Logo & Category Header */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div className="h-20 sm:h-24 w-32 sm:w-40 bg-white p-1 flex items-center justify-center overflow-hidden rounded-xl">
                    <DriveImage
                      src={collab.logo}
                      alt={collab.name}
                      className="w-full h-full object-contain filter group-hover:scale-105 transition-transform"
                      fallbackText={collab.name}
                    />
                  </div>

                  <span className="px-2.5 py-1 bg-gray-100 text-gray-900 text-[10px] font-black uppercase tracking-wider border border-gray-200 rounded-md">
                    {collab.type}
                  </span>
                </div>

                {/* Collaborator Name & Description */}
                <h3 className="text-lg font-black text-black uppercase mb-2 group-hover:text-[#FF7700] transition-colors leading-snug">
                  {collab.name}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  {collab.description}
                </p>
              </div>

              {/* Link */}
              {collab.link && (
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={collab.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-black hover:text-[#FF7700] transition-colors"
                  >
                    View Official Portal
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
