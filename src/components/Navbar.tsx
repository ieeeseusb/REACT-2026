import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ShieldCheck, ChevronRight } from 'lucide-react';
import { DriveImage } from './DriveImage';
import { LOGOS, SOCIAL_LINKS, EVENT_DETAILS } from '../data/eventData';

interface NavbarProps {
  onOpenRegister: (segmentId?: string) => void;
  onOpenLookup: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenLookup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Segments', href: '#segments', badge: '05' },
    { name: 'Calculator', href: '#fee-calculator' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Partners', href: '#partners' },
    { name: 'Collaborators', href: '#collaborators' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-2'
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-100 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand & Transparent Logos */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Main REACT Logo - Big transparent PNG, no border, no background box */}
            <div className="h-16 sm:h-20 md:h-24 w-auto flex items-center justify-center group-hover:scale-105 transition-transform py-1">
              <DriveImage
                src={LOGOS.eventReact}
                alt="REACT Event Logo"
                className="h-full w-auto object-contain"
                fallbackText="REACT"
                fallbackSubtext="2026"
              />
            </div>

            {/* Organizer Logos Inline - Clean & Borderless */}
            <div className="hidden md:flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="h-9 w-auto flex items-center justify-center" title="IEEE SEU Student Branch">
                <DriveImage
                  src={LOGOS.organizersIeeeSeu}
                  alt="IEEE SEU Student Branch Logo"
                  className="h-full w-auto object-contain"
                  fallbackText="IEEE"
                />
              </div>

              <span className="text-gray-300 text-xs font-bold">×</span>

              <div className="h-9 w-auto flex items-center justify-center" title="Southeast University">
                <DriveImage
                  src={LOGOS.southeastUniversity}
                  alt="Southeast University Logo"
                  className="h-full w-auto object-contain"
                  fallbackText="SEU"
                />
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-[#FF7700] transition-colors flex items-center gap-1.5"
              >
                {link.name}
                {link.badge && (
                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-[#FF7700] text-white">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-900 bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-6 shadow-2xl">
          {/* Quick Navigation Header & Logos */}
          <div className="p-3.5 mb-4 rounded-xl bg-white border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-gray-100">
              <span className="text-[10px] font-black tracking-widest uppercase text-[#FF7700]">
                Quick Navigation
              </span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                REACT 2026
              </span>
            </div>

            {/* Clean Logo Display Row on White Background */}
            <div className="flex items-center justify-between gap-2 pt-1">
              <div className="h-10 px-3 py-1 bg-white rounded-lg border border-gray-200/80 flex items-center justify-center shadow-sm">
                <DriveImage
                  src={LOGOS.eventReact}
                  alt="REACT Logo"
                  className="h-7 w-auto object-contain"
                  fallbackText="REACT 2026"
                />
              </div>

              <div className="flex items-center gap-1.5">
                <div className="h-10 px-2.5 py-1 bg-white rounded-lg border border-gray-200/80 flex items-center justify-center shadow-sm">
                  <DriveImage
                    src={LOGOS.organizersIeeeSeu}
                    alt="IEEE Logo"
                    className="h-6 w-auto object-contain"
                    fallbackText="IEEE"
                  />
                </div>
                <span className="text-gray-400 font-bold text-xs">×</span>
                <div className="h-10 px-2.5 py-1 bg-white rounded-lg border border-gray-200/80 flex items-center justify-center shadow-sm">
                  <DriveImage
                    src={LOGOS.southeastUniversity}
                    alt="SEU Logo"
                    className="h-6 w-auto object-contain"
                    fallbackText="SEU"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider text-gray-800 hover:bg-[#FF7700]/10 hover:text-[#FF7700] transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF7700] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                  <span>{link.name}</span>
                </div>
                {link.badge ? (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded bg-[#FF7700] text-white shadow-sm">
                    {link.badge}
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF7700] group-hover:translate-x-0.5 transition-transform" />
                )}
              </a>
            ))}
          </div>

          {/* Utility Quick Actions */}
          <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLookup();
              }}
              className="py-2.5 px-3 rounded-lg border border-gray-300 font-bold text-[11px] uppercase text-gray-800 hover:bg-gray-100 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-[#FF7700]" />
              <span>Ticket Status</span>
            </button>

            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-bold text-[11px] uppercase flex items-center justify-center gap-1.5 hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
