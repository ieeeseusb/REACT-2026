import React, { useState, useMemo } from 'react';
import { Calculator, Trophy, Check, Sparkles, ArrowRight, ShieldCheck, Percent, Users, Award, ExternalLink } from 'lucide-react';
import { SEGMENTS } from '../data/eventData';

interface FeeCalculatorSectionProps {
  onOpenRegister?: (segmentId: string, subCategory?: string) => void;
}

export const FeeCalculatorSection: React.FC<FeeCalculatorSectionProps> = () => {
  const [selectedSegId, setSelectedSegId] = useState<string>('soccer-bot');
  const [selectedSubCat, setSelectedSubCat] = useState<string>('Junior Category');
  const [memberCount, setMemberCount] = useState<number>(3);
  const [isIeeeMember, setIsIeeeMember] = useState<boolean>(false);
  const [hasAmbassadorCode, setHasAmbassadorCode] = useState<boolean>(false);

  const selectedSegment = useMemo(() => {
    return SEGMENTS.find(s => s.id === selectedSegId) || SEGMENTS[0];
  }, [selectedSegId]);

  // Determine min and max allowed members based on segment and sub-category
  const { minMembers, maxMembers } = useMemo(() => {
    if (selectedSegId === 'project-showcase') {
      if (selectedSubCat === 'Senior Category') {
        return { minMembers: 3, maxMembers: 3 };
      }
      return { minMembers: 3, maxMembers: 4 };
    }
    if (selectedSegId === 'poster-presentation') {
      return { minMembers: 1, maxMembers: 4 };
    }
    return { minMembers: 3, maxMembers: 4 };
  }, [selectedSegId, selectedSubCat]);

  // Adjust memberCount if segment change pushes current count out of allowed bounds
  React.useEffect(() => {
    if (memberCount < minMembers) setMemberCount(minMembers);
    if (memberCount > maxMembers) setMemberCount(maxMembers);
  }, [minMembers, maxMembers, memberCount]);

  // Calculation Logic
  const feeCalculation = useMemo(() => {
    let baseFee = 0;
    let text = '';

    if (selectedSegId === 'poster-presentation') {
      if (memberCount <= 3) {
        baseFee = memberCount * 400;
        text = `${memberCount} Member${memberCount > 1 ? 's' : ''} × BDT 400`;
      } else {
        baseFee = (3 * 400) + 300;
        text = `3 Members × BDT 400 + 1 Extra Member × BDT 300`;
      }
    } else if (selectedSegId === 'project-showcase') {
      if (selectedSubCat === 'Senior Category') {
        baseFee = 3 * 400;
        text = `3 Members × BDT 400 (Senior Track)`;
      } else {
        baseFee = memberCount * 300;
        text = `${memberCount} Members × BDT 300 (Junior Track)`;
      }
    } else if (selectedSegId === 'datathon') {
      baseFee = memberCount * 400;
      text = `${memberCount} Members × BDT 400`;
    } else {
      // Soccer Bot, LFR
      baseFee = memberCount * 500;
      text = `${memberCount} Members × BDT 500`;
    }

    const ieeeDiscount = isIeeeMember ? 100 : 0;
    const afterIeee = Math.max(0, baseFee - ieeeDiscount);
    const ambassadorDiscount = hasAmbassadorCode ? Math.round(afterIeee * 0.05) : 0;
    const finalFee = Math.max(0, afterIeee - ambassadorDiscount);

    return {
      baseFee,
      text,
      ieeeDiscount,
      ambassadorDiscount,
      finalFee
    };
  }, [selectedSegId, selectedSubCat, memberCount, isIeeeMember, hasAmbassadorCode]);

  return (
    <section id="fee-calculator" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white border-y border-gray-800 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF7700]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7700]/20 text-[#FF7700] text-xs font-black uppercase tracking-widest border border-[#FF7700]/30 mb-3">
            <Calculator className="w-4 h-4" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            Registration Fee <span className="text-[#FF7700]">Calculator</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
            Select your segment, team size, and discounts to instantly calculate your total registration fee before checkout.
          </p>
          <div className="h-1 w-20 bg-[#FF7700] mx-auto mt-4" />
        </div>

        {/* Calculator Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 Cols) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-6">
            
            {/* 1. Select Segment */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#FF7700] mb-3">
                1. Select Competition Segment
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {SEGMENTS.map((seg) => (
                  <button
                    key={seg.id}
                    type="button"
                    onClick={() => {
                      setSelectedSegId(seg.id);
                      if (seg.id === 'project-showcase' && seg.categories) {
                        setSelectedSubCat(seg.categories[0].name);
                      }
                    }}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between h-full ${
                      seg.id === selectedSegId
                        ? 'bg-[#FF7700] text-white border-[#FF7700] shadow-lg shadow-[#FF7700]/20'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-black uppercase tracking-tight block leading-snug">
                      {seg.title}
                    </span>
                    <span className="text-[10px] opacity-80 font-bold block mt-1">
                      {seg.feeText}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-Category Selection for Project Showcase */}
            {selectedSegId === 'project-showcase' && selectedSegment.categories && (
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                <label className="block text-xs font-black uppercase tracking-wider text-amber-400">
                  Select Project Showcase Track
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {selectedSegment.categories.map((cat) => (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => setSelectedSubCat(cat.name)}
                      className={`p-3 rounded-xl text-xs font-black uppercase transition-all cursor-pointer border ${
                        selectedSubCat === cat.name
                          ? 'bg-amber-500 text-black border-amber-400 font-extrabold'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div>{cat.name}</div>
                      <div className="text-[10px] font-semibold opacity-90">{cat.feeText}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Number of Team Members */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-black uppercase tracking-wider text-[#FF7700]">
                  2. Number of Team Members
                </label>
                <span className="text-xs text-gray-400 font-bold">
                  Allowed: {minMembers} - {maxMembers} Member{maxMembers > 1 ? 's' : ''}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setMemberCount(prev => Math.max(minMembers, prev - 1))}
                    disabled={memberCount <= minMembers}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white font-black text-lg flex items-center justify-center transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <div className="text-center">
                    <span className="text-2xl font-black text-white block">
                      {memberCount}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-gray-400">
                      Participant{memberCount > 1 ? 's' : ''}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMemberCount(prev => Math.min(maxMembers, prev + 1))}
                    disabled={memberCount >= maxMembers}
                    className="w-10 h-10 rounded-xl bg-[#FF7700] hover:bg-[#e06800] disabled:opacity-30 disabled:cursor-not-allowed text-white font-black text-lg flex items-center justify-center transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Quick Member Selection Pills */}
                <div className="hidden sm:flex gap-1.5">
                  {Array.from({ length: maxMembers - minMembers + 1 }, (_, i) => minMembers + i).map(num => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setMemberCount(num)}
                      className={`w-12 h-16 rounded-2xl font-black text-sm flex flex-col items-center justify-center border transition-all cursor-pointer ${
                        memberCount === num
                          ? 'bg-white text-black border-white shadow-lg'
                          : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span>{num}</span>
                      <span className="text-[9px] font-bold opacity-70 uppercase">M</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Discount Options */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-emerald-400 mb-3">
                3. Special Member & Referral Discounts
              </label>

              <div className="space-y-3">
                {/* IEEE Member Discount Checkbox */}
                <label className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                  isIeeeMember ? 'bg-emerald-950/60 border-emerald-500 text-white' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}>
                  <input
                    type="checkbox"
                    checked={isIeeeMember}
                    onChange={(e) => setIsIeeeMember(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-[#FF7700] focus:ring-0 cursor-pointer"
                  />
                  <div>
                    <span className="text-xs font-black text-emerald-300 uppercase block">
                      IEEE Member Discount (- BDT 100 / team)
                    </span>
                    <span className="text-[11px] text-gray-400 block mt-0.5">
                      Check if team leader or any team member holds an active IEEE student membership.
                    </span>
                  </div>
                </label>

                {/* Campus Ambassador Discount Checkbox */}
                <label className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                  hasAmbassadorCode ? 'bg-amber-950/60 border-amber-500 text-white' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}>
                  <input
                    type="checkbox"
                    checked={hasAmbassadorCode}
                    onChange={(e) => setHasAmbassadorCode(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-[#FF7700] focus:ring-0 cursor-pointer"
                  />
                  <div>
                    <span className="text-xs font-black text-amber-300 uppercase block">
                      Campus Ambassador Referral Discount (5% Off Total Fee)
                    </span>
                    <span className="text-[11px] text-gray-400 block mt-0.5">
                      Applies an instant 5% discount on your team's payable registration fee.
                    </span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Breakdown & Summary Card Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-gray-900 to-black border-2 border-[#FF7700] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
            
            <div className="space-y-6">
              
              {/* Card Title */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7700] block">
                    Calculated Breakdown
                  </span>
                  <h3 className="text-xl font-black text-white uppercase">
                    {selectedSegment.title}
                  </h3>
                </div>
                <div className="p-3 bg-[#FF7700]/10 border border-[#FF7700]/30 rounded-2xl text-[#FF7700]">
                  <Trophy className="w-6 h-6" />
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-3 text-xs">
                
                <div className="flex justify-between items-center py-1.5 border-b border-gray-800 text-gray-300">
                  <span>Selected Category:</span>
                  <span className="font-bold text-white uppercase">{selectedSegment.category}</span>
                </div>

                {selectedSegId === 'project-showcase' && (
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-800 text-amber-400">
                    <span>Selected Track:</span>
                    <span className="font-bold uppercase">{selectedSubCat}</span>
                  </div>
                )}

                <div className="flex justify-between items-center py-1.5 border-b border-gray-800 text-gray-300">
                  <span>Team Size:</span>
                  <span className="font-bold text-white">{memberCount} Member{memberCount > 1 ? 's' : ''}</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-gray-800 text-gray-300">
                  <span>Base Fee Subtotal:</span>
                  <span className="font-bold text-white">BDT {feeCalculation.baseFee}</span>
                </div>

                <div className="text-[11px] text-gray-400 italic">
                  Calculation: {feeCalculation.text}
                </div>

                {/* Applied Discounts */}
                {feeCalculation.ieeeDiscount > 0 && (
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-800 text-emerald-400 font-bold">
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      IEEE Member Discount:
                    </span>
                    <span>- BDT {feeCalculation.ieeeDiscount}</span>
                  </div>
                )}

                {feeCalculation.ambassadorDiscount > 0 && (
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-800 text-amber-400 font-bold">
                    <span className="flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5" />
                      Campus Ambassador (5%):
                    </span>
                    <span>- BDT {feeCalculation.ambassadorDiscount}</span>
                  </div>
                )}

              </div>

              {/* Total Price Banner */}
              <div className="p-5 bg-gradient-to-r from-[#FF7700]/20 via-[#FF7700]/10 to-transparent border border-[#FF7700]/40 rounded-2xl space-y-3">
                <div>
                  <span className="text-[10px] font-black uppercase text-[#FF7700] tracking-widest block">
                    Total Payable Amount
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white">
                    BDT {feeCalculation.finalFee}
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {feeCalculation.ieeeDiscount > 0 || feeCalculation.ambassadorDiscount > 0 ? (
                      <span className="text-emerald-400 font-bold">You save BDT {feeCalculation.baseFee - feeCalculation.finalFee} with discounts!</span>
                    ) : (
                      <span>Standard registration fee without additional discounts.</span>
                    )}
                  </p>
                </div>

                <a
                  href={selectedSegment.formUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#FF7700] hover:bg-white text-white hover:text-black font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FF7700]/30 cursor-pointer"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Register for {selectedSegment.title}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
