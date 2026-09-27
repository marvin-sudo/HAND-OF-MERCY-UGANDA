import React from 'react';
import { Ear, Users2, Sparkles, TrendingUp, Compass, ArrowRight } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Listen',
      desc: 'We listen to communities and understand local needs, cultural wisdom, and tangible opportunities.',
      icon: <Ear className="w-6 h-6 text-[#1E40AF]" />,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      num: '02',
      title: 'Partner',
      desc: 'We work together with schools, communities, volunteers, civic leaders, and international allies.',
      icon: <Users2 className="w-6 h-6 text-indigo-600" />,
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      num: '03',
      title: 'Empower',
      desc: 'We focus on knowledge, skills, resources, and platforms that enable local people to lead and thrive.',
      icon: <Sparkles className="w-6 h-6 text-[#F97316]" />,
      color: 'bg-orange-50 border-orange-200'
    },
    {
      num: '04',
      title: 'Grow',
      desc: 'We support initiatives that can develop and self-sustain over time without ongoing outside dependence.',
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      color: 'bg-emerald-50 border-emerald-200'
    },
    {
      num: '05',
      title: 'Transform',
      desc: 'We measure success through durable improvements in literacy, nutrition, dignity, and opportunity.',
      icon: <Compass className="w-6 h-6 text-sky-600" />,
      color: 'bg-sky-50 border-sky-200'
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-100 text-[#F97316] text-xs font-bold uppercase tracking-wider">
            <span>Our Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] tracking-tight font-serif-brand">
            How We Create Change
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Meaningful transformation is neither rushed nor imposed from the outside. Our five-stage journey ensures community ownership and lasting value.
          </p>
        </div>

        {/* Visual Horizontal Journey */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`relative rounded-2xl p-6 border ${step.color} flex flex-col justify-between hover:shadow-lg transition-all duration-200 group bg-white`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold text-slate-300 group-hover:text-[#F97316] transition-colors font-serif-brand">
                    {step.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#172554] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process philosophy banner */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200/80 text-center max-w-2xl mx-auto text-xs text-slate-600">
          <span className="font-bold text-[#172554]">Horizontal Co-Operation: </span>
          Listen <span className="text-[#F97316] font-bold">→</span> Partner <span className="text-[#F97316] font-bold">→</span> Empower <span className="text-[#F97316] font-bold">→</span> Grow <span className="text-[#F97316] font-bold">→</span> Transform
        </div>

      </div>
    </section>
  );
};
