import React, { useState } from 'react';
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Flame, 
  Wind, 
  Building2, 
  Snowflake, 
  Star, 
  Zap, 
  MapPin, 
  Clock, 
  ChevronRight,
  Sparkles,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenQuoteModal: (service?: string) => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onScrollToSection }) => {
  const [activeTab, setActiveTab] = useState<'construction' | 'minisplit' | 'fullsystem'>('construction');
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    service: 'New Construction',
    propertyType: 'Residential Home',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroShowcaseData = {
    construction: {
      title: 'New Construction HVAC Rough-Ins',
      badge: 'BUILDER & HOMEOWNER SPECIALTY',
      description: 'Precision ductwork layout, manual J/D sizing, and mechanical rough-ins built specifically for East Idaho custom homes and new builds.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop',
      stats: [
        { label: 'Ductwork Fit', val: 'Custom Sized' },
        { label: 'Phase Speed', val: 'On-Schedule' },
        { label: 'Airflow Balance', val: 'Room-by-Room' }
      ],
      highlights: ['Custom sheet metal transitions', 'Tight mastic sealing', 'Direct contractor coordination']
    },
    minisplit: {
      title: 'Ductless Mini Split Heat Pumps',
      badge: 'YEAR-ROUND HIGH EFFICIENCY',
      description: 'Pinpoint zoned heating and cooling for master suites, bonus rooms, detached shops, and additions without running bulky ductwork.',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1400&auto=format&fit=crop',
      stats: [
        { label: 'Efficiency', val: 'Up to 24+ SEER2' },
        { label: 'Low Temp Heat', val: 'Down to -15°F' },
        { label: 'Sound Level', val: 'Whisper 19dB' }
      ],
      highlights: ['Individual room zone remotes', 'Heating & AC in one unit', 'Fast tidy installation']
    },
    fullsystem: {
      title: 'High-Efficiency Furnace & Central AC',
      badge: 'COMPLETE WHOLE-HOME COMFORT',
      description: 'Upgrade your aged heating and cooling systems to reliable, energy-saving equipment engineered for harsh Idaho winters and hot summer days.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1400&auto=format&fit=crop',
      stats: [
        { label: 'AFUE Heating', val: 'Up to 96% Gas' },
        { label: 'Warranty', val: 'Full Coverage' },
        { label: 'Reliability', val: 'Tested & Verified' }
      ],
      highlights: ['Proper CFM static pressure', 'Clean architectural line-sets', 'Honest diagnostic sizing']
    }
  };

  const currentTab = heroShowcaseData[activeTab];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div id="home" className="relative bg-[#0B1726] text-white overflow-hidden border-b border-white/10">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1677C8]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-[#1677C8]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Modern Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-14 lg:pb-24">
        
        {/* Top Floating Trust Badge & Live Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/15 backdrop-blur-md text-xs font-mono text-gray-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-white font-semibold">Active Service:</span>
            <span className="text-[#1677C8] font-bold">Shelley • Firth • Idaho Falls • Bingham County</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="text-white font-bold ml-1 font-sans">5.0 Star</span> Rating
            </span>
            <span className="text-white/20">|</span>
            <span className="text-gray-300 font-semibold">Licensed & Insured HVAC</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#1677C8]/20 border border-[#1677C8]/40 text-[#1677C8] text-xs font-bold uppercase tracking-[0.18em] font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shelley, Idaho Premier HVAC</span>
            </div>

            {/* Main Headline with Premium Gradient & Impact */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black leading-[1.02] tracking-tight font-['Manrope']">
              Heating & Cooling <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#1677C8]">
                Done Right.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Specialized HVAC craftsmanship for <span className="text-white font-semibold underline decoration-[#1677C8] decoration-2 underline-offset-4">new construction builds</span>, ultra-efficient <span className="text-white font-semibold underline decoration-[#1677C8] decoration-2 underline-offset-4">ductless mini splits</span>, and whole-house heating & cooling across Shelley and East Idaho.
            </p>

            {/* Interactive Tab Switcher to Highlight Specialties */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                <span>Explore Specialty Solutions:</span>
              </div>
              <div className="grid grid-cols-3 gap-2 bg-white/5 p-1.5 border border-white/10 max-w-xl">
                <button
                  onClick={() => setActiveTab('construction')}
                  className={`py-2 px-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'construction'
                      ? 'bg-[#1677C8] text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span className="truncate">New Builds</span>
                </button>

                <button
                  onClick={() => setActiveTab('minisplit')}
                  className={`py-2 px-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'minisplit'
                      ? 'bg-[#1677C8] text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Wind className="w-3.5 h-3.5" />
                  <span className="truncate">Mini Splits</span>
                </button>

                <button
                  onClick={() => setActiveTab('fullsystem')}
                  className={`py-2 px-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'fullsystem'
                      ? 'bg-[#1677C8] text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span className="truncate">Furnace & AC</span>
                </button>
              </div>
            </div>

            {/* Dynamic Highlight Card for Selected Specialty */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-[#0e1d2f] to-[#0B1726] border border-[#1677C8]/30 relative overflow-hidden group shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#1677C8] uppercase bg-[#1677C8]/10 px-2 py-0.5 border border-[#1677C8]/20 self-start">
                  {currentTab.badge}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  Guaranteed Workmanship
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Manrope'] mb-1.5">
                {currentTab.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
                {currentTab.description}
              </p>

              {/* Mini Stats Strip */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
                {currentTab.stats.map((st, idx) => (
                  <div key={idx} className="bg-white/5 py-1.5 px-2">
                    <div className="text-xs sm:text-sm font-extrabold text-white font-mono">{st.val}</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-tight">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs & Direct Contact */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal(currentTab.title)}
                className="px-8 py-4 bg-[#1677C8] hover:bg-[#125ea0] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#1677C8]/30 group cursor-pointer hover:translate-y-[-1px]"
              >
                <span>REQUEST FREE QUOTE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={COMPANY_INFO.phoneFormattedTel}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white flex items-center justify-center gap-3 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#1677C8] flex items-center justify-center text-white shrink-0 shadow">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-mono">Talk Directly</span>
                  <span className="font-bold text-sm text-white group-hover:text-[#1677C8] transition-colors">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* 3 Quick Assurance Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0" />
                <span>No High-Pressure Sales</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0" />
                <span>Clean Sheet Metal & Wiring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0" />
                <span>Fast Shelley Area Response</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase + High-Converting Fast Form */}
          <div className="lg:col-span-5 relative space-y-6">
            
            {/* Visual Media Card with Glowing Accents */}
            <div className="relative border border-white/20 bg-[#0e1d2f] shadow-2xl overflow-hidden group">
              {/* Image Preview with Dynamic Overlay */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <img
                  src={currentTab.image}
                  alt={currentTab.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d2f] via-transparent to-black/40" />

                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-[#0B1726]/90 backdrop-blur-md px-3 py-1 border border-white/20 text-[10px] font-mono uppercase tracking-widest text-[#1677C8] font-bold">
                  {currentTab.badge}
                </div>

                {/* Live Badge */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-white/10 text-[10px] font-mono text-gray-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                  Shelley, ID
                </div>
              </div>

              {/* Interactive Quick Estimate Form Inside Card */}
              <div className="p-5 sm:p-6 bg-[#0e1d2f]">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white font-['Manrope']">
                      Get a Quick Estimate
                    </h3>
                    <p className="text-xs text-gray-400">
                      Fast response from local technician
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-[#1677C8] uppercase font-bold tracking-wider">
                      Zero Hassle
                    </span>
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="py-6 text-center space-y-3 bg-white/5 border border-emerald-500/30 p-4">
                    <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white font-['Manrope']">Request Received!</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Thank you! We will reach out to you at <span className="text-white font-bold">{quickForm.phone}</span> with your estimate details.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#1677C8] hover:underline font-mono uppercase tracking-wider"
                    >
                      Submit another project
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Name"
                          value={quickForm.name}
                          onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                          className="w-full px-3 py-2 bg-white/5 border border-white/15 text-white placeholder:text-gray-500 text-xs focus:border-[#1677C8] focus:ring-1 focus:ring-[#1677C8] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(208) 555-0123"
                          value={quickForm.phone}
                          onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                          className="w-full px-3 py-2 bg-white/5 border border-white/15 text-white placeholder:text-gray-500 text-xs focus:border-[#1677C8] focus:ring-1 focus:ring-[#1677C8] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1">
                          Service Needed
                        </label>
                        <select
                          value={quickForm.service}
                          onChange={(e) => setQuickForm({ ...quickForm, service: e.target.value })}
                          className="w-full px-3 py-2 bg-[#0B1726] border border-white/15 text-white text-xs focus:border-[#1677C8] outline-none"
                        >
                          <option value="New Construction">New Construction</option>
                          <option value="Mini Split Heat Pump">Ductless Mini Split</option>
                          <option value="Furnace / Heating">Furnace & Heating</option>
                          <option value="Air Conditioning">Air Conditioning</option>
                          <option value="System Repair">System Repair</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1">
                          Property Type
                        </label>
                        <select
                          value={quickForm.propertyType}
                          onChange={(e) => setQuickForm({ ...quickForm, propertyType: e.target.value })}
                          className="w-full px-3 py-2 bg-[#0B1726] border border-white/15 text-white text-xs focus:border-[#1677C8] outline-none"
                        >
                          <option value="Residential Home">New Home / Residence</option>
                          <option value="Shop / Garage">Detached Shop / Garage</option>
                          <option value="Existing Home">Existing Home Upgrade</option>
                          <option value="Addition / Remodel">Addition / Remodel</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#1677C8] hover:bg-[#125ea0] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
                    >
                      <span>SUBMIT FOR FAST ESTIMATE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 font-mono">
                      <span>Direct: {COMPANY_INFO.phone}</span>
                      <span>No Spam Guarantee</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Quick Feature Callouts Below Card */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white/5 border border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#1677C8] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Licensed & Insured</div>
                  <div className="text-[10px] text-gray-400">Bingham County Pro</div>
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 flex items-center gap-3">
                <Award className="w-5 h-5 text-[#1677C8] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Quality Guarantee</div>
                  <div className="text-[10px] text-gray-400">Done Right The 1st Time</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
