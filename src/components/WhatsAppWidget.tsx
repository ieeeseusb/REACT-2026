import React, { useState } from 'react';
import { MessageCircle, X, Send, PhoneCall, Shuffle } from 'lucide-react';
import { HELPLINE_CONTACTS, getRandomHelplineContact } from '../data/eventData';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleRandomChat = () => {
    const contact = getRandomHelplineContact();
    const text = userMsg.trim()
      ? encodeURIComponent(userMsg)
      : encodeURIComponent(`Hello ${contact.name} (${contact.role})! I have a question regarding REACT 2026 competition.`);
    window.open(`https://wa.me/${contact.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleSpecificChat = (number: string, name: string, role: string) => {
    const text = userMsg.trim()
      ? encodeURIComponent(userMsg)
      : encodeURIComponent(`Hello ${name} (${role})! I have a question regarding REACT 2026 competition.`);
    window.open(`https://wa.me/${number}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Expanded Popup Card */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-3xl p-5 shadow-2xl border-2 border-emerald-500 w-80 sm:w-96 text-gray-900 animate-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-gray-900">REACT Contact Helpline</h4>
                <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  IEEE SEU SB Support Team
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-emerald-50 p-3 rounded-2xl text-xs text-emerald-900 mb-3 font-medium">
            👋 Have a query? Click below to chat with a helpline executive. Clicking will randomly connect you to one of our helpline leaders!
          </div>

          {/* List of Helpline Officers */}
          <div className="space-y-2 mb-3">
            <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">
              Helpline Officers & Leads:
            </span>
            {HELPLINE_CONTACTS.map((c) => (
              <div
                key={c.name}
                onClick={() => handleSpecificChat(c.whatsappNumber, c.name, c.role)}
                className="p-2.5 rounded-xl border border-gray-200 hover:border-emerald-500 bg-gray-50 hover:bg-emerald-50/50 flex items-center justify-between transition-all cursor-pointer group"
              >
                <div>
                  <strong className="text-xs font-bold text-gray-900 block group-hover:text-emerald-700">
                    {c.name}
                  </strong>
                  <span className="text-[10px] text-gray-500 font-medium">
                    {c.role} • {c.phone}
                  </span>
                </div>
                <div className="p-1.5 rounded-lg bg-emerald-600 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <textarea
              rows={2}
              placeholder="Type your message here (optional)..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-emerald-500"
            />

            <button
              onClick={handleRandomChat}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Shuffle className="w-4 h-4" />
              <span>Random Helpline Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={handleRandomChat}
        className="px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2 group hover:scale-105 transition-all border-2 border-white cursor-pointer"
        title="WhatsApp Support (Random Helpline Officer)"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline">WhatsApp Help</span>
      </button>

    </div>
  );
};
