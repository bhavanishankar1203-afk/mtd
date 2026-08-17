import React from 'react';
import { Star, MessageSquare, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B1726] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#1677C8] font-bold text-xs uppercase tracking-[0.2em] mb-3 font-mono">
            <div className="w-8 h-px bg-[#1677C8]"></div>
            Real Feedback
            <div className="w-8 h-px bg-[#1677C8]"></div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Manrope'] mb-4">
            Customer Reviews
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            We let our finished jobsites and homeowner satisfaction speak for itself.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#0e1d2f] border border-white/10 p-6 flex flex-col justify-between hover:border-[#1677C8]/50 transition-colors"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block font-['Manrope']">{t.author}</span>
                  <span className="text-gray-400 text-[11px] font-mono">{t.location}</span>
                </div>
                <span className="text-[10px] font-mono text-[#1677C8] uppercase font-bold bg-[#1677C8]/10 px-2 py-1">
                  {t.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Google Reviews */}
        <div className="text-center text-xs text-gray-400 font-mono">
          <span>Are you a current customer? We appreciate your local recommendations and reviews!</span>
        </div>

      </div>
    </section>
  );
};
