import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowRight, 
  HeartHandshake, 
  Globe, 
  Handshake, 
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const HomePartnersAndCTA: React.FC = () => {
  const { partners, navigateTo, setIsSupportModalOpen } = useApp();
  const featuredPartners = partners.slice(0, 6);

  return (
    <div className="space-y-20 py-20 bg-[#F8FAFC] border-t border-slate-200">
      
      {/* PARTNERS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider">
              <Handshake className="w-3.5 h-3.5" />
              <span>Alliances & Cooperation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] tracking-tight font-serif-brand">
              Our Partners: Stronger Together
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Working hand-in-hand with Ugandan community schools, agricultural collectives, and international partners in Germany and worldwide.
            </p>
          </div>

          <button
            onClick={() => navigateTo('about', 'partners')}
            className="text-sm font-bold text-[#1E40AF] hover:text-blue-800 flex items-center gap-1.5 shrink-0 hover:underline"
          >
            <span>View All Partners (Under About Us)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E40AF] bg-blue-50 px-2 py-0.5 rounded">
                    {partner.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-amber-500" />
                    {partner.country}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#172554]">
                  {partner.name}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  Active Collaboration
                </span>
                <button
                  onClick={() => navigateTo('about', 'partners')}
                  className="font-bold text-[#1E40AF] hover:underline flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#172554] via-[#1E40AF] to-[#1D4ED8] rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-300/30">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Join Our Community Effort</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-brand tracking-tight leading-tight">
              Ready to create lasting change alongside Ugandan communities?
            </h2>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
              Whether you are an aspiring international volunteer seeking mutual learning, a school wanting to partner, or an ally supporting our grassroots initiatives, there is a place for you at Hands of Mercy Uganda.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => navigateTo('volunteer')}
                className="btn-gainlove px-7 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm shadow-lg shadow-orange-600/30 cursor-pointer"
                id="home-cta-volunteer-btn"
              >
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
                <span>Apply as a Volunteer</span>
              </button>

              <button
                onClick={() => navigateTo('about', 'partners')}
                className="btn-gainlove px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm backdrop-blur-sm cursor-pointer"
              >
                <span className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <Handshake className="w-3 h-3 text-white" />
                </span>
                <span>Explore Partnerships</span>
              </button>

              <button
                onClick={() => setIsSupportModalOpen(true)}
                className="px-5 py-3.5 text-blue-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Support Our Mission →
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
