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
              onClick={() => onOpenRegister()}
              className="px-3 py-1.5 rounded bg-[#FF7700] text-white font-black text-xs uppercase tracking-wider"
            >
              Register
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-gray-900 bg-gray-100 hover:bg-gray-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl">
          <div className="flex items-center justify-between p-3 mb-4 rounded bg-gray-100 border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="h-8 w-auto">
                <DriveImage src={LOGOS.eventReact} alt="REACT Logo" fallbackText="REACT" />
              </div>
              <span className="font-black text-xs uppercase text-black">REACT 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-auto">
                <DriveImage src={LOGOS.organizersIeeeSeu} alt="IEEE Logo" fallbackText="IEEE" />
              </div>
              <div className="h-6 w-auto">
                <DriveImage src={LOGOS.southeastUniversity} alt="SEU Logo" fallbackText="SEU" />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-800 hover:bg-gray-100 hover:text-[#FF7700]"
              >
                <span>{link.name}</span>
                {link.badge ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FF7700] text-white">
                    {link.badge}
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLookup();
              }}
              className="w-full py-2 rounded border border-gray-300 font-bold text-xs uppercase text-gray-800 hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#FF7700]" />
              Check Ticket Status
            </button>

            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 rounded bg-emerald-600 text-white font-bold text-xs uppercase flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
