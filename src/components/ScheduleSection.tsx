import React from 'react';
import { Calendar, Clock, Bell } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-white text-gray-900 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[#FF7700] text-xs font-black uppercase tracking-[0.2em] mb-2">
            Timeline & Agenda
          </h2>
          <h1 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tighter">
            Competition <span className="text-[#FF7700]">Schedule</span>
          </h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-base italic leading-relaxed">
            Event dates: September 10 & 11, 2026 at Southeast University Campus.
          </p>
          <div className="h-1 w-20 bg-[#FF7700] mx-auto mt-4" />
        </div>

        {/* Schedule Announcement Card */}
        <div className="max-w-2xl mx-auto bg-gray-50 border-l-4 border-[#FF7700] border-y border-r border-gray-200 p-8 sm:p-10 text-center shadow-sm">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FF7700]/10 border border-[#FF7700]/30 rounded-full mb-4 text-[#FF7700]">
            <Bell className="w-6 h-6 animate-pulse" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight mb-3">
            Schedule Announcement
          </h3>

          <p className="text-sm sm:text-base font-bold text-gray-800 uppercase tracking-wider mb-2">
            Schedule will be given a week before the competition
          </p>

          <p className="text-xs sm:text-sm text-gray-600 italic max-w-md mx-auto leading-relaxed">
            Detailed segment timings, reporting hours, and slot assignments for September 10 & 11 will be published here and emailed to registered team leads.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-black uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5 text-[#FF7700]" />
            <span>Event Dates: Sept 10 - 11, 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
};

