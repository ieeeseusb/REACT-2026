import React from 'react';
import { Target, Award, Cpu, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { DriveImage } from './DriveImage';
import { LOGOS, EVENT_DETAILS } from '../data/eventData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#FF7700] text-xs font-black uppercase tracking-[0.2em] mb-2">
            The Initiative • About The Symposium
          </h2>
          <h1 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tighter">
            What is <span className="text-[#FF7700]">REACT 2026</span>?
          </h1>
          <div className="h-1 w-20 bg-[#FF7700] mx-auto mt-4" />
        </div>

        {/* Grid Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-black via-gray-900 to-[#121824] p-8 text-white shadow-2xl border-2 border-gray-800 overflow-hidden">
              
              {/* Background ambient lighting - strictly z-0 behind dark container content */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7700]/20 rounded-full blur-3xl pointer-events-none z-0" />

              {/* Content Container - relative z-10 above ambient glow */}
              <div className="relative z-10">
                {/* Logos Cluster - White Background Bar */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center justify-between mb-8 shadow-lg">
                  <div className="h-12 sm:h-14 w-auto flex items-center justify-center">
                    <DriveImage src={LOGOS.eventReact} alt="REACT Logo" className="h-full w-auto object-contain" fallbackText="REACT" />
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-9 sm:h-10 w-auto flex items-center justify-center">
                      <DriveImage src={LOGOS.organizersIeeeSeu} alt="IEEE SEU SB" className="h-full w-auto object-contain" fallbackText="IEEE" />
                    </div>
                    <div className="h-9 sm:h-10 w-auto flex items-center justify-center">
                      <DriveImage src={LOGOS.southeastUniversity} alt="SEU Logo" className="h-full w-auto object-contain" fallbackText="SEU" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-3 text-white">
                  Empowering The Next Generation of Technological Pioneers
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Organized by the <strong className="text-white">IEEE SEU Student Branch</strong>, REACT brings together students from high schools, colleges, and top-tier engineering universities across the nation to compete in high-stakes robotics, data science, and innovation challenges.
                </p>

                {/* Quick Pillars */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Award className="w-5 h-5 text-[#FF7700] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">National Recognition</h4>
                      <p className="text-xs text-gray-400">IEEE accredited certificates, trophies, and cash rewards for top performers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Target className="w-5 h-5 text-[#FF7700] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">5 Specialized Segments</h4>
                      <p className="text-xs text-gray-400">Robotics, Artificial Intelligence, Hardware Prototypes & Poster Presentations.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Text & Detailed Highlights Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-xs font-bold uppercase tracking-wider">
              Host Campus • Southeast University
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              A Premier Platform for Robotics, Automation & Technology Innovation
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">
              <strong>REACT 2026</strong> stands for <strong>Robotics, Engineering, Automation & Technology Competition</strong>. Hosted at the state-of-the-art campus of <strong className="text-gray-900">Southeast University</strong> in Tejgaon, Dhaka, this event serves as a launchpad for future technological leaders.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Whether you are an autonomous bot builder, an AI model architect, or a young inventor showcasing your first IoT device, REACT provides world-class arena facilities, impartial judging panels composed of industry leaders and university professors, and networking opportunities.
            </p>

            {/* Feature Checklist */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#FF7700] shrink-0" />
                <span className="text-sm font-bold text-gray-800">State-of-the-Art Arenas</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#FF7700] shrink-0" />
                <span className="text-sm font-bold text-gray-800">Junior & Senior Showcase</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#FF7700] shrink-0" />
                <span className="text-sm font-bold text-gray-800">Industry Expert Panels</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#FF7700] shrink-0" />
                <span className="text-sm font-bold text-gray-800">IEEE Certified Credentials</span>
              </div>
            </div>

            {/* Venue Location Box */}
            <div className="p-5 rounded-2xl bg-gray-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 border-l-4 border-[#FF7700]">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#FF7700] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-base text-white">Southeast University Campus</h4>
                  <p className="text-xs text-gray-300">251/A & 252, Tejgaon Industrial Area, Dhaka-1208, Bangladesh</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Southeast+University+Tejgaon+Dhaka"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#FF7700] text-white hover:bg-[#e06800] text-xs font-bold flex items-center gap-1.5 shrink-0"
              >
                View Map
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
