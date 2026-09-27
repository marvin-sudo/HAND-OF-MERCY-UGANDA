import React from 'react';
import { useApp } from '../../context/AppContext';
import { Heart, ArrowRight, Handshake, Users, Sparkles } from 'lucide-react';

export const HomeGetInvolvedCallout: React.FC = () => {
  const { navigateTo, setIsSupportModalOpen } = useApp();

  return (
    <section className="py-20 bg-gradient-to-br from-[#172554] via-[#1E40AF] to-[#0F172A] text-white relative overflow-hidden" id="get-involved-callout">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
          <Heart className="w-3.5 h-3.5 text-[#F97316]" />
          <span>Section 7 • Get Involved</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-brand tracking-tight leading-tight">
            How You Can Get Involved
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-2">
            <p className="text-xl sm:text-2xl text-amber-300 font-serif italic font-bold">
              &quot;You don’t have to do everything. You can simply do something.&quot;
            </p>
            <p className="text-blue-100 text-base sm:text-lg">
              Every act of love can become part of a continuous chain.
            </p>
          </div>
        </div>

        {/* 5 Quick Pathways */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 text-xs font-semibold">
          {[
            { label: 'Volunteer', desc: 'Give your time & skills', onClick: () => navigateTo('volunteer') },
            { label: 'Partner', desc: 'Work with HMU as an organisation', onClick: () => navigateTo('partner') },
            { label: 'Give', desc: 'Support specific programs', onClick: () => setIsSupportModalOpen(true) },
            { label: 'Sponsor', desc: 'Support education for a child', onClick: () => navigateTo('partner') },
            { label: 'Share', desc: 'Spread the message of hope', onClick: () => navigateTo('get-involved') }
          ].map((item, i) => (
            <button
              key={i}
              onClick={item.onClick}
              className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-left transition-all hover:scale-105 cursor-pointer backdrop-blur-xs flex flex-col justify-between"
            >
              <span className="font-extrabold text-amber-300 text-sm block mb-1">
                {item.label}
              </span>
              <span className="text-[11px] text-blue-100 font-normal leading-snug">
                {item.desc}
              </span>
            </button>
          ))}
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigateTo('get-involved')}
            className="btn-gainlove px-8 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm shadow-lg shadow-orange-600/30 cursor-pointer"
          >
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
            <span>Explore All Ways to Get Involved</span>
          </button>
        </div>

      </div>
    </section>
  );
};
