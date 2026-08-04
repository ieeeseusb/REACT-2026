import React, { useState } from 'react';
import { X, Trophy, ExternalLink, Copy, Check, Sparkles, MessageCircle, FileText, Clock } from 'lucide-react';
import { SEGMENTS } from '../data/eventData';
import { RegistrationData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSegmentId?: string;
  preselectedSubCategory?: string;
  onSuccessRegistration?: (reg: RegistrationData) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedSegmentId
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeSegmentId, setActiveSegmentId] = useState<string>(
    preselectedSegmentId || SEGMENTS[0].id
  );

  if (!isOpen) return null;

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full my-8 shadow-2xl border-2 border-gray-900 overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black p-6 text-white flex items-center justify-between border-b-4 border-[#FF7700]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FF7700] text-white">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-xl uppercase tracking-wider text-white flex items-center gap-2">
                <span>REACT 2026 Official Registration</span>
                <Sparkles className="w-4 h-4 text-[#FF7700]" />
              </h3>
              <p className="text-xs text-gray-300 font-semibold">
                IEEE SEU Student Branch • Official Google Forms
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Segment Filter Bar */}
        <div className="bg-gray-100 p-3 border-b border-gray-200 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {SEGMENTS.map((seg) => (
            <button
              key={seg.id}
              onClick={() => setActiveSegmentId(seg.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                seg.id === activeSegmentId
                  ? 'bg-[#FF7700] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {seg.title}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#FF7700] shrink-0" />
            <span>
              Select a segment below to access the official Google Form for team registration.
            </span>
          </div>

          <div className="space-y-4">
            {SEGMENTS.map((segment) => {
              const isSelected = segment.id === activeSegmentId;

              return (
                <div
                  key={segment.id}
                  className={`p-5 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? 'border-[#FF7700] bg-gradient-to-r from-orange-50/50 via-white to-white shadow-lg'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-gray-900 text-white">
                          {segment.category}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {segment.eligibility}
                        </span>
                      </div>
                      <h4 className="text-lg font-black text-gray-900 uppercase">
                        {segment.title}
                      </h4>
                    </div>

                    <div className="text-right sm:text-right self-start sm:self-center">
                      <span className="text-xs font-bold text-gray-500 block">Registration Fee</span>
                      <span className="text-sm font-black text-[#FF7700] bg-[#FF7700]/10 px-2.5 py-1 rounded-lg inline-block">
                        {segment.feeText}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {segment.shortDescription}
                  </p>

                  {/* Form Link Action Bar / Coming Soon Bar */}
                  {segment.isComingSoon || !segment.formUrl ? (
                    <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                        <Clock className="w-4 h-4 text-[#FF7700] shrink-0" />
                        <span>Registration Form Launching Soon</span>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                        {segment.portalUrl && (
                          <a
                            href={segment.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-black hover:bg-[#FF7700] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <span>Shohoj Coding</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <span className="w-full sm:w-auto px-4 py-2 bg-amber-200 text-amber-900 font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 border border-amber-300">
                          <span>Coming Soon</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-2 w-full sm:w-auto overflow-hidden">
                        <span className="text-xs font-mono text-gray-500 bg-white px-2.5 py-1 rounded border border-gray-200 truncate select-all">
                          {segment.formUrl}
                        </span>
                        <button
                          onClick={() => copyToClipboard(segment.formUrl || '', segment.id)}
                          className="p-1.5 rounded-lg bg-white hover:bg-gray-100 border border-gray-300 text-gray-600 hover:text-black transition-colors shrink-0 cursor-pointer"
                          title="Copy form link"
                        >
                          {copiedId === segment.id ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                        {segment.portalUrl && (
                          <a
                            href={segment.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 bg-black hover:bg-[#FF7700] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <span>Shohoj Coding</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <a
                          href={segment.formUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-2.5 bg-[#FF7700] hover:bg-black text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer shrink-0"
                        >
                          <span>Fill Google Form</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-gray-600">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Need help with registration? Contact IEEE SEU SB on WhatsApp</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
