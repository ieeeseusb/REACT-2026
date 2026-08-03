import React, { useState } from 'react';
import { X, Search, ShieldCheck, CheckCircle2, Copy } from 'lucide-react';
import { RegistrationData } from '../types';

interface LookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  registrations: RegistrationData[];
}

export const RegistrationLookupModal: React.FC<LookupModalProps> = ({
  isOpen,
  onClose,
  registrations
}) => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState<RegistrationData | null | 'NOT_FOUND'>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return;

    const found = registrations.find(r =>
      r.id.toLowerCase() === trimmed ||
      r.leaderEmail.toLowerCase() === trimmed ||
      r.teamName.toLowerCase() === trimmed ||
      r.leaderPhone.includes(trimmed)
    );

    if (found) {
      setSearchResult(found);
    } else {
      setSearchResult('NOT_FOUND');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-white rounded-3xl max-w-lg w-full my-8 shadow-2xl border-2 border-gray-900 overflow-hidden relative animate-in zoom-in-95">
        
        {/* Header */}
        <div className="bg-gray-900 p-6 text-white flex items-center justify-between border-b-4 border-[#FF7700]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FF7700] text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-xl uppercase tracking-wider text-white">
                Check Registration Ticket
              </h3>
              <p className="text-xs text-[#FF7700] font-semibold">REACT 2026 Verification</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-6 space-y-6">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Reg ID (e.g. REACT-2026-SO-1234) or Email..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:border-[#FF7700]"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-[#FF7700] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#e06800] flex items-center gap-1.5 shrink-0"
            >
              <Search className="w-4 h-4" />
              Verify
            </button>
          </form>

          {/* Results Display */}
          {searchResult === 'NOT_FOUND' && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs text-center font-bold">
              No registration record found matching "{query}". Double check your Reg ID or Leader Email.
            </div>
          )}

          {searchResult && searchResult !== 'NOT_FOUND' && (
            <div className="bg-gray-900 rounded-2xl p-6 text-white border-2 border-[#FF7700] shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-extrabold text-sm text-emerald-400">Valid Registration Ticket</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-[#FF7700] text-white text-[10px] font-black uppercase">
                  {searchResult.status}
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Pass ID:</span>
                  <span className="font-black text-[#FF7700]">{searchResult.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Team Name:</span>
                  <span className="font-bold">{searchResult.teamName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Segment:</span>
                  <span className="font-bold text-white">{searchResult.segmentTitle} {searchResult.subCategory && `(${searchResult.subCategory})`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Institution:</span>
                  <span className="font-bold">{searchResult.institution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Leader:</span>
                  <span className="font-bold">{searchResult.leaderName} ({searchResult.leaderPhone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">TrxID:</span>
                  <span className="font-mono text-amber-400">{searchResult.transactionId}</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
