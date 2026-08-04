import React, { useState } from 'react';
import { Trophy, BookOpen, ArrowRight, ChevronDown, Tag, ExternalLink, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SEGMENTS } from '../data/eventData';
import { Segment } from '../types';
import { DriveImage } from './DriveImage';

interface SegmentsSectionProps {
  onOpenRegister: (segmentId: string, subCategory?: string) => void;
  onOpenRulesModal: (segment: Segment) => void;
}

export const SegmentsSection: React.FC<SegmentsSectionProps> = ({
  onOpenRegister,
  onOpenRulesModal
}) => {
  const [expandedId, setExpandedId] = useState<string | null>('soccer-bot');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section id="segments" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[#FF7700] text-xs font-black uppercase tracking-[0.2em] mb-2">
            The Initiative • 05 Tracks
          </h2>
          <h1 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tighter">
            Competition <span className="text-[#FF7700]">Segments</span>
          </h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed italic">
            Click on any segment bar below to toggle event details, prizes, eligibility, and registration options.
          </p>
          <div className="h-1 w-20 bg-[#FF7700] mx-auto mt-4" />
        </div>

        {/* Parallel Segment Bars Stack */}
        <div className="space-y-4">
          {SEGMENTS.map((segment, index) => {
            const isExpanded = expandedId === segment.id;
            const isProjectShowcase = segment.id === 'project-showcase';

            return (
              <div
                key={segment.id}
                className="bg-white border-y border-r border-gray-300 shadow-sm transition-all overflow-hidden border-l-4 border-[#FF7700] rounded-r-lg"
              >
                {/* Bar Header (Clickable Accordion Bar) */}
                <button
                  onClick={() => toggleExpand(segment.id)}
                  className={`w-full p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left transition-colors cursor-pointer ${
                    isExpanded ? 'bg-black text-white' : 'bg-white text-gray-900 hover:bg-gray-100/90'
                  }`}
                >
                  {/* Left Title & Number */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className={`text-xs font-black tracking-widest px-2.5 py-1 rounded ${
                      isExpanded ? 'bg-[#FF7700] text-white' : 'bg-gray-200 text-gray-800'
                    }`}>
                      0{index + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={`text-lg sm:text-xl font-black uppercase tracking-tight ${
                          isExpanded ? 'text-white' : 'text-black'
                        }`}>
                          {segment.title}
                        </h3>
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                          segment.eligibility.includes('University Only')
                            ? 'bg-amber-500 text-black'
                            : 'bg-emerald-600 text-white'
                        }`}>
                          {segment.eligibility}
                        </span>
                        {segment.techPartner && (
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${
                            isExpanded ? 'bg-gray-800 text-[#FF7700] border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-200'
                          }`}>
                            Partner: {segment.techPartner.name}
                          </span>
                        )}
                      </div>
                      <span className={`text-xs italic ${isExpanded ? 'text-gray-400' : 'text-gray-500'}`}>
                        {segment.category}
                      </span>
                    </div>
                  </div>

                  {/* Right Badges & Toggle Arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 pt-2 md:pt-0 border-t md:border-t-0 border-gray-200/20">
                    <div className="flex items-center gap-2 text-xs">
                      <span className={`font-bold px-2.5 py-1 rounded border text-[11px] uppercase ${
                        isExpanded
                          ? 'bg-gray-900 text-[#FF7700] border-gray-700'
                          : 'bg-gray-100 text-gray-800 border-gray-200'
                      }`}>
                        {segment.feeText}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded hidden sm:inline-block ${
                        isExpanded ? 'bg-[#FF7700] text-white' : 'bg-black text-[#FF7700]'
                      }`}>
                        Prize Pool: {segment.totalPrizePool}
                      </span>

                      {/* Dropdown Animation Icon */}
                      <div className={`p-2 rounded-full transition-transform duration-300 ${
                        isExpanded ? 'bg-[#FF7700] text-white rotate-180' : 'bg-gray-100 text-gray-700'
                      }`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Dropdown Expandable Info */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden bg-gray-50 border-t border-gray-200"
                    >
                      <div className="p-5 sm:p-7 grid md:grid-cols-12 gap-6 items-start">
                        {/* Image Preview */}
                        <div className="md:col-span-5 relative h-52 md:h-full min-h-[220px] overflow-hidden rounded-xl border border-gray-300 shadow-inner">
                          <DriveImage
                            src={segment.image}
                            alt={segment.title}
                            className="w-full h-full object-cover"
                            fallbackText={segment.title}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                            <span className="text-xs text-[#FF7700] font-black uppercase tracking-widest">
                              {segment.category}
                            </span>
                            <span className="text-white font-black text-lg">
                              {segment.title}
                            </span>
                          </div>
                        </div>

                        {/* Event Info Details */}
                        <div className="md:col-span-7 space-y-5">
                          <div>
                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">
                              Segment Overview
                            </h4>
                            <p className="text-gray-800 text-sm leading-relaxed italic">
                              {segment.fullDescription}
                            </p>
                          </div>

                          {/* Quick Specs Grid */}
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="p-3 bg-white border border-gray-200 rounded-lg">
                              <span className="text-gray-500 block text-[10px] uppercase font-bold">Eligibility</span>
                              <span className="font-black text-gray-900">{segment.eligibility}</span>
                            </div>
                            <div className="p-3 bg-white border border-gray-200 rounded-lg">
                              <span className="text-gray-500 block text-[10px] uppercase font-bold">Team Limits</span>
                              <span className="font-black text-gray-900">{segment.teamSize}</span>
                            </div>
                            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg col-span-2 flex items-center justify-between">
                              <div>
                                <span className="text-amber-800 block text-[10px] uppercase font-bold">Total Prize Pool</span>
                                <span className="font-black text-black text-sm">{segment.totalPrizePool}</span>
                              </div>
                              <span className="text-[10px] font-extrabold uppercase bg-amber-200 text-amber-900 px-2 py-0.5 rounded">
                                Cash & Trophies
                              </span>
                            </div>
                          </div>

                          {/* Fee & Discount Banner */}
                          <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs space-y-1">
                            <div className="font-bold text-emerald-900 flex items-center justify-between">
                              <span>Fee Structure ({segment.feeText})</span>
                              <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">Discounts Available</span>
                            </div>
                            <p className="text-gray-700 text-[11px] leading-relaxed">
                              • <strong>IEEE Member Discount:</strong> BDT 100 flat discount per team.<br />
                              • <strong>Campus Ambassador Discount:</strong> 5% discount on total team registration fee.
                            </p>
                          </div>

                          {/* Project Showcase Tracks if applicable */}
                          {isProjectShowcase && segment.categories && (
                            <div className="p-4 bg-black text-white rounded-lg border-l-4 border-[#FF7700]">
                              <div className="text-xs font-black text-[#FF7700] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                <Tag className="w-3.5 h-3.5 text-[#FF7700]" />
                                2 Competition Tracks
                              </div>
                              <div className="space-y-2">
                                {segment.categories.map((cat) => (
                                  <div key={cat.name} className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 bg-gray-900 rounded border border-gray-800 gap-2">
                                    <div>
                                      <span className="font-bold text-white uppercase text-xs block">{cat.name}</span>
                                      <span className="text-[11px] text-gray-400 italic">{cat.description}</span>
                                    </div>
                                    <span className="font-black text-[#FF7700] text-xs bg-black px-2 py-1 rounded border border-gray-800 self-start sm:self-center">
                                      {cat.feeText}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Technical Partner Info Card */}
                          {segment.techPartner && (
                            <div className="p-3.5 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-xl border border-gray-800 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 bg-white p-1.5 rounded-lg border border-gray-200/80 shrink-0 shadow-sm">
                                  <div className="h-7 w-auto flex items-center justify-center">
                                    <DriveImage
                                      src={segment.techPartner.logo}
                                      alt={segment.techPartner.name}
                                      className="h-6 w-auto object-contain"
                                      fallbackText={segment.techPartner.name}
                                    />
                                  </div>
                                  {segment.techPartner.secondaryLogo && (
                                    <>
                                      <span className="text-gray-400 font-bold text-xs">×</span>
                                      <div className="h-7 w-auto flex items-center justify-center">
                                        <DriveImage
                                          src={segment.techPartner.secondaryLogo}
                                          alt={segment.techPartner.secondaryName || "Partner"}
                                          className="h-6 w-auto object-contain"
                                          fallbackText={segment.techPartner.secondaryName || "Partner"}
                                        />
                                      </div>
                                    </>
                                  )}
                                </div>

                                <div>
                                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7700] block">
                                    Technical Partner
                                  </span>
                                  <h5 className="font-black text-xs sm:text-sm uppercase tracking-wide text-white">
                                    {segment.techPartner.name}
                                  </h5>
                                </div>
                              </div>

                              {segment.techPartner.websiteUrl && (
                                <a
                                  href={segment.techPartner.websiteUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3 py-1.5 rounded-lg bg-[#FF7700] hover:bg-white hover:text-black text-white font-bold text-[11px] uppercase transition-colors inline-flex items-center gap-1 shrink-0 cursor-pointer shadow-sm"
                                >
                                  <span>Visit Partner</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="pt-3 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-3">
                            {segment.isComingSoon || !segment.formUrl ? (
                              <button
                                disabled
                                className="w-full py-3.5 px-5 bg-gray-200 text-gray-600 font-black text-xs uppercase tracking-wider rounded shadow flex items-center justify-center gap-2 cursor-not-allowed select-none border border-gray-300"
                              >
                                <Clock className="w-4 h-4 text-gray-500" />
                                <span>Coming Soon</span>
                              </button>
                            ) : (
                              <a
                                href={segment.formUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 px-5 bg-[#FF7700] text-white hover:bg-black font-black text-xs uppercase tracking-wider transition-all rounded shadow flex items-center justify-center gap-2 group cursor-pointer"
                              >
                                <Trophy className="w-4 h-4" />
                                <span>Register Now ({segment.feeText})</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                            )}

                            {segment.portalUrl && (
                              <a
                                href={segment.portalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto py-3.5 px-5 bg-black hover:bg-[#FF7700] text-white font-black text-xs uppercase tracking-wider transition-all rounded shadow flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                              >
                                <span>Shohoj Coding Portal</span>
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Single Rulebook Button Below Segment Options */}
        <div className="mt-10 text-center space-y-2">
          <a
            href="https://drive.google.com/drive/folders/1McQ-HSvlKgmGqiTfQmTnjvk2YqJAGi9W?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-black text-black hover:text-white border-2 border-black rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-md hover:shadow-xl group cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-[#FF7700] group-hover:text-white transition-colors" />
            <span>View Official Competition Rulebook</span>
            <ExternalLink className="w-4 h-4 text-[#FF7700] group-hover:text-white transition-colors" />
          </a>
          <p className="text-xs text-gray-500 font-medium italic">
            Access guidelines, rules, eligibility, and prize structures for all 5 competition segments.
          </p>
        </div>

      </div>
    </section>
  );
};
