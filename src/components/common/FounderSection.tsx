import React from 'react';
import { useApp } from '../../context/AppContext';
import { Award, BookOpen, Heart, Quote, ArrowRight, School, Sparkles, Handshake } from 'lucide-react';

export const FounderSection: React.FC<{ showDetailedBio?: boolean }> = ({ showDetailedBio = false }) => {
  const { navigateTo } = useApp();

  return (
    <section className="py-20 bg-white" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-[#172554] to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden relative border border-slate-800">
          
          {/* Subtle background ornamentation */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Portrait & Credentials */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl aspect-4/5 bg-slate-800">
                <img
                  src="https://www.image2url.com/r2/default/images/1789721554319-df06d226-fc8c-4b84-82b1-7617b1c8cbd2.jfif"
                  alt="Mr. Lubega Richard, Founder of Hand of Mercy Uganda"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F97316] text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3" /> Founder & Visionary
                  </div>
                  <h3 className="text-xl font-bold">Mr. Lubega Richard</h3>
                  <p className="text-xs text-blue-200">
                    Principal & Co-Founder, Ebenezer High School – Bulenga
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-blue-100 flex items-center gap-3">
                <School className="w-5 h-5 text-amber-300 shrink-0" />
                <span>Seasoned educationist, humanitarian, community leader, and spiritual mentor.</span>
              </div>
            </div>

            {/* Right Column: Bio & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                  About the Founder
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif-brand leading-tight">
                  A Life Dedicated to Education, Dignity, and Love
                </h2>
              </div>

              {/* Exact user provided copy */}
              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                <p>
                  Hand of Mercy Uganda was founded in 2008 by <strong>Mr. Lubega Richard</strong>, a seasoned educationist, humanitarian, community and spiritual leader, and parent.
                </p>
                <p>
                  He is the Principal and Co-Founder of <strong>Ebenezer High School – Bulenga</strong> and has dedicated his work to education, community development, and serving people in need.
                </p>
                <p className="text-sm text-slate-300">
                  His vision was sparked by witnessing the countless bright young minds forced to abandon schooling due to poverty, loss of parents, or family displacement. Rather than creating temporary aid handouts, Mr. Lubega established a sustainable sanctuary where children receive quality academics, moral grounding, agricultural literacy, and compassionate guidance.
                </p>
              </div>

              {/* Quote Block */}
              <div className="p-5 rounded-2xl bg-white/10 border border-white/15 relative">
                <Quote className="w-8 h-8 text-amber-400/40 absolute top-3 right-3 pointer-events-none" />
                <p className="text-xs sm:text-sm text-amber-200 italic font-serif leading-relaxed">
                  &quot;When you lift up a child through education and dignity, you do not simply rescue an individual—you ignite a continuous chain of love that heals generations to come.&quot;
                </p>
                <span className="block text-[11px] text-slate-300 font-bold mt-2">
                  — Mr. Lubega Richard
                </span>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigateTo('about')}
                  className="btn-gainlove px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm shadow-lg shadow-orange-600/25 cursor-pointer"
                >
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </span>
                  <span>Learn About Our Journey</span>
                </button>

                <button
                  onClick={() => navigateTo('partner')}
                  className="btn-gainlove px-5 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm backdrop-blur-sm cursor-pointer"
                >
                  <span className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                    <Handshake className="w-3 h-3 text-white" />
                  </span>
                  <span>Partner in the Mission</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
