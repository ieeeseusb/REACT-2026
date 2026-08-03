import React, { useState } from 'react';
import { X, Handshake, CheckCircle2, Send, Building2, Mail, Phone } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface PartnerInquiryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerInquiryModal: React.FC<PartnerInquiryProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Title Sponsor');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailSubject = encodeURIComponent('Interested in Partnering with React 2026');
    const emailBody = encodeURIComponent(
      `Company / Organization: ${companyName}\nContact Person: ${contactName}\nPhone: ${phone}\nOfficial Email: ${email}\nSponsorship Category: ${category}\n\nMessage / Proposal Note:\n${message}`
    );
    window.open(`mailto:${EVENT_DETAILS.contactEmail}?subject=${emailSubject}&body=${emailBody}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-white rounded-3xl max-w-lg w-full my-8 shadow-2xl border-2 border-gray-900 overflow-hidden relative animate-in zoom-in-95">
        
        {/* Header */}
        <div className="bg-gray-900 p-6 text-white flex items-center justify-between border-b-4 border-[#FF7700]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FF7700] text-white">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-xl uppercase tracking-wider text-white">
                Event Partner Inquiry
              </h3>
              <p className="text-xs text-[#FF7700] font-semibold">REACT 2026 • Southeast University</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 border-2 border-emerald-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-gray-900">Inquiry Received!</h3>
              <p className="text-gray-600 text-sm max-w-sm mx-auto">
                Thank you <strong>{contactName}</strong> from <strong>{companyName}</strong>. Our IEEE SEU SB sponsorship committee will contact you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-xs uppercase"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Company / Organization *</label>
                <input
                  type="text"
                  placeholder="e.g., TechCorp BD"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-semibold text-gray-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Contact Person *</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-semibold text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    placeholder="01700000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-semibold text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Official Email *</label>
                <input
                  type="email"
                  placeholder="corporate@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-semibold text-gray-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Partnership Interest</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-semibold text-gray-900"
                >
                  <option value="Title Sponsor">Title Sponsor</option>
                  <option value="Gold / Silver Sponsor">Gold / Silver Sponsor</option>
                  <option value="Robotics Kit Partner">Robotics Kit / Hardware Partner</option>
                  <option value="Youth Media Partner">Youth Media Partner</option>
                  <option value="Food & Beverage Partner">Food & Refreshment Partner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Message / Note</label>
                <textarea
                  rows={3}
                  placeholder="Tell us briefly about your sponsorship expectations..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-semibold text-gray-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#FF7700] text-white hover:bg-[#e06800] font-black text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Partner Proposal
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
