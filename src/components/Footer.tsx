import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, MapPin, Mail, Phone, Trophy, X, Search, PhoneCall } from 'lucide-react';
import { DriveImage } from './DriveImage';
import { LOGOS, SOCIAL_LINKS, EVENT_DETAILS, HELPLINE_CONTACTS, openRandomWhatsAppChat } from '../data/eventData';

interface FooterProps {
  onOpenRegister: () => void;
  onOpenLookup: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLookup }) => {
  const [showSegmentPopup, setShowSegmentPopup] = useState(false);

  const handleRegisterClick = () => {
    const el = document.getElementById('segments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'segments';
    }
    setShowSegmentPopup(true);
  };

  return (
    <footer id="contact" className="bg-[#0B0F17] text-white pt-16 pb-12 border-t-4 border-[#FF7700] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand & Logos Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Logos Header on White Block Background */}
            <div className="bg-white p-3 sm:p-4 rounded-2xl border-2 border-gray-200 flex items-center gap-4 w-fit shadow-lg">
              <div className="h-12 w-14 bg-gray-50 rounded-xl p-1.5 flex items-center justify-center border border-gray-200">
                <DriveImage src={LOGOS.eventReact} alt="REACT Logo" fallbackText="REACT" />
              </div>
              <div className="h-12 w-12 bg-gray-50 rounded-xl p-1 flex items-center justify-center border border-gray-200">
                <DriveImage src={LOGOS.organizersIeeeSeu} alt="IEEE SEU SB" fallbackText="IEEE" />
              </div>
              <div className="h-12 w-12 bg-gray-50 rounded-xl p-1 flex items-center justify-center border border-gray-200">
                <DriveImage src={LOGOS.southeastUniversity} alt="SEU" fallbackText="SEU" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white tracking-wider uppercase">
                REACT <span className="text-[#FF7700]">2026</span>
              </h3>
              <p className="text-xs text-gray-400 font-semibold uppercase mt-0.5">
                National Robotics, Engineering, Automation & Tech Competition
              </p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              Organized by <strong className="text-white">IEEE SEU Student Branch</strong> at <strong className="text-white">Southeast University</strong>. Fostering innovation, robotics engineering, and technical mastery across Bangladesh.
            </p>

            {/* Social Media Links */}
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#FF7700] block mb-3">
                Connect On Official Social Media
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* Facebook */}
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#1877F2] text-white text-xs font-bold transition-all border border-white/10 flex items-center gap-2 group"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2] group-hover:text-white" />
                  <span>Facebook</span>
                </a>

                {/* Instagram */}
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#E4405F] text-white text-xs font-bold transition-all border border-white/10 flex items-center gap-2 group"
                >
                  <Instagram className="w-4 h-4 text-[#E4405F] group-hover:text-white" />
                  <span>Instagram</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#0A66C2] text-white text-xs font-bold transition-all border border-white/10 flex items-center gap-2 group"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover:text-white" />
                  <span>LinkedIn</span>
                </a>

                {/* WhatsApp Chat Button - Random Helpline Router */}
                <button
                  onClick={() => openRandomWhatsAppChat()}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow cursor-pointer"
                  title="Random WhatsApp Helpline Chat"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>
            </div>

          </div>

          {/* Contact, Secretariat & Actions Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FF7700]">
              Event Secretariat & Helplines
            </h4>

            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-[#FF7700] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Southeast University Main Campus</strong>
                  <span>251/A & 252, Tejgaon Industrial Area, Dhaka-1208, Bangladesh</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Mail className="w-5 h-5 text-[#FF7700] shrink-0" />
                <div>
                  <span className="text-gray-400 block text-[10px]">Official Email:</span>
                  <span className="text-white font-bold select-all">
                    {EVENT_DETAILS.contactEmail}
                  </span>
                </div>
              </div>

              {/* 3 Executive Helpline Contacts */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#FF7700] font-black text-[10px] uppercase tracking-wider border-b border-white/10 pb-1.5">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Official Contact Helplines</span>
                </div>
                {HELPLINE_CONTACTS.map((hc) => (
                  <div key={hc.name} className="flex items-center justify-between text-xs py-0.5">
                    <div>
                      <span className="text-white font-bold block">{hc.name}</span>
                      <span className="text-gray-400 text-[10px]">{hc.role}</span>
                    </div>
                    <a
                      href={`https://wa.me/${hc.whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#FF7700] hover:text-white font-mono font-bold hover:underline text-right"
                    >
                      {hc.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleRegisterClick}
                className="w-full py-3.5 rounded-xl bg-[#FF7700] text-white hover:bg-[#e06800] font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Trophy className="w-4 h-4" />
                Register For REACT 2026
              </button>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <span>Venue: Southeast University</span>
            <span>Date: SEPT 10-11, 2026</span>
          </div>
          <div>© 2026 IEEE SEU Student Branch • All Rights Reserved</div>
        </div>

      </div>

      {/* Pop Up Notification on Register Click */}
      {showSegmentPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border-4 border-[#FF7700] text-center space-y-4 relative">
            <button
              onClick={() => setShowSegmentPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black p-1 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-[#FF7700]/10 text-[#FF7700] rounded-full flex items-center justify-center mx-auto border-2 border-[#FF7700]">
              <Trophy className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-black uppercase text-black tracking-tight">
              Register By Selecting A Segment
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Please scroll through the <strong>Competition Segments</strong> (Soccer Bot, Line Follower, Datathon, Project Showcase, or Poster) and click <strong>"Register Team"</strong> under your chosen segment to open its registration form.
            </p>

            <button
              onClick={() => setShowSegmentPopup(false)}
              className="w-full py-3.5 rounded-2xl bg-[#FF7700] hover:bg-[#e06800] text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              Select Segment Now
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
