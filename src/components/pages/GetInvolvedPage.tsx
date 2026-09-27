import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Heart, 
  Handshake, 
  Gift, 
  GraduationCap, 
  Share2, 
  ArrowRight, 
  Copy, 
  CheckCircle2, 
  Users, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const GetInvolvedPage: React.FC = () => {
  const { navigateTo, setIsSupportModalOpen, showToast } = useApp();
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    const url = window.location.origin;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      showToast('Link Copied', 'Hand of Mercy Uganda website link copied to clipboard!');
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const pathways = [
    {
      id: 'volunteer',
      title: 'Volunteer',
      actionTitle: 'Give Your Time and Skills',
      desc: 'Join us in Uganda or contribute remotely. Support teaching, agriculture, women empowerment, or vocational training as an individual, student, or fellowship group.',
      icon: <Users className="w-7 h-7 text-[#1E40AF]" />,
      cta: 'Explore Volunteer Roles',
      onClick: () => navigateTo('volunteer'),
      color: 'border-blue-200 hover:border-blue-400 bg-blue-50/30',
      badge: 'On-the-ground & Remote'
    },
    {
      id: 'partner',
      title: 'Partner',
      actionTitle: 'Institutional & Community Alliances',
      desc: 'Work with HMU as an organisation, school, business, church, or institution. We build respectful, reciprocal alliances that achieve sustainable community development.',
      icon: <Handshake className="w-7 h-7 text-[#F97316]" />,
      cta: 'Partner With HMU',
      onClick: () => navigateTo('partner'),
      color: 'border-orange-200 hover:border-orange-400 bg-orange-50/30',
      badge: 'Schools, Churches, NGOs'
    },
    {
      id: 'give',
      title: 'Give',
      actionTitle: 'Support Programs & Initiatives',
      desc: 'Provide funding for sustainable agriculture beds, clean water tanks, vocational sewing machines, or healthcare drives. 100% directly reaches local community needs.',
      icon: <Gift className="w-7 h-7 text-emerald-600" />,
      cta: 'Make a Contribution',
      onClick: () => setIsSupportModalOpen(true),
      color: 'border-emerald-200 hover:border-emerald-400 bg-emerald-50/30',
      badge: 'Direct Impact Funding'
    },
    {
      id: 'sponsor',
      title: 'Sponsor',
      actionTitle: 'Support Education & Vulnerable Children',
      desc: 'Sponsor a child’s secondary tuition, uniform, scholastic materials, and daily meals at Ebenezer High School or partner primary institutions.',
      icon: <GraduationCap className="w-7 h-7 text-indigo-600" />,
      cta: 'Sponsor a Student',
      onClick: () => navigateTo('partner'),
      color: 'border-indigo-200 hover:border-indigo-400 bg-indigo-50/30',
      badge: 'Education Sponsorship'
    },
    {
      id: 'share',
      title: 'Share',
      actionTitle: 'Spread the Chain of Love',
      desc: 'Help us spread the message and connect more people to the mission. Share our stories with your network, church, school, or community group.',
      icon: <Share2 className="w-7 h-7 text-amber-600" />,
      cta: copiedLink ? 'Link Copied!' : 'Share Our Website',
      onClick: handleShare,
      color: 'border-amber-200 hover:border-amber-400 bg-amber-50/30',
      badge: 'Advocacy & Awareness'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section: Exact requested headline & main message */}
      <section className="bg-gradient-to-b from-[#172554] via-[#1E40AF] to-[#1E3A8A] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#F97316]" />
            <span>A Continuous Chain of Love</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-brand tracking-tight max-w-4xl mx-auto leading-tight">
            How You Can Get Involved
          </h1>

          {/* Exact main message from user prompt */}
          <div className="max-w-2xl mx-auto space-y-2">
            <p className="text-xl sm:text-2xl text-amber-300 font-serif italic font-bold">
              &quot;You don’t have to do everything. You can simply do something.&quot;
            </p>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Every act of love can become part of a continuous chain.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <a
              href="#pathways-grid"
              className="px-8 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-base shadow-lg shadow-orange-600/30 flex items-center gap-2 transition-transform hover:scale-105"
            >
              <span>Explore the 5 Pathways</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Pathways Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="pathways-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              Actionable Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] font-serif-brand">
              5 Meaningful Ways to Take Part
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Find the pathway that fits your capacity, background, or organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathways.map((item) => (
              <div
                key={item.id}
                className={`p-8 rounded-3xl border-2 ${item.color} bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2.5 py-1 bg-slate-100 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider block">
                      {item.title}
                    </span>
                    <h3 className="text-xl font-bold text-[#172554] tracking-tight mt-0.5">
                      {item.actionTitle}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <button
                    onClick={item.onClick}
                    className="btn-gainlove w-full py-3.5 bg-[#1E40AF] hover:bg-blue-800 text-white text-xs sm:text-sm shadow-md shadow-blue-900/10 cursor-pointer group-hover:bg-[#F97316]"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </span>
                    <span>{item.cta}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pay It Forward Callout */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-amber-200 shadow-md text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F97316] block">
              The Guiding Principle
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172554]">
              Pay It Forward
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              Those who receive mercy are encouraged to extend mercy to someone else. From students tutoring younger peers to mothers sharing vocational skills with neighbors, every blessing creates a continuous ripple.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('about')}
                className="btn-gainlove px-6 py-2.5 border border-slate-300 hover:border-[#1E40AF] text-slate-700 hover:text-[#1E40AF] text-xs bg-white cursor-pointer"
              >
                Learn How HMU Operates
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
