import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FounderSection } from '../common/FounderSection';
import { 
  Heart, 
  Handshake, 
  Sprout, 
  GraduationCap, 
  ArrowRight,
  CheckCircle2,
  Building2,
  Award,
  Sparkles,
  Users2,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo, partners, addEnquiry } = useApp();

  const [partnerFilter, setPartnerFilter] = useState<string>('All');
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerFormData, setPartnerFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Partnership Inquiry',
    message: '',
    preferredContactMethod: 'Email' as 'Email' | 'Phone' | 'WhatsApp'
  });

  const partnerCategories = [
    'All',
    'Community Partners',
    'Education Partners',
    'International Partners',
    'Volunteer Partners',
    'Institutional Partners'
  ];

  const filteredPartners = partnerFilter === 'All'
    ? partners
    : partners.filter(p => p.category === partnerFilter);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry(partnerFormData);
    setPartnerModalOpen(false);
    setPartnerFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Partnership Inquiry',
      message: '',
      preferredContactMethod: 'Email'
    });
  };

  const values = [
    { title: 'Love', icon: <Heart className="w-5 h-5 text-red-600" />, desc: 'The heartbeat of our mission, inspiring endless compassion and unconditional care.' },
    { title: 'Compassion', icon: <Handshake className="w-5 h-5 text-blue-600" />, desc: 'Walking alongside individuals with empathy, listening, and practical assistance.' },
    { title: 'Empowerment', icon: <Sprout className="w-5 h-5 text-emerald-600" />, desc: 'Equipping youth and women with tools to build resilient, self-reliant futures.' },
    { title: 'Education', icon: <GraduationCap className="w-5 h-5 text-indigo-600" />, desc: 'Unlocking human potential and breaking generational cycles of hardship.' },
    { title: 'Dignity', icon: <ShieldCheck className="w-5 h-5 text-amber-600" />, desc: 'Restoring honor, personal self-worth, and respect to every person we reach.' },
    { title: 'Community', icon: <Users2 className="w-5 h-5 text-teal-600" />, desc: 'Fostering collective ownership, cultural reciprocity, and mutual solidarity.' },
    { title: 'Hope', icon: <Sparkles className="w-5 h-5 text-yellow-600" />, desc: 'Igniting optimism for a brighter future even in difficult circumstances.' },
    { title: 'Service', icon: <HeartHandshake className="w-5 h-5 text-purple-600" />, desc: 'Selfless dedication to uplifting others without expecting anything in return.' }
  ];

  return (
    <div className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#172554] via-[#1E40AF] to-[#1E3A8A] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>Hand of Mercy Uganda (REG 1940) • Founded 2008</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-brand tracking-tight max-w-3xl mx-auto leading-tight">
            Who We Are
          </h1>

          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Committed to restoring dignity, bringing healing, and creating opportunities for vulnerable children, youth, women, families, and communities across Uganda.
          </p>
        </div>
      </section>

      {/* Section: Who We Are & Purpose */}
      <section className="py-20 bg-white" id="who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Visual Column: About Hand of Mercy Uganda Image */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <img
                src="https://i.postimg.cc/y8wHtFVV/sertli.png"
                alt="About Hand of Mercy Uganda"
                className="w-full h-auto max-h-[680px] object-contain drop-shadow-md transition-transform duration-300 hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider">
                <span>About Hand of Mercy Uganda</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] font-serif-brand leading-tight">
                Restoring Dignity. Bringing Healing. Igniting Hope.
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Hand of Mercy Uganda (HMU)</strong> is a fully registered indigenous non-profit organisation (REG 1940) serving vulnerable communities across Uganda.
                </p>
                <p>
                  Founded in 2008, we exist to restore dignity, bring healing, and ignite hope among children, youth, women, families, and the elderly.
                </p>
                <p>
                  Our approach is holistic. We recognise that lasting transformation requires more than meeting one need. Through education, community outreach, livelihoods, health, sanitation, and compassionate support, we walk alongside communities as they build stronger and more hopeful futures.
                </p>
              </div>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2" id="vision-mission">
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E40AF] block">
                    Our Vision
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold mt-1 leading-snug">
                    To create a continuous chain of love among the people of Uganda and beyond.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316] block">
                    Our Mission
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold mt-1 leading-snug">
                    To be a leading organisation offering a continuous helping hand through love.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Section: Core Values Editorial Layout */}
      <section className="py-20 bg-[#FAF9F5] border-y border-slate-200/80" id="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Display Headline "Core Values" */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#F97316]">
                Our Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-brand text-[#172554] tracking-tight leading-[1.1]">
                Core<br />Values
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs pt-1">
                The moral compass directing our volunteers, teachers, community leaders, and partnerships across Uganda.
              </p>
            </div>

            {/* Right Column: Clean 2-column values list with icons and no cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-7 sm:gap-y-8">
                {values.map((val, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="shrink-0">
                        {val.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#172554] tracking-tight">
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section: About the Founder */}
      <FounderSection showDetailedBio={true} />

      {/* Section: Partners (Stronger Together) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200" id="partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Handshake className="w-3.5 h-3.5 text-amber-600" />
                <span>Stronger Together</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] font-serif-brand">
                Our Valued Partners
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                We believe sustainable progress flourishes when local leaders and international allies collaborate as equals.
              </p>
            </div>

            <button
              onClick={() => navigateTo('partner')}
              className="btn-gainlove px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm shadow-md cursor-pointer w-fit"
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
              <span>Partner With HMU</span>
            </button>
          </div>

          {/* Partner Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {partnerCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setPartnerFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  partnerFilter === cat
                    ? 'bg-[#1E40AF] text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#1E40AF] text-[10px] font-bold">
                      {partner.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Since {partner.partnerSince}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#172554]">
                    {partner.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Focus: {partner.country}</span>
                  <span className="text-[#1E40AF] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Ally</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
