import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'New Construction',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const projectOptions = [
    'New Construction (Full HVAC)',
    'Ductless Mini Split System',
    'Heating / Furnace Service or Replacement',
    'Cooling / AC Installation or Repair',
    'General Repair / Troubleshooting',
    'Other / Custom Project'
  ];

  return (
    <section id="contact" className="py-20 bg-[#070e17] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-[#1677C8] font-bold text-xs uppercase tracking-[0.2em] mb-3 font-mono">
                <div className="w-8 h-px bg-[#1677C8]"></div>
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Manrope'] mb-4">
                Request an Estimate or Consult
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Whether you have architectural blueprints ready for bidding or need a mini split sized for your shop, we're here to help.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              <a
                href={COMPANY_INFO.phoneFormattedTel}
                className="flex items-start gap-4 p-5 bg-[#0B1726] border border-white/10 hover:border-[#1677C8] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1677C8]/20 group-hover:bg-[#1677C8] group-hover:text-white text-[#1677C8] flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-gray-400">Direct Phone</span>
                  <span className="text-lg font-bold text-white group-hover:text-[#1677C8] transition-colors font-['Manrope']">
                    {COMPANY_INFO.phone}
                  </span>
                  <p className="text-xs text-gray-400 mt-0.5">Call or leave a message for fast callback</p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-4 p-5 bg-[#0B1726] border border-white/10 hover:border-[#1677C8] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1677C8]/20 group-hover:bg-[#1677C8] group-hover:text-white text-[#1677C8] flex items-center justify-center shrink-0 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-gray-400">Email Address</span>
                  <span className="text-base font-bold text-white group-hover:text-[#1677C8] transition-colors font-mono">
                    {COMPANY_INFO.email}
                  </span>
                  <p className="text-xs text-gray-400 mt-0.5">Send plans, specs, or questions</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-[#0B1726] border border-white/10">
                <div className="w-10 h-10 bg-[#1677C8]/20 text-[#1677C8] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-gray-400">Physical Base</span>
                  <span className="text-base font-bold text-white font-['Manrope']">
                    {COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.zip}
                  </span>
                  <p className="text-xs text-gray-400 mt-0.5">Serving Shelley, Firth, Idaho Falls, Blackfoot & Ammon</p>
                </div>
              </div>

            </div>

            {/* Operating Hours */}
            <div className="p-4 bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#1677C8] shrink-0" />
              <div>
                <span className="font-bold text-white">Business Hours: </span>
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Contrast Request Form */}
          <div className="lg:col-span-7 relative">
            {/* Geometric Accent Square */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#1677C8] -mr-3 -mt-3 z-0 hidden sm:block"></div>

            <div className="relative z-10 bg-white text-[#111827] p-8 sm:p-10 shadow-2xl border border-slate-200">
              
              <div className="border-b border-gray-100 pb-5 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#1677C8] uppercase tracking-widest font-mono">
                    Free Consultation & Estimate
                  </span>
                  <h3 className="text-2xl font-black text-[#0B1726] font-['Manrope']">
                    Send Us Your Project Details
                  </h3>
                </div>
                <div className="w-10 h-10 bg-[#0B1726] text-white flex items-center justify-center font-bold text-xs">
                  MTD
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B1726] font-['Manrope']">
                    Thank You, {formData.name || 'Valued Customer'}!
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    We have received your message regarding <strong>{formData.serviceType}</strong>. Our team will review your project details and get in touch with you shortly.
                  </p>
                  <div className="p-4 bg-slate-50 border border-slate-200 text-xs text-gray-700 max-w-sm mx-auto text-left">
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        serviceType: 'New Construction',
                        address: '',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-3 bg-[#0B1726] text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase font-bold text-gray-700 font-mono tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border-b border-gray-300 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1677C8] bg-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase font-bold text-gray-700 font-mono tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(208) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border-b border-gray-300 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1677C8] bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase font-bold text-gray-700 font-mono tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border-b border-gray-300 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1677C8] bg-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase font-bold text-gray-700 font-mono tracking-wider mb-1">
                        Project Scope *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full border-b border-gray-300 py-2 text-sm text-gray-900 focus:outline-none focus:border-[#1677C8] bg-transparent"
                      >
                        {projectOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-gray-700 font-mono tracking-wider mb-1">
                      Job Location (City / Street in Shelley Area)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Shelley, Firth, or Idaho Falls"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full border-b border-gray-300 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1677C8] bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-gray-700 font-mono tracking-wider mb-1">
                      Project Notes / Timeline
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your build timeline, square footage, specific rooms, or heating/cooling goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border-b border-gray-300 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1677C8] bg-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#111827] hover:bg-[#1677C8] text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Submit Project Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-100 font-mono">
                    <span>Direct: {COMPANY_INFO.phone}</span>
                    <span>{COMPANY_INFO.email}</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
