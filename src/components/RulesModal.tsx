import React, { useState } from 'react';
import { X, BookOpen, Trophy, CheckCircle2, ShieldAlert, ExternalLink, Clock } from 'lucide-react';
import { Segment } from '../types';
import { SEGMENTS } from '../data/eventData';
import { DriveImage } from './DriveImage';

interface RulesModalProps {
  segment: Segment | null;
  onClose: () => void;
  onRegisterFromRules: (segmentId: string) => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({
  segment: initialSegment,
  onClose,
  onRegisterFromRules
}) => {
  const [selectedSegId, setSelectedSegId] = useState<string>(initialSegment?.id || SEGMENTS[0].id);

  if (!initialSegment) return null;

  const segment = SEGMENTS.find(s => s.id === selectedSegId) || initialSegment;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full my-8 shadow-2xl border-2 border-gray-900 overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gray-900 p-6 text-white flex items-center justify-between border-b-4 border-[#FF7700]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FF7700] text-white">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-[#FF7700] tracking-widest block">
                Official Symposium Rulebook
              </span>
              <h3 className="font-black text-xl uppercase tracking-wider text-white">
                {segment.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/drive/folders/1McQ-HSvlKgmGqiTfQmTnjvk2YqJAGi9W?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#FF7700] hover:bg-white hover:text-black text-white font-bold text-xs uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Open full Drive Rulebook"
            >
              <span>Drive Folder</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Segment Switcher Tabs */}
        <div className="bg-gray-100 p-2 border-b border-gray-200 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {SEGMENTS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSegId(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                s.id === segment.id
                  ? 'bg-[#FF7700] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-gray-800">
          
          {/* Banner & Fee */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs">
            <div>
              <span className="text-gray-500 font-bold block text-[10px] uppercase">Category</span>
              <span className="font-black text-gray-900">{segment.category}</span>
            </div>
            <div>
              <span className="text-gray-500 font-bold block text-[10px] uppercase">Eligibility</span>
              <span className="font-black text-emerald-700">{segment.eligibility}</span>
            </div>
            <div>
              <span className="text-gray-500 font-bold block text-[10px] uppercase">Team Size</span>
              <span className="font-black text-gray-900">{segment.teamSize}</span>
            </div>
            <div>
              <span className="text-gray-500 font-bold block text-[10px] uppercase">Fee</span>
              <span className="font-black text-[#FF7700] bg-[#FF7700]/10 px-2 py-0.5 rounded inline-block">
                {segment.feeText}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-900 mb-2">
              Segment Overview
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {segment.fullDescription}
            </p>
          </div>

          {/* Rules List */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#FF7700]" />
              Rules & Regulations
            </h4>
            <div className="space-y-2">
              {segment.rules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 text-xs font-semibold text-gray-800 border border-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7700] shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Partner Card */}
          {segment.techPartner && (
            <div className="p-3.5 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-2xl border border-gray-800 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-gray-200/80 shrink-0 shadow-sm">
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
                    Official Technical Partner
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

          {/* Total Prize Pool & Discounts Box */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-[#FF7700]" />
                Total Segment Prize Pool
              </h4>
              <span className="text-base font-black text-black bg-[#FF7700] text-white px-3 py-1 rounded-lg shadow-sm">
                {segment.totalPrizePool}
              </span>
            </div>

            <div className="pt-2 border-t border-amber-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
              <div className="bg-white p-2.5 rounded-xl border border-amber-200/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span><strong>IEEE Member Discount:</strong> BDT 100 off / team</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-amber-200/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span><strong>Ambassador Discount:</strong> 5% off team fee</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer CTAs */}
        <div className="p-4 bg-gray-100 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-gray-300 font-bold text-xs text-gray-700 hover:bg-gray-200 cursor-pointer"
          >
            Close
          </button>
          {segment.isComingSoon || !segment.formUrl ? (
            <button
              disabled
              className="px-6 py-2.5 rounded-xl bg-gray-200 text-gray-600 font-black text-xs uppercase tracking-wider shadow inline-flex items-center gap-1.5 cursor-not-allowed select-none border border-gray-300"
            >
              <Clock className="w-3.5 h-3.5 text-gray-500" />
              <span>Coming Soon</span>
            </button>
          ) : (
            <a
              href={segment.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#FF7700] text-white hover:bg-[#e06800] font-black text-xs uppercase tracking-wider shadow inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Register For {segment.title}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
