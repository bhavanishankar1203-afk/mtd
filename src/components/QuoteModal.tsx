import React, { useState } from 'react';
import { X, Send, Phone, CheckCircle2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'New Construction'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: initialService,
    propertyAddress: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const projectOptions = [
    'New Construction',
    'Mini Split',
    'Heating',
    'Cooling',
    'Repair',
    'Other'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#0B1726] border border-white/20 text-white max-w-xl w-full p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-['Manrope'] text-white">
              Request Received!
            </h3>
            <p className="text-gray-300 text-sm max-w-sm mx-auto leading-relaxed">
              Thank you for contacting MTD Heating. We will review your project details and get in touch with you shortly.
            </p>
            <div className="p-4 bg-white/5 border border-white/10 text-xs text-gray-300 max-w-sm mx-auto text-left space-y-1">
              <p><strong>Service:</strong> {formData.projectType}</p>
              <p><strong>Contact:</strong> {formData.phone}</p>
            </div>
            <div className="pt-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 bg-[#1677C8] hover:bg-[#125ea0] text-white text-xs font-bold uppercase tracking-widest cursor-pointer shadow-md"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-[#1677C8] font-bold text-xs uppercase tracking-[0.2em] mb-2 font-mono">
                <div className="w-6 h-px bg-[#1677C8]"></div>
                MTD Heating • Shelley, ID
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope']">
                Request a Free Quote
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Fill out this quick form or call us directly at{' '}
                <a href={COMPANY_INFO.phoneFormattedTel} className="font-bold text-[#1677C8] hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 font-mono mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 text-white placeholder:text-gray-500 text-sm focus:border-[#1677C8] focus:ring-1 focus:ring-[#1677C8] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 font-mono mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(208) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 text-white placeholder:text-gray-500 text-sm focus:border-[#1677C8] focus:ring-1 focus:ring-[#1677C8] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 font-mono mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 text-white placeholder:text-gray-500 text-sm focus:border-[#1677C8] focus:ring-1 focus:ring-[#1677C8] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 font-mono mb-1.5">
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0e1d2f] border border-white/15 text-white text-sm focus:border-[#1677C8] focus:ring-1 focus:ring-[#1677C8] outline-none"
                  >
                    {projectOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0e1d2f] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 font-mono mb-1.5">
                  Property Address / City (Shelley Area)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Shelley, ID"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 text-white placeholder:text-gray-500 text-sm focus:border-[#1677C8] focus:ring-1 focus:ring-[#1677C8] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 font-mono mb-1.5">
                  Brief Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you're looking for (e.g. new home build, mini split for shop, furnace service)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 text-white placeholder:text-gray-500 text-sm focus:border-[#1677C8] focus:ring-1 focus:ring-[#1677C8] outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#1677C8] hover:bg-[#125ea0] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-75"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>SUBMIT QUOTE REQUEST</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-white/10 font-mono">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#1677C8]" />
                  (208) 520-8096
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#1677C8]" />
                  menofmetal@hotmail.com
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
