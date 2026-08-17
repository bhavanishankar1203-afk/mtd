import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, ChevronRight, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
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
    { label: 'Services', href: '#services' },
    { label: 'New Construction', href: '#new-construction' },
    { label: 'Mini Splits', href: '#mini-splits' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Notification / Utility Bar */}
      <div className="bg-[#070e17] text-gray-400 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-gray-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#1677C8]" />
              <span>Serving Shelley, ID & Surrounding Communities</span>
            </div>
            <span className="hidden md:inline-block text-white/20">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-[#1677C8]" />
              <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 hidden sm:inline text-[10px] font-mono tracking-[0.2em] uppercase">
              Quality Workmanship • Straightforward Service
            </span>
            <a
              href={COMPANY_INFO.phoneFormattedTel}
              className="font-bold text-white hover:text-[#1677C8] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#1677C8]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1726]/98 backdrop-blur-md shadow-2xl py-3 border-b border-white/10'
            : 'bg-[#0B1726] py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 bg-[#1677C8] flex items-center justify-center font-black italic text-xl text-white shadow-md">
              MTD
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tighter flex items-center gap-1.5 font-['Manrope']">
                <span>MTD</span>
                <span className="text-[#1677C8]">HEATING</span>
              </div>
              <div className="text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase">
                Shelley, Idaho • HVAC Solutions
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#1677C8] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#1677C8] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_INFO.phoneFormattedTel}
              className="flex items-center gap-3 bg-[#1677C8] px-5 py-2.5 font-bold text-white hover:bg-[#125ea0] transition-colors shadow-md group"
            >
              <div className="text-left leading-tight">
                <span className="block text-[9px] uppercase tracking-widest text-blue-100 font-mono">Call Now</span>
                <span className="font-bold text-sm tracking-tight">{COMPANY_INFO.phone}</span>
              </div>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest border border-white/15 transition-all cursor-pointer"
            >
              <span>REQUEST QUOTE</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Quick Phone Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_INFO.phoneFormattedTel}
              className="inline-flex items-center justify-center w-10 h-10 bg-[#1677C8] text-white"
              aria-label="Call MTD Heating"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center w-10 h-10 bg-white/10 text-white hover:bg-white/20 border border-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B1726] border-t border-white/10 px-4 pt-3 pb-6 mt-3 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-gray-200 hover:bg-white/5 hover:text-[#1677C8] flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={COMPANY_INFO.phoneFormattedTel}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1677C8] text-white font-bold text-sm uppercase tracking-widest shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW: {COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3.5 bg-white/10 text-white font-bold text-xs uppercase tracking-widest border border-white/15 hover:bg-white/20 text-center cursor-pointer"
              >
                REQUEST A FREE QUOTE
              </button>

              <div className="text-center text-xs text-gray-400 pt-1 font-mono">
                Shelley, ID • menofmetal@hotmail.com
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
