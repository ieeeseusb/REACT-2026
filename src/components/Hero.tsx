import React, { useState, useEffect } from 'react';
import { Trophy, Calendar, MapPin, ArrowRight, ShieldCheck, Zap, Download, Sparkles } from 'lucide-react';
import { DriveImage } from './DriveImage';
import { LOGOS, EVENT_DETAILS } from '../data/eventData';

interface HeroProps {
  onOpenRegister?: (segmentId?: string) => void;
  onOpenRulebook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRulebook }) => {
  // Swift Prize Pool Counter Effect (0 to 140)
  const [prizeCount, setPrizeCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 140;
    const duration = 1000; // 1 second swift animation
    const step = Math.ceil(target / (duration / 25));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setPrizeCount(target);
        clearInterval(interval);
      } else {
        setPrizeCount(current);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // Countdown Timer State
  const targetDate = new Date('2026-09-10T09:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 102,
    hours: 14,
    minutes: 36,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-white text-gray-900 overflow-hidden border-b border-gray-200">
      {/* Subtle background light accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#FF7700_0.8px,transparent_0.8px)] [background-size:20px_20px] opacity-[0.07] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7700]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Background Watermark Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-[0.05] overflow-hidden z-0">
        <span className="text-[11vw] font-black uppercase tracking-tighter text-black whitespace-nowrap leading-none">
          INNOVATE • COMPETE
        </span>
        <span className="text-[11vw] font-black uppercase tracking-tighter text-[#FF7700] whitespace-nowrap leading-none">
          TRANSFORM
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Organizer & Host Badges - Clean & Borderless Logos */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
          
          {/* IEEE SEU SB Badge */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200">
            <div className="h-6 w-auto flex items-center justify-center">
              <DriveImage
                src={LOGOS.organizersIeeeSeu}
                alt="IEEE SEU Student Branch"
                className="h-full w-auto object-contain"
                fallbackText="IEEE"
              />
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-tight">
              Organized by <strong className="text-black font-black">IEEE SEU Student Branch</strong>
            </span>
          </div>

          <span className="text-[#FF7700] hidden sm:inline">•</span>

          {/* Southeast University Badge - Matching Organized By style */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200">
            <div className="h-6 w-auto flex items-center justify-center">
              <DriveImage
                src={LOGOS.southeastUniversity}
                alt="Southeast University"
                className="h-full w-auto object-contain"
                fallbackText="SEU"
              />
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-tight">
              Host: <strong className="text-black font-black">Southeast University</strong>
            </span>
          </div>
        </div>

        {/* Hero Headline & Event Name */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main Logo Showcase */}
          <div className="flex items-center justify-center mb-4">
            <div className="h-28 sm:h-36 md:h-40 w-auto flex items-center justify-center">
              <DriveImage
                src={LOGOS.eventReact}
                alt="REACT Event Logo"
                className="h-full w-auto max-w-full object-contain"
                fallbackText="REACT"
                fallbackSubtext="2026"
              />
            </div>
          </div>

          {/* Small Tagline */}
          <p className="text-xs sm:text-sm font-black text-[#FF7700] uppercase tracking-[0.25em] mb-2">
            INNOVATE • COMPETE • TRANSFORM
          </p>

          {/* Big Animated Prize Money Display */}
          <div className="my-5">
            <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">
              Total Competition Prize Pool
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-black tracking-tighter uppercase leading-none">
              BDT <span className="text-[#FF7700]">{prizeCount}k+</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-gray-600 font-normal italic max-w-2xl mx-auto mb-8 leading-relaxed">
            REACT is the flagship technical symposium of <strong className="text-black font-bold not-italic">Southeast University</strong>, organized by the <strong className="text-black font-bold not-italic">IEEE SEU Student Branch</strong>, bringing together engineers, robotics innovators, and data scientists.
          </p>

          {/* Event Meta Badges: Date & Location */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wider mb-8">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded bg-gray-100 border border-gray-200">
              <Calendar className="w-4 h-4 text-[#FF7700]" />
              <span>{EVENT_DETAILS.dateText}</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded bg-gray-100 border border-gray-200">
              <MapPin className="w-4 h-4 text-[#FF7700]" />
              <span>{EVENT_DETAILS.venue}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <a
              href="#segments"
              className="px-6 py-3.5 bg-[#FF7700] text-white hover:bg-black font-black text-xs uppercase tracking-widest transition-colors flex items-center gap-2 shadow"
            >
              <Sparkles className="w-4 h-4" />
              05 Competition Tracks
            </a>
          </div>

          {/* Countdown Timer Block - Clean Light Palette */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm max-w-2xl mx-auto">
            <div className="text-center text-xs font-black text-black uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7700] animate-ping" />
              Competition Countdown Clock
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              <div className="bg-white p-3 sm:p-4 rounded border border-gray-200 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-black">{timeLeft.days}</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Days</span>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded border border-gray-200 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-black">{timeLeft.hours}</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Hours</span>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded border border-gray-200 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-black">{timeLeft.minutes}</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Minutes</span>
              </div>
              <div className="bg-[#FF7700]/10 p-3 sm:p-4 rounded border border-[#FF7700]/30 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-[#FF7700]">{timeLeft.seconds}</span>
                <span className="text-[10px] text-[#FF7700] font-bold uppercase tracking-wider">Seconds</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 text-center">
            <div className="text-xl sm:text-2xl font-black text-[#FF7700]">05 Tracks</div>
            <div className="text-[11px] text-gray-600 font-bold uppercase">Soccer Bot, Datathon, LFR, Poster & Showcase</div>
          </div>
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 text-center">
            <div className="text-xl sm:text-2xl font-black text-black">{EVENT_DETAILS.totalPrizePool}</div>
            <div className="text-[11px] text-gray-600 font-bold uppercase">Cash Prizes & Trophies</div>
          </div>
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 text-center">
            <div className="text-xl sm:text-2xl font-black text-[#FF7700]">50+ Varsities</div>
            <div className="text-[11px] text-gray-600 font-bold uppercase">Nationwide Universities</div>
          </div>
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 text-center">
            <div className="text-xl sm:text-2xl font-black text-black">Free for all</div>
            <div className="text-[10px] text-gray-600 font-bold uppercase">except poster and Datathon</div>
          </div>
        </div>

      </div>
    </section>
  );
};
