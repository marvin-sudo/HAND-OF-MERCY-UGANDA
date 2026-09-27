import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowRight, 
  Heart, 
  Handshake, 
  Sprout, 
  GraduationCap, 
  ShieldCheck, 
  Users2, 
  Sparkles, 
  HeartHandshake,
  Award
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { navigateTo } = useApp();

  const values = [
    { title: 'Love', icon: <Heart className="w-5 h-5 text-red-500" />, desc: 'The foundation of everything we do, inspiring compassion and unconditional unity.' },
    { title: 'Compassion', icon: <Handshake className="w-5 h-5 text-blue-600" />, desc: 'Walking alongside individuals with empathy, listening, and practical care.' },
    { title: 'Empowerment', icon: <Sprout className="w-5 h-5 text-emerald-600" />, desc: 'Equipping youth and women with tools to become resilient and self-reliant.' },
    { title: 'Education', icon: <GraduationCap className="w-5 h-5 text-indigo-600" />, desc: 'Unlocking human potential and breaking generational poverty through learning.' },
    { title: 'Dignity', icon: <ShieldCheck className="w-5 h-5 text-amber-600" />, desc: 'Restoring honor, personal self-worth, and respect to every person we reach.' },
    { title: 'Community', icon: <Users2 className="w-5 h-5 text-teal-600" />, desc: 'Fostering collective ownership, solidarity, and mutual responsibility.' },
    { title: 'Hope', icon: <Sparkles className="w-5 h-5 text-yellow-500" />, desc: 'Igniting optimism for a brighter future even in difficult circumstances.' },
    { title: 'Service', icon: <HeartHandshake className="w-5 h-5 text-purple-600" />, desc: 'Selfless dedication to uplifting others without expecting anything in return.' }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200" id="who-we-are">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro Block: Who We Are & Purpose */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: About Hand of Mercy Uganda Image */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <img
              src="https://i.postimg.cc/y8wHtFVV/sertli.png"
              alt="About Hand of Mercy Uganda"
              className="w-full h-auto max-h-[680px] object-contain drop-shadow-md transition-transform duration-300 hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider">
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] tracking-tight font-serif-brand leading-tight">
              About Hand of Mercy Uganda
            </h2>

            <p className="text-slate-700 leading-relaxed text-base font-normal">
              <strong>Hand of Mercy Uganda (HMU)</strong> is a fully registered indigenous non-profit organisation (REG 1940) serving vulnerable communities across Uganda. Founded in 2008, we exist to restore dignity, bring healing, and ignite hope among children, youth, women, families, and the elderly.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm">
              Our approach is holistic. We recognise that lasting transformation requires more than meeting one need. Through education, community outreach, livelihoods, health, sanitation, and compassionate support, we walk alongside communities as they build stronger and more hopeful futures.
            </p>

            {/* Vision & Mission Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E40AF] block">
                  Our Vision
                </span>
                <p className="text-xs text-slate-800 font-semibold mt-1 leading-snug">
                  To create a continuous chain of love among the people of Uganda and beyond.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-orange-100 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F97316] block">
                  Our Mission
                </span>
                <p className="text-xs text-slate-800 font-semibold mt-1 leading-snug">
                  To be a leading organisation offering a continuous helping hand through love.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateTo('about')}
                className="px-5 py-2.5 rounded-xl bg-[#1E40AF] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-900/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigateTo('about', 'founder')}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:border-[#1E40AF] text-slate-700 hover:text-[#1E40AF] font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-600" />
                <span>About the Founder</span>
              </button>
            </div>
          </div>

        </div>

        {/* Values Section: Refined editorial format */}
        <div className="pt-12 border-t border-slate-200/80">
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
                The heartbeat of our mission guiding our volunteers, teachers, community leaders, and partnerships across Uganda.
              </p>
            </div>

            {/* Right Column: Clean 2-column values list */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-7 sm:gap-y-8">
                {values.map((v, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="shrink-0">
                        {v.icon}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[#172554] tracking-tight">
                        {v.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
